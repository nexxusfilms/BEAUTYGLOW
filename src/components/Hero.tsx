import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants';
import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';

const AUTOPLAY_MS = 6000;

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;
  const slide = HERO_SLIDES[index];

  const go = useCallback((step: number) => {
    setDirection(step);
    setIndex((current) => (current + step + total) % total);
  }, [total]);

  const goTo = (target: number) => {
    setDirection(target > index ? 1 : -1);
    setIndex(target);
  };

  useEffect(() => {
    if (paused || total < 2) return;
    const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, go, total]);

  return (
    <section
      id="inicio"
      aria-roledescription="carrossel"
      aria-label="Destaques Beauty Glow"
      className="relative w-full h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)] min-h-[520px] max-h-[900px] overflow-hidden bg-brand-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(1);
            else if (info.offset.x > 60) go(-1);
          }}
          className="absolute inset-0"
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} de ${total}: ${slide.servico}`}
        >
          <picture>
            {slide.imageMobile && <source media="(max-width: 767px)" srcSet={slide.imageMobile} />}
            <img
              src={slide.image}
              alt={slide.title || slide.servico}
              draggable={false}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className="w-full h-full object-cover select-none"
              style={{ objectPosition: slide.imagePosition || 'center' }}
            />
          </picture>

          {slide.showText !== false && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/35 to-brand-black/20" />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-24 md:pb-28">
                <div className="max-w-7xl mx-auto md:px-16"><div className="max-w-2xl">
                  {slide.eyebrow && (
                    <span className="block text-[11px] md:text-xs uppercase tracking-[0.35em] text-brand-soft-gold mb-4 font-medium">
                      {slide.eyebrow}
                    </span>
                  )}
                  {slide.title && (
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-offwhite leading-[1.1] mb-5">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="text-brand-offwhite/85 text-base md:text-lg font-light max-w-xl mb-8">
                      {slide.subtitle}
                    </p>
                  )}
                  <WhatsAppLink
                    local="banner"
                    servico={slide.servico}
                    className="inline-flex items-center gap-3 bg-brand-offwhite text-brand-black px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-brand-soft-gold transition-colors duration-300 shadow-xl"
                  >
                    <WhatsAppIcon />
                    {slide.cta || 'Quero saber mais'}
                  </WhatsAppLink>
                </div></div>
              </div>
            </>
          )}

          {slide.showText === false && (
            // Arte com texto aplicado: o banner inteiro leva ao WhatsApp.
            <WhatsAppLink
              local="banner"
              servico={slide.servico}
              aria-label={`Saber mais sobre ${slide.servico} pelo WhatsApp`}
              className="absolute inset-0"
            >
              <span className="sr-only">{slide.servico}</span>
            </WhatsAppLink>
          )}
        </motion.div>
      </AnimatePresence>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Banner anterior"
            className="absolute left-3 md:left-6 top-[32%] md:top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-brand-offwhite/80 backdrop-blur text-brand-black flex items-center justify-center hover:bg-brand-offwhite transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo banner"
            className="absolute right-3 md:right-6 top-[32%] md:top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-brand-offwhite/80 backdrop-blur text-brand-black flex items-center justify-center hover:bg-brand-offwhite transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-6 md:bottom-8 inset-x-0 z-10 flex justify-start pl-4 md:pl-0 md:justify-center gap-1 md:gap-3">
            {HERO_SLIDES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver banner ${i + 1}`}
                aria-current={i === index}
                className="p-2"
              >
                <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-brand-soft-gold' : 'w-3 bg-brand-offwhite/60'}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
