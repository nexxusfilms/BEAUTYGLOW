import { motion } from 'motion/react';
import { MapPin, Clock, Navigation, Map as MapIcon, Car } from 'lucide-react';
import { Section } from './Layout';
import { CLINIC } from '../constants';
import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';
import { trackEvent } from '../tracking';

export const LocationSection = () => {
  const address = CLINIC.address;
  const googleMapsUrl = CLINIC.googleMapsUrl;
  const { latitude, longitude } = CLINIC;
  const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
  // Abre o app da Uber (ou o site, no computador) com a clínica já definida como destino.
  const uberUrl = `https://m.uber.com/ul/?action=setPickup&pickup=my_location`
    + `&dropoff[latitude]=${latitude}&dropoff[longitude]=${longitude}`
    + `&dropoff[nickname]=${encodeURIComponent('Beauty Glow')}`
    + `&dropoff[formatted_address]=${encodeURIComponent(address)}`;

  const routeButtonClass = "bg-white border border-brand-beige text-brand-black text-center py-3 sm:py-4 md:py-5 px-2 sm:px-3 rounded-2xl sm:rounded-full text-[11px] sm:text-xs uppercase tracking-wider font-semibold hover:border-brand-gold transition-colors duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 group whitespace-nowrap";
  const routes = [
    { app: 'google_maps', label: 'Google Maps', href: googleMapsUrl, Icon: MapIcon },
    { app: 'waze', label: 'Waze', href: wazeUrl, Icon: Navigation },
    { app: 'uber', label: 'Uber', href: uberUrl, Icon: Car },
  ];

  return (
    <Section id="location" className="bg-white overflow-hidden !px-4 sm:!px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-brand-offwhite rounded-[1.5rem] md:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-16 shadow-sm border border-brand-beige flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          
          {/* Content Left */}
          <div className="w-full lg:flex-1 space-y-8 md:space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-deep font-medium block">Nossa Localização</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-black leading-tight">Onde nos encontrar</h2>
            </div>

            <div className="space-y-6 md:space-y-8 max-w-lg mx-auto lg:mx-0">
              {/* Address */}
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 text-brand-gold-deep">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-black">Endereço</h4>
                  <p className="text-sm md:text-base text-brand-black/60 font-light leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 text-brand-gold-deep">
                  <Clock size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-black">Horário de Atendimento</h4>
                  <p className="text-sm md:text-base text-brand-black/60 font-light">
                    Segunda a Sexta: 09h às 19h<br />
                    Sábados: 09h às 17h
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4 pt-2 w-full md:max-w-md mx-auto lg:mx-0">
              <WhatsAppLink
                local="localizacao"
                className="w-full bg-brand-black text-brand-offwhite text-center py-4 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-medium hover:bg-brand-gold-deep transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                Agendar pelo WhatsApp
              </WhatsAppLink>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {routes.map(({ app, label, href, Icon }) => (
                  <a
                    key={app}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="rota"
                    data-app={app}
                    onClick={() => trackEvent('rota_click', { app })}
                    className={routeButtonClass}
                  >
                    <Icon size={14} className="shrink-0 group-hover:scale-110 transition-transform" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Right */}
          <div className="w-full lg:flex-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white w-full h-[350px] sm:h-[450px] lg:h-[550px]"
            >
              <iframe 
                title="Mapa da Beauty Glow"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.195034639944!2d-46.67285972376176!3d-23.575938178790518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5999766a84f7%3A0x8a3f43197b512c6a!2sCl%C3%ADnica%20de%20Est%C3%A9tica%20Beauty%20Glow!5e0!3m2!1spt-BR!2sbr!4v1714995000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  );
};
