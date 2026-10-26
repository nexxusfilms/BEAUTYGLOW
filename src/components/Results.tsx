import { motion } from 'motion/react';
import { Section } from './Layout';
import { RESULTS } from '../constants';
import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';

// Mantém a grade com pelo menos 3 espaços enquanto a galeria ainda tem poucas fotos.
const MIN_TILES = 3;

export const Results = () => {
  const placeholders = Math.max(0, MIN_TILES - RESULTS.length);

  return (
    <Section id="resultados" className="bg-white">
      <div className="text-center mb-12 md:mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-deep mb-4 block font-medium">Resultados</span>
        <h2 className="font-serif text-3xl md:text-5xl mb-4">Antes e depois</h2>
        <p className="max-w-2xl mx-auto font-light text-brand-black/70">
          Resultados reais de clientes Beauty Glow. Cada protocolo é planejado para respeitar seus traços.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {RESULTS.map((item, idx) => (
          <motion.figure
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-brand-offwhite border border-brand-beige rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={item.image} alt={`Antes e depois: ${item.servico}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <figcaption className="p-6 flex flex-col gap-4 flex-grow">
              <div>
                <h3 className="font-serif text-lg">{item.servico}</h3>
                {item.description && <p className="text-sm font-light text-brand-black/70 mt-1">{item.description}</p>}
              </div>
              <WhatsAppLink
                local="resultados"
                servico={item.servico}
                className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-brand-black border-b border-brand-gold pb-1 w-fit hover:text-brand-gold-deep transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                Quero este resultado
              </WhatsAppLink>
            </figcaption>
          </motion.figure>
        ))}

        {[...Array(placeholders)].map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="aspect-[4/5] sm:aspect-auto sm:min-h-[420px] rounded-2xl border border-dashed border-brand-beige bg-brand-offwhite/60 flex items-center justify-center text-center p-8"
          >
            <p className="font-serif italic text-brand-black/40">Novos resultados em breve</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
