import { Section } from './Layout';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <Section id="about" className="bg-brand-offwhite">
      <div className="grid md:grid-cols-2 gap-20 items-stretch">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative group h-full min-h-[400px] md:min-h-[600px]"
        >
          <img 
            src="https://pbs.twimg.com/media/HHozd1CWoAMgk9e?format=jpg&name=medium" 
            alt="Interior Beauty Glow" 
            className="w-full h-full object-cover rounded-xl shadow-2xl transition-transform duration-1000 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 border border-brand-gold/20 m-6 pointer-events-none rounded-xl" />
        </motion.div>
        
        <div className="flex flex-col justify-center py-6 md:py-10">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-gold mb-8 block">Sobre a Clínica</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-8 md:mb-12 leading-[1.1] text-brand-black">
            A essência da <br />
            <span className="italic font-light text-brand-gold font-serif">Beauty Glow.</span>
          </h2>
          <div className="space-y-6 md:space-y-10 text-brand-black/70 leading-relaxed font-light text-base md:text-lg">
            <p>
              A Beauty Glow não nasceu de um plano estratégico perfeito, nasceu de um inconformismo. Fundada por Bruna, a clínica resolve uma necessidade emocional clara: a busca pela melhor versão de si mesmo sem a perda da identidade.
            </p>
            <p>
              Somos um ecossistema focado em sofisticação consciente. Aqui, cada procedimento é uma experiência estruturada de cuidado, onde técnica e sensibilidade caminham juntas para elevar sua imagem com responsabilidade e visão de longo prazo.
            </p>
            <div className="pt-8 border-t border-brand-beige">
              <p className="font-serif italic text-xl md:text-2xl text-brand-black mb-4">
                "Nosso compromisso é com a sua harmonia, respeitando cada traço que te torna única."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-brand-gold" />
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-brand-black font-semibold">Bruna, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
