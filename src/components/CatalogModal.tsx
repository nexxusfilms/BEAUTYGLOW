import { PHONE_NUMBER, type Service } from '../constants';

type CatalogModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  services: Service[];
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
  const message = encodeURIComponent(whatsappMessagePrefix);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="modalBackdrop">
      <div className="modal">
        <button className="closeButton" onClick={onClose}>×</button>

        <p className="tag">{subtitle}</p>
        <h2>{title}</h2>

        <div className="modalServices">
          {services.map((service) => (
            <article key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
