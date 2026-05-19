import { useEffect } from 'react';
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const defaultMessagePrefix = "Olá, gostaria de agendar minha experiência na Beauty Glow!";
  const messagePrefix = whatsappMessagePrefix || defaultMessagePrefix;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-black/60 backdrop-blur-md" 
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-brand-offwhite rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-8 md:p-12 border-b border-brand-beige flex justify-between items-center bg-white">
              <div>
                <span className={`text-xs uppercase tracking-[0.3em] text-${accentColor} mb-2 block font-medium`}>{subtitle}</span>
                <h2 className="font-serif text-3xl md:text-5xl text-brand-black">{title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-3 hover:bg-brand-nude rounded-full transition-colors text-brand-black"
                aria-label="Close modal"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-8 md:p-12 bg-brand-offwhite">
              {Object.entries(services).map(([category, items]) => (
                <div key={category} className="mb-20 last:mb-0">
                  <h3 className="font-serif text-2xl mb-10 text-brand-black border-l-4 border-brand-gold pl-6">{category}</h3>
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
                          <div className="w-full aspect-square overflow-hidden flex-shrink-0">
                            <img 
                              src={service.image} 
                              alt={service.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                        )}
                        <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                          <div>
                            <h4 className="font-serif text-xl mb-3 group-hover:text-brand-gold transition-colors">{service.name}</h4>
                            <p className="text-sm font-light leading-relaxed text-brand-black/60 mb-6">
                              {service.description}
                            </p>
                          </div>
                          <a
                            href={`https://wa.me/${customPhoneNumber || PHONE_NUMBER}?text=${encodeURIComponent(`${messagePrefix}\n\nGostaria de mais informações sobre o serviço: ${service.name}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-brand-black font-semibold group-hover:text-brand-gold transition-colors border-b border-brand-beige group-hover:border-brand-gold pb-1 w-fit"
                          >
                            Agendar minha experiência
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-brand-beige bg-white text-center">
              <p className="text-xs uppercase tracking-widest text-brand-black/40">
                Experiência exclusiva Beauty Glow • Todos os serviços sob agendamento
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
