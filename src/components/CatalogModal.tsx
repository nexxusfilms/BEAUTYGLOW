import { X } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

type Service = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

type ServicesInput = Service[] | Record<string, Service[]>;

type CatalogModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  services: ServicesInput;
  customPhoneNumber?: string;
  whatsappMessagePrefix: string;
};

export function CatalogModal({
  isOpen,
  onClose,
  title,
  subtitle,
  services,
  customPhoneNumber,
  whatsappMessagePrefix,
}: CatalogModalProps) {
  if (!isOpen) return null;

  const phone = customPhoneNumber || PHONE_NUMBER;

  const groupedServices: Record<string, Service[]> = Array.isArray(services)
    ? { Serviços: services }
    : services;

  const createWhatsappUrl = (serviceName?: string) => {
    const message = serviceName
      ? `${whatsappMessagePrefix} Tenho interesse em: ${serviceName}`
      : whatsappMessagePrefix;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-brand-offwhite w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-brand-gold transition-colors"
          aria-label="Fechar catálogo"
        >
          <X size={22} />
        </button>

        <div className="p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-gold mb-4">
            {subtitle}
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-brand-black mb-10">
            {title}
          </h2>

          <div className="space-y-14">
            {Object.entries(groupedServices).map(([category, items]) => (
              <section key={category}>
                <h3 className="font-serif text-3xl text-brand-black mb-6">
                  {category}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((service) => (
                    <article
                      key={service.id}
                      className="bg-white rounded-[1.5rem] overflow-hidden shadow-lg"
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-56 object-cover"
                      />

                      <div className="p-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-brand-gold mb-3">
                          {service.category}
                        </p>

                        <h4 className="font-serif text-2xl text-brand-black mb-3">
                          {service.name}
                        </h4>

                        <p className="text-sm text-brand-black/60 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <a
                          href={createWhatsappUrl(service.name)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center w-full bg-brand-black text-white rounded-full px-6 py-4 text-xs uppercase tracking-[0.2em] hover:bg-brand-gold transition-colors"
                        >
                          Agendar
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={createWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-brand-gold text-brand-black px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-brand-black hover:text-white transition-colors"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
