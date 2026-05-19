import { FormEvent, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Service } from '../types';
import { PHONE_NUMBER } from '../constants';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  services: { [key: string]: Service[] };
  accentColor?: string;
  customPhoneNumber?: string;
  whatsappMessagePrefix?: string;
}

type LeadFormData = {
  name: string;
  telephone: string;
  email: string;
};

export const CatalogModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  services,
  accentColor = "brand-gold",
  customPhoneNumber,
  whatsappMessagePrefix
}: CatalogModalProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    telephone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSelectedService(null);
      setSubmitError('');
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const defaultMessagePrefix = "Olá, gostaria de agendar minha experiência na Beauty Glow!";
  const messagePrefix = whatsappMessagePrefix || defaultMessagePrefix;
  const whatsappPhone = customPhoneNumber || PHONE_NUMBER;

  const openLeadForm = (service: Service) => {
    setSelectedService(service);
    setSubmitError('');
  };

  const closeLeadForm = () => {
    if (isSubmitting) return;

    setSelectedService(null);
    setSubmitError('');
  };

  const handleSubmitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedService) return;

    setIsSubmitting(true);
    setSubmitError('');

    const message = `${messagePrefix}

Serviço escolhido: ${selectedService.name}
Categoria: ${selectedService.category}
Nome: ${formData.name}
Telefone: ${formData.telephone}
Email: ${formData.email}`;

    try {
      const response = await fetch('/api/create-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          telephone: formData.telephone,
          email: formData.email,
          service: selectedService.name,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Não foi possível enviar seus dados.');
      }

      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

      setFormData({
        name: '',
        telephone: '',
        email: '',
      });

      window.location.href = whatsappUrl;
    } catch (error) {
      console.error(error);
      setSubmitError('Não foi possível enviar seus dados. Tente novamente ou chame pelo WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          <div
            className="absolute inset-0 bg-brand-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-brand-offwhite rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-8 md:p-12 border-b border-brand-beige flex justify-between items-center bg-white">
              <div>
                <span className={`text-xs uppercase tracking-[0.3em] text-${accentColor} mb-2 block font-medium`}>
                  {subtitle}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-brand-black">
                  {title}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="p-3 hover:bg-brand-nude rounded-full transition-colors text-brand-black"
                aria-label="Fechar modal"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            <div className="overflow-y-auto p-8 md:p-12 bg-brand-offwhite">
              {Object.entries(services).map(([category, items]) => (
                <div key={category} className="mb-20 last:mb-0">
                  <h3 className="font-serif text-2xl mb-10 text-brand-black border-l-4 border-brand-gold pl-6">
                    {category}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {items.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group bg-white border border-brand-beige flex flex-col overflow-hidden hover:border-brand-gold transition-all duration-500 rounded-xl"
                      >
                        {service.image && (
                          <div className="w-full aspect-[4/5] overflow-hidden flex-shrink-0">
                            <img
                              src={service.image}
                              alt={service.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              style={{ objectPosition: service.imagePosition || 'center' }}
                            />
                          </div>
                        )}

                        <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                          <div>
                            <h4 className="font-serif text-xl mb-3 group-hover:text-brand-gold transition-colors">
                              {service.name}
                            </h4>

                            <p className="text-sm font-light leading-relaxed text-brand-black/60 mb-6">
                              {service.description}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => openLeadForm(service)}
                            className="inline-flex items-center gap-3 text-left text-xs uppercase tracking-widest text-brand-black font-semibold group-hover:text-brand-gold transition-colors border-b border-brand-beige group-hover:border-brand-gold pb-1 w-fit"
                          >
                            Agendar minha experiência
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 border-t border-brand-beige bg-white text-center">
              <p className="text-xs uppercase tracking-widest text-brand-black/40">
                Experiência exclusiva Beauty Glow • Todos os serviços sob agendamento
              </p>
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedService && (
              <motion.div
                className="absolute inset-0 z-[120] flex items-center justify-center p-4 bg-brand-black/70 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 md:p-10"
                  initial={{ scale: 0.95, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.95, y: 20, opacity: 0 }}
                >
                  <button
                    type="button"
                    onClick={closeLeadForm}
                    className="absolute top-5 right-5 p-2 hover:bg-brand-nude rounded-full transition-colors text-brand-black"
                    aria-label="Fechar formulário"
                  >
                    <X size={24} strokeWidth={1.5} />
                  </button>

                  <span className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3 block font-medium">
                    Agendamento
                  </span>

                  <h3 className="font-serif text-3xl text-brand-black mb-3">
                    {selectedService.name}
                  </h3>

                  <p className="text-sm text-brand-black/60 mb-8 leading-relaxed">
                    Preencha seus dados para nossa equipe receber seu interesse e continuar o atendimento.
                  </p>

                  <form onSubmit={handleSubmitLead} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-brand-black/50 mb-2">
                        Nome
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, name: event.target.value }))
                        }
                        className="w-full rounded-xl border border-brand-beige px-4 py-4 outline-none focus:border-brand-gold"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-brand-black/50 mb-2">
                        Telefone/WhatsApp
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.telephone}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, telephone: event.target.value }))
                        }
                        className="w-full rounded-xl border border-brand-beige px-4 py-4 outline-none focus:border-brand-gold"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-brand-black/50 mb-2">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((current) => ({ ...current, email: event.target.value }))
                        }
                        className="w-full rounded-xl border border-brand-beige px-4 py-4 outline-none focus:border-brand-gold"
                        placeholder="seuemail@email.com"
                      />
                    </div>

                    {submitError && (
                      <p className="text-sm text-red-600">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-black text-white rounded-full px-8 py-5 text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar e continuar pelo WhatsApp'}
                    </button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
