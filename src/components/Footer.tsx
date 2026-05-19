import { Link } from 'react-router-dom';
import { Section } from './Layout';
import { PHONE_NUMBER } from '../constants';
import { Instagram, MapPin, Clock, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <Section id="contact" className="bg-brand-black text-white py-24">
      <div className="grid md:grid-cols-3 gap-16 md:gap-32">
        <div className="space-y-8">
          <Link to="/" className="font-serif text-3xl tracking-widest block">BEAUTY GLOW</Link>
          <p className="text-sm font-light text-white/60 leading-relaxed">
            Um ecossistema estético focado em excelência técnica e na preservação da sua beleza natural. Atendimento exclusivo sob agendamento.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Institucional</h4>
            <ul className="flex flex-col gap-3 text-sm font-light text-white/40">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">A Clínica</a></li>
              <li><a href="#team" className="hover:text-brand-gold transition-colors">Nossa Equipe</a></li>
              <li><a href="#location" className="hover:text-brand-gold transition-colors">Onde Estamos</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">Serviços</h4>
            <ul className="flex flex-col gap-3 text-sm font-light text-white/40">
              <li><a href="#selecao-catalogo" className="hover:text-brand-gold transition-colors">Estética Facial</a></li>
              <li><a href="#selecao-catalogo" className="hover:text-brand-gold transition-colors">Nail Design</a></li>
              <li><a href="#selecao-catalogo" className="hover:text-brand-gold transition-colors">Agendamento</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-10">
          <h3 className="font-serif text-3xl italic">Agende sua avaliação personalizada.</h3>
          <a
            href="#selecao-catalogo"
            className="w-full bg-brand-gold text-white text-center py-5 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-brand-black transition-all duration-500"
          >
            Ver Serviços & Agendar
          </a>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-xs uppercase tracking-widest text-white/40">
        <p>© {new Date().getFullYear()} Beauty Glow. Todos os direitos reservados.</p>
        <p>Design & Estratégia: Premium Aesthetic Group</p>
      </div>
    </Section>
  );
};
