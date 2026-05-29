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
  skipForm?: boolean;
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
  whatsappMessagePrefix,
  skipForm = false,
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
  const isDucyCatalog = Boolean(customPhoneNumber);

  const openLeadForm = (service: Service) => {
    if (isDucyCatalog || skipForm) {
      const message = `${messagePrefix}

Gostaria de mais informações sobre o serviço: ${service.name}`;

      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      return;
    }

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

    const telephoneDigits = formData.telephone.replace(/\D/g, '');

    if (telephoneDigits.length !== 11) {
      setSubmitError('Informe um celular brasileiro válido com DDD. Exemplo: 11999999999.');
      setIsSubmitting(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(formData.email.trim())) {
      setSubmitError('Informe um email válido. Exemplo: nome@email.com.');
      setIsSubmitting(false);
      return;
    }

    const message = `${messagePrefix}

Serviço escolhido: ${selectedService.name}
Categoria: ${selectedService.category}
Nome: ${formData.name}
Telefone: ${telephoneDigits}
Email: ${formData.email}`;

    try {
      const response = await fetch('/api/create-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          telephone: telephoneDigits,
          email: formData.email.trim(),
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
                            className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold text-xs uppercase tracking-widest px-4 py-3 rounded hover:bg-brand-gold hover:text-white transition-all duration-300 w-fit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 flex-shrink-0"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            {isDucyCatalog ? 'Falar com especialista' : 'Agendar minha experiência'}
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
                        type="text"
                        inputMode="numeric"
                        maxLength={11}
                        pattern="[0-9]{11}"
                        value={formData.telephone}
                        onChange={(event) => {
                          const digits = event.target.value.replace(/\D/g, '').slice(0, 11);
                          setFormData((current) => ({ ...current, telephone: digits }));
                        }}
                        onPaste={(event) => {
                          event.preventDefault();
                          const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 11);
                          setFormData((current) => ({ ...current, telephone: pasted }));
                        }}
                        className="w-full rounded-xl border border-brand-beige px-4 py-4 outline-none focus:border-brand-gold"
                        placeholder="11999999999"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-brand-black/50 mb-2">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]{2,}"
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

export default CatalogModal;