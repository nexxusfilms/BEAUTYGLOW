import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Section } from './Layout';
import { CLINIC, TESTIMONIALS } from '../constants';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z" />
  </svg>
);

export const Reviews = () => (
  <Section id="avaliacoes" className="bg-brand-nude/50 !py-20 md:!py-28">
    <div className="text-center mb-12 md:mb-16">
      <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-deep mb-4 block font-medium">Avaliações no Google</span>
      <h2 className="font-serif text-3xl md:text-5xl mb-5">Quem confia na Beauty Glow</h2>
      <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 border border-brand-beige">
        <GoogleIcon />
        <div className="flex gap-0.5" aria-label="5 estrelas">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
          ))}
        </div>
        <span className="text-sm text-brand-black/70">Clientes reais</span>
      </div>
    </div>

    <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-4 md:pb-0">
      {TESTIMONIALS.map((t, idx) => (
        <motion.figure
          key={t.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.15 }}
          viewport={{ once: true }}
          className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto flex flex-col bg-white p-7 md:p-8 border border-brand-beige rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-5">
            {t.image && (
              <img src={t.image} alt="" loading="lazy" className="w-12 h-12 rounded-full object-cover" />
            )}
            <div className="text-left">
              <figcaption className="font-medium text-sm text-brand-black">{t.author}</figcaption>
              <div className="flex gap-0.5 mt-1" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
            </div>
            <div className="ml-auto"><GoogleIcon /></div>
          </div>
          <blockquote className="text-brand-black/75 leading-relaxed font-light text-left">
            “{t.content}”
          </blockquote>
        </motion.figure>
      ))}
    </div>

    <div className="text-center mt-10">
      <a
        href={CLINIC.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-black border-b border-brand-gold pb-1 hover:text-brand-gold-deep transition-colors"
      >
        Ver todas as avaliações no Google
      </a>
    </div>
  </Section>
);
