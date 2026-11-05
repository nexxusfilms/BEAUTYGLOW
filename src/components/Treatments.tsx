import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Layout';
import { TREATMENTS } from '../constants';
import type { Service } from '../types';
import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';

const categories = Object.keys(TREATMENTS);
const AUTOPLAY_MS = 3000;

const ServiceCard: FC<{ service: Service; className?: string }> = ({ service, className = '' }) => (
  <article
    className={`group bg-white border border-brand-beige flex flex-col overflow-hidden hover:border-brand-gold transition-colors duration-500 rounded-2xl ${className}`}
  >
    {service.image && (
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: service.imagePosition || 'center' }}
        />
      </div>
    )}

    <div className="p-6 md:p-7 flex flex-col flex-grow">
      {service.tag && (
        <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-brand-gold-deep mb-3 block">
          {service.tag}
        </span>
      )}
      <h3 className={`font-serif mb-3 ${service.tag ? 'text-2xl md:text-[1.7rem] leading-tight' : 'text-xl'}`}>{service.name}</h3>
      <p className="text-sm font-light leading-relaxed text-brand-black/70 mb-6 flex-grow">
        {service.description}
      </p>
      <WhatsAppLink
        local="tratamentos"
        servico={service.tag || service.name}
        categoria={service.category}
        id={`btn-whatsapp-${service.id}`}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-brand-black text-brand-offwhite text-xs max-[359px]:text-[10px] uppercase tracking-[0.12em] max-[359px]:tracking-[0.06em] px-4 max-[359px]:px-3 py-3.5 rounded-full hover:bg-brand-gold-deep transition-colors duration-300"
      >
        <WhatsAppIcon />
        Agendar pelo WhatsApp
      </WhatsAppLink>
    </div>
  </article>
);

export const Treatments = () => {
  const [active, setActive] = useState(categories[0]);
  // "carrossel": passa sozinho pelos serviços de todas as categorias.
  // "grade": a pessoa escolheu uma categoria e vê todos os serviços dela, parados.
  const [mode, setMode] = useState<'carrossel' | 'grade'>('carrossel');
  const [userTookOver, setUserTookOver] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const [slide, setSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(1);

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const items = TREATMENTS[active];

  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Distância entre o início de um card e o do próximo.
  const getStep = () => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const second = track?.children[1] as HTMLElement | undefined;
    if (!first) return 1;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  };

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep();
    const maxScroll = track.scrollWidth - track.clientWidth;
    setSlideCount(Math.max(1, Math.round(maxScroll / step) + 1));
    setSlide(Math.min(Math.round(track.scrollLeft / step), Math.round(maxScroll / step)));
  }, []);

  useEffect(() => {
    if (mode !== 'carrossel') return;
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [active, mode, measure]);

  // Só passa sozinho quando a seção ocupa o meio da tela.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: '-35% 0px -35% 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Mantém a categoria ativa visível na barra de categorias (no celular ela rola de lado).
  useEffect(() => {
    const tabs = tabsRef.current;
    const button = tabs?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!tabs || !button || tabs.scrollWidth <= tabs.clientWidth) return;
    tabs.scrollTo({ left: button.offsetLeft - tabs.clientWidth / 2 + button.offsetWidth / 2, behavior: 'smooth' });
  }, [active]);

  const autoplayOn = mode === 'carrossel' && !userTookOver && !hovering && inView && !reducedMotion;

  useEffect(() => {
    if (!autoplayOn) return;
    const timer = window.setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      if (atEnd) {
        const next = categories[(categories.indexOf(active) + 1) % categories.length];
        setActive(next);
      } else {
        track.scrollBy({ left: getStep(), behavior: 'smooth' });
      }
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplayOn, active, slide]);

  const chooseCategory = (category: string) => {
    setActive(category);
    setMode('grade');
  };

  const goToSlide = (target: number) => {
    setUserTookOver(true);
    trackRef.current?.scrollTo({ left: target * getStep(), behavior: 'smooth' });
  };

  // Setas: andam um card; nas pontas, passam para a categoria vizinha.
  const step = (direction: 1 | -1) => {
    setUserTookOver(true);
    const target = slide + direction;
    if (target < 0 || target >= slideCount) {
      const i = categories.indexOf(active);
      setActive(categories[(i + direction + categories.length) % categories.length]);
      return;
    }
    trackRef.current?.scrollTo({ left: target * getStep(), behavior: 'smooth' });
  };

  const arrowClass =
    'w-10 h-10 rounded-full border border-brand-beige bg-white text-brand-black flex items-center justify-center hover:border-brand-gold hover:text-brand-gold-deep transition-colors';

  return (
    <Section id="tratamentos" className="bg-brand-offwhite">
      <div ref={sectionRef}>
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold-deep mb-4 block font-medium">Tratamentos</span>
          <h2 className="font-serif text-3xl md:text-5xl mb-4">Escolha seu tratamento</h2>
          <p className="max-w-2xl mx-auto font-light text-brand-black/70">
            Protocolos personalizados para realçar sua beleza com naturalidade e segurança.
          </p>
        </div>

        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Categorias de tratamento"
          className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 pb-2 mb-10 md:mb-14"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => chooseCategory(category)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] border transition-colors duration-300 ${
                active === category
                  ? 'bg-brand-black text-brand-offwhite border-brand-black'
                  : 'bg-white text-brand-black/70 border-brand-beige hover:border-brand-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {mode === 'grade' ? (
            <motion.div
              key={`grade-${active}`}
              role="tabpanel"
              aria-label={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={`carrossel-${active}`}
              role="tabpanel"
              aria-label={active}
              aria-roledescription="carrossel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onAnimationComplete={measure}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div
                ref={trackRef}
                onScroll={measure}
                onTouchStart={() => setUserTookOver(true)}
                onWheel={(event) => {
                  if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) setUserTookOver(true);
                }}
                className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {items.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    className="shrink-0 snap-start scroll-ml-6 md:scroll-ml-0 w-[86%] sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
                  />
                ))}
              </div>

              <div className="flex flex-col items-center gap-5 mt-6">
                <div className="flex items-center gap-2 md:gap-4">
                  <button type="button" onClick={() => step(-1)} aria-label="Serviço anterior" className={arrowClass}>
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-0.5 md:gap-1">
                    {Array.from({ length: slideCount }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goToSlide(i)}
                        aria-label={`Ver serviço ${i + 1} de ${active}`}
                        aria-current={i === slide}
                        className="p-1.5 md:p-2"
                      >
                        <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === slide ? 'w-7 md:w-8 bg-brand-gold-deep' : 'w-2.5 md:w-3 bg-brand-black/15'}`} />
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={() => step(1)} aria-label="Próximo serviço" className={arrowClass}>
                    <ChevronRight size={18} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setMode('grade')}
                  className="text-xs uppercase tracking-[0.2em] text-brand-black border-b border-brand-gold pb-1 hover:text-brand-gold-deep transition-colors"
                >
                  Ver todos de {active}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};
