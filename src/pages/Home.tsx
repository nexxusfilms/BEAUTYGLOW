import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { CatalogSelection } from '../components/CatalogSelection';
import { TeamSection } from '../components/TeamSection';
import { LocationSection } from '../components/LocationSection';
import { Section } from '../components/Layout';
import { TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Home({ onOpenCatalog }: { onOpenCatalog: (type: 'bruna' | 'ducy') => void }) {
  return (
    <>
      <Hero />
      <CatalogSelection onOpenCatalog={onOpenCatalog} />
      <About />

      {/* Differentials / Experience Mid-Section */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold">Exclusividade</h4>
            <p className="font-light text-sm text-brand-black/70">Atendimento individualizado e personalizado para cada biotipo e identidade.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold">Segurança</h4>
            <p className="font-light text-sm text-brand-black/70">Protocolos rigorosos de biossegurança e materiais de última geração.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold">Responsabilidade</h4>
            <p className="font-light text-sm text-brand-black/70">Foco em saúde e estética de longo prazo, evitando excessos e artificialismo.</p>
          </div>
        </div>
      </Section>

      <TeamSection />
      
      <Section className="bg-brand-beige/30">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="mx-auto text-brand-gold mb-6 opacity-40" size={40} />
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-3 block font-medium">Feedbacks Reais</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white p-8 border border-brand-beige group hover:border-brand-gold transition-colors duration-500 rounded-xl"
              >
                <div className="flex flex-col items-center flex-grow">
                  {t.image && (
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-brand-gold/10 group-hover:border-brand-gold/30 transition-colors">
                      <img 
                        src={t.image} 
                        alt={t.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="font-serif italic text-lg mb-8 leading-relaxed text-center group-hover:text-brand-black transition-colors">
                    "{t.content}"
                  </p>
                </div>
                <div className="text-center mt-auto">
                  <div className="w-8 h-[1px] bg-brand-gold/30 mx-auto mb-4" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-medium">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <LocationSection />
    </>
  );
}
