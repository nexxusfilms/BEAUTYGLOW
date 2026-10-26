import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Section } from './Layout';
import { TREATMENTS } from '../constants';
import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';

const categories = Object.keys(TREATMENTS);

export const Treatments = () => {
  const [active, setActive] = useState(categories[0]);
  const items = TREATMENTS[active];

  return (
    <Section id="tratamentos" className="bg-brand-offwhite">
      <div className="text-center mb-10 md:mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-deep mb-4 block font-medium">Tratamentos</span>
        <h2 className="font-serif text-3xl md:text-5xl mb-4">Escolha seu tratamento</h2>
        <p className="max-w-2xl mx-auto font-light text-brand-black/70">
          Protocolos personalizados para realçar sua beleza com naturalidade e segurança.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Categorias de tratamento"
        className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 pb-2 mb-10 md:mb-14"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className={`shrink-0 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] border transition-colors duration-300 ${
              active === category
                ? 'bg-brand-black text-brand-offwhite border-brand-black'
                : 'bg-white text-brand-black/70 border-brand-beige hover:border-brand-gold'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          aria-label={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {items.map((service) => (
            <article
              key={service.id}
              className="group bg-white border border-brand-beige flex flex-col overflow-hidden hover:border-brand-gold transition-colors duration-500 rounded-2xl"
            >
              {service.image && (
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: service.imagePosition || 'center' }}
                  />
                </div>
              )}

              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="font-serif text-xl mb-3">{service.name}</h3>
                <p className="text-sm font-light leading-relaxed text-brand-black/70 mb-6 flex-grow">
                  {service.description}
                </p>
                <WhatsAppLink
                  local="tratamentos"
                  servico={service.name}
                  categoria={service.category}
                  id={`btn-whatsapp-${service.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-black text-brand-offwhite text-xs uppercase tracking-[0.15em] px-5 py-3.5 rounded-full hover:bg-brand-gold-deep transition-colors duration-300"
                >
                  <WhatsAppIcon />
                  Agendar pelo WhatsApp
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};
