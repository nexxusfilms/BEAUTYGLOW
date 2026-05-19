import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Navigation, Map as MapIcon, Calendar } from 'lucide-react';
import { Section } from './Layout';

export const LocationSection = () => {
  const address = "R. Chile, 39 - Jardim America, São Paulo - SP, 01436-050";
  const googleMapsUrl = "https://www.google.com/maps/place/Cl%C3%ADnica+de+Est%C3%A9tica+Beauty+Glow/@-23.5759381,-46.6702848,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5999766a84f7:0x8a3f43197b512c6a!8m2!3d-23.5759381!4d-46.6702848!16s%2Fg%2F11rjts6fy2?entry=ttu";
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}&navigate=yes`;

  return (
    <Section id="location" className="bg-white overflow-hidden !px-4 sm:!px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-brand-offwhite rounded-[1.5rem] md:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-16 shadow-sm border border-brand-beige flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          
          {/* Content Left */}
          <div className="w-full lg:flex-1 space-y-8 md:space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-medium block">Nossa Localização</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-black leading-tight">Onde nos encontrar</h2>
            </div>

            <div className="space-y-6 md:space-y-8 max-w-lg mx-auto lg:mx-0">
              {/* Address */}
              <div className="flex gap-4 md:gap-6 items-start group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 text-brand-gold">
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
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 text-brand-gold">
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
              <a 
                href="#selecao-catalogo"
                className="w-full bg-brand-gold text-white text-center py-4 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold hover:bg-brand-black transition-all duration-500 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2"
              >
                <Calendar size={14} />
                Agendar Agora
              </a>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-brand-black text-white text-center py-4 md:py-5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-brand-gold transition-all duration-500 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <MapIcon size={14} className="group-hover:scale-110 transition-transform" />
                  Google Maps
                </a>
                <a 
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#24CCFF] text-white text-center py-4 md:py-5 rounded-full text-xs uppercase tracking-widest font-semibold hover:brightness-110 transition-all duration-500 flex items-center justify-center gap-2 group"
                >
                  <Navigation size={14} className="group-hover:scale-110 transition-transform" />
                  Waze
                </a>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.195034639944!2d-46.67285972376176!3d-23.575938178790518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5999766a84f7%3A0x8a3f43197b512c6a!2sCl%C3%ADnica%20de%20Est%C3%A9tica%20Beauty%20Glow!5e0!3m2!1spt-BR!2sbr!4v1714995000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg flex items-center gap-2 border border-brand-gold/20 pointer-events-none">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-brand-black font-bold">Local Exclusivo</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  );
};
