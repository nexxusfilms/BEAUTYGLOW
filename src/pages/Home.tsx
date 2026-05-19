import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Home = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with soft overlay */}
      <div className="absolute inset-0 z-0 bg-brand-offwhite">
        <img 
          src="https://pbs.twimg.com/media/HHpHo_AXkAQCKYM?format=jpg&name=4096x4096" 
          alt="Beauty Glow Aesthetic"
          className="w-full h-full object-cover opacity-25 grayscale-[0.2] contrast-[1.1] scale-125 object-[center_20%] blur-[2px]"
        />
        <div className="absolute inset-0 bg-brand-offwhite/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.4em] text-brand-black/60 mb-6 font-medium"
        >
          Realçando Identidades
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-brand-black mb-10 leading-[1.1]"
        >
          Beleza Natural <br />
          <span className="italic font-light text-brand-gold">de alto padrão.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#selecao-catalogo"
            className="group inline-flex items-center gap-4 bg-brand-black text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-500 shadow-xl"
          >
            Ver Catálogo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
