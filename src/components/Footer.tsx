import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { CLINIC } from '../constants';
import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';
import { openCookieSettings } from './CookieConsent';

export const Footer = () => (
  <footer id="contact" className="bg-brand-black text-brand-offwhite px-6 pt-20 pb-28">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14 md:gap-20">
      <div className="space-y-6">
        <Link to="/" className="block w-fit" aria-label="Beauty Glow - início">
          <img src="/brand/logo.png" alt="Beauty Glow" width={800} height={441} loading="lazy" className="h-20 md:h-24 w-auto" />
        </Link>
        <p className="text-sm font-light text-brand-offwhite/70 leading-relaxed">
          Clínica de estética nos Jardins, em São Paulo, focada em excelência técnica e na preservação da sua beleza natural. Atendimento exclusivo sob agendamento.
        </p>
        <ul className="space-y-3 text-sm font-light text-brand-offwhite/80">
          <li>
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 hover:text-brand-soft-gold transition-colors duration-300"
            >
              <span className="w-10 h-10 rounded-full border border-brand-offwhite/25 inline-flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-black transition-colors duration-300">
                <Instagram size={18} />
              </span>
              {CLINIC.instagramHandle}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${CLINIC.email}`}
              className="group inline-flex items-center gap-3 hover:text-brand-soft-gold transition-colors duration-300 break-all"
            >
              <span className="w-10 h-10 shrink-0 rounded-full border border-brand-offwhite/25 inline-flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-black transition-colors duration-300">
                <Mail size={18} />
              </span>
              {CLINIC.email}
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-5">
          <h4 className="text-xs uppercase tracking-[0.3em] text-brand-soft-gold font-medium">Institucional</h4>
          <ul className="flex flex-col gap-3 text-sm font-light text-brand-offwhite/70">
            <li><a href="/#about" className="hover:text-brand-soft-gold transition-colors">A Clínica</a></li>
            <li><a href="/#team" className="hover:text-brand-soft-gold transition-colors">Equipe</a></li>
            <li><a href="/#location" className="hover:text-brand-soft-gold transition-colors">Onde Estamos</a></li>
            <li><Link to="/privacidade" className="hover:text-brand-soft-gold transition-colors">Privacidade</Link></li>
          </ul>
        </div>
        <div className="space-y-5">
          <h4 className="text-xs uppercase tracking-[0.3em] text-brand-soft-gold font-medium">Clínica</h4>
          <ul className="flex flex-col gap-3 text-sm font-light text-brand-offwhite/70">
            <li><a href="/#tratamentos" className="hover:text-brand-soft-gold transition-colors">Tratamentos</a></li>
            <li><a href="/#resultados" className="hover:text-brand-soft-gold transition-colors">Resultados</a></li>
            <li><a href="/#avaliacoes" className="hover:text-brand-soft-gold transition-colors">Avaliações</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-8">
        <p className="font-serif text-2xl md:text-3xl italic">Agende sua avaliação personalizada.</p>
        <WhatsAppLink
          local="rodape"
          className="inline-flex items-center justify-center gap-3 bg-brand-offwhite text-brand-black py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-brand-soft-gold transition-colors duration-300"
        >
          <WhatsAppIcon />
          Falar pelo WhatsApp
        </WhatsAppLink>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-offwhite/10 flex flex-col md:flex-row justify-between gap-4 text-xs tracking-wider text-brand-offwhite/60">
      <p>© {new Date().getFullYear()} Beauty Glow. Todos os direitos reservados. · {CLINIC.address}</p>
      <button type="button" onClick={openCookieSettings} className="text-left md:text-right hover:text-brand-soft-gold transition-colors">
        Preferências de cookies
      </button>
    </div>
  </footer>
);
