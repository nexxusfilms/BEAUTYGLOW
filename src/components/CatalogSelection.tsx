import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Section } from './Layout';

export const CatalogSelection = ({ onOpenCatalog }: { onOpenCatalog: (type: 'bruna' | 'ducy') => void }) => {
  return (
    <Section id="selecao-catalogo" className="bg-brand-offwhite">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-brand-gold mb-4 block">Nossos Catálogos</span>
        <h2 className="font-serif text-4xl md:text-5xl">Escolha sua Experiência</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card Bruna */}
          <motion.div
            onClick={() => onOpenCatalog('bruna')}
            whileHover={{ y: -10 }}
            className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl cursor-pointer"
          >
            <img 
              src="https://pbs.twimg.com/media/HIW5oadWEAAIeaq?format=jpg&name=large" 
              alt="Bruna Services" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-gold mb-2 block font-medium drop-shadow-md">Procedimentos Avançados</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 drop-shadow-lg">Estética Facial & Injetáveis</h3>
              <p className="text-white/80 text-sm font-light mb-6 line-clamp-2 drop-shadow-sm">
                Transformação sem perda de identidade. Nanopigmentação, Visagismo e Rejuvenescimento Natural.
              </p>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-2 group-hover:border-brand-gold group-hover:text-brand-gold transition-all">
                Ver Catálogo <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>

          {/* Card Ducy */}
          <motion.div
            onClick={() => onOpenCatalog('ducy')}
            whileHover={{ y: -10 }}
            className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl cursor-pointer"
          >
            <img 
              src="https://pbs.twimg.com/media/HIW2hpoWMAASxkV?format=jpg&name=medium" 
              alt="Ducy Nails" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-gold mb-2 block font-medium drop-shadow-md">Nail Care</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 drop-shadow-lg">Ducy Nails</h3>
              <p className="text-white/80 text-sm font-light mb-6 line-clamp-2 drop-shadow-sm">
                Design sofisticado, durabilidade e cuidado extremo com a saúde das unhas naturais.
              </p>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-2 group-hover:border-brand-gold group-hover:text-brand-gold transition-all">
                Ver Catálogo <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
      </div>
    </Section>
  );
};
