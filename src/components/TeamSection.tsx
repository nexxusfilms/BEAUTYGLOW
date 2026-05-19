import { Section } from './Layout';
import { TEAM } from '../constants';
import { motion } from 'motion/react';

export const TeamSection = () => {
  return (
    <Section id="team">
      <div className="mb-20 text-center">
        <span className="text-xs uppercase tracking-widest text-brand-gold mb-6 block">Nosso Time</span>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Especialistas</h2>
        <p className="max-w-2xl mx-auto font-light text-brand-black/60 text-sm">
          Profissionais dedicados a entregar o mais alto padrão estético com sensibilidade e técnica.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
        {TEAM.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="relative overflow-hidden aspect-[3/4] mb-6 shadow-lg lg:grayscale transition-all duration-700 lg:group-hover:grayscale-0 rounded-xl">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: member.imagePosition || 'center' }}
              />
            </div>
            <h4 className="font-serif text-xl mb-1">{member.name}</h4>
            <p className="text-xs uppercase tracking-widest text-brand-gold mb-4">{member.role}</p>
            <p className="text-xs font-light text-brand-black/60 leading-relaxed group-hover:text-brand-black transition-colors">
              {member.positioning}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
