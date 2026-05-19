import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import {
  PHONE_NUMBER,
  BRUNA_SERVICES,
  DUCY_SERVICES,
  TEAM,
  TESTIMONIALS,
} from '../constants';

type HomeProps = {
  onOpenCatalog?: (catalog: 'bruna' | 'ducy') => void;
};

const Home = ({ onOpenCatalog }: HomeProps) => {
  const brunaPreview = Object.values(BRUNA_SERVICES).flat().slice(0, 6);
  const ducyPreview = Object.values(DUCY_SERVICES).flat().slice(0, 6);

  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
            <span className="italic font-light text-brand-gold">
              de alto padrão.
            </span>
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

      <section id="selecao-catalogo" className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            Catálogos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-12 text-brand-black">
            Escolha sua experiência
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => onOpenCatalog?.('bruna')}
              className="group text-left rounded-[2rem] overflow-hidden bg-white shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <img
                src="https://pbs.twimg.com/media/HInty-SWAAE9xhv?format=jpg&name=medium"
                alt="Estética Facial"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
                  Beauty Glow
                </p>
                <h3 className="font-serif text-3xl mb-4 text-brand-black">
                  Estética Facial & Injetáveis
                </h3>
                <p className="text-brand-black/60 leading-relaxed">
                  Sobrancelhas, lábios, olhos, injetáveis e protocolos de rejuvenescimento.
                </p>
              </div>
            </button>

            <button
              onClick={() => onOpenCatalog?.('ducy')}
              className="group text-left rounded-[2rem] overflow-hidden bg-white shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <img
                src="https://pbs.twimg.com/media/HIW2lhSWgAEu1kc?format=jpg&name=medium"
                alt="Ducy Nails"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-3">
                  Ducy Nails
                </p>
                <h3 className="font-serif text-3xl mb-4 text-brand-black">
                  Nail Design
                </h3>
                <p className="text-brand-black/60 leading-relaxed">
                  Alongamento, blindagem, fortalecimento e nail art sofisticada.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold">
              Serviços
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4 text-brand-black">
              Procedimentos em destaque
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...brunaPreview, ...ducyPreview].map((service) => (
              <article
                key={service.id}
                className="bg-brand-offwhite rounded-[2rem] overflow-hidden shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-brand-gold mb-3">
                    {service.category}
                  </p>
                  <h3 className="font-serif text-2xl mb-3 text-brand-black">
                    {service.name}
                  </h3>
                  <p className="text-sm text-brand-black/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold">
              Equipe
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4 text-brand-black">
              Profissionais Beauty Glow
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <article
                key={member.id}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                  style={{ objectPosition: member.imagePosition || 'center' }}
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-brand-black">
                    {member.name}
                  </h3>
                  <p className="text-brand-gold uppercase tracking-[0.2em] text-xs my-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-brand-black/60 leading-relaxed">
                    {member.positioning}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-12 text-brand-black">
            O que nossas clientes dizem
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.id}
                className="bg-brand-offwhite rounded-[2rem] p-8 shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
                />
                <p className="text-brand-black/70 leading-relaxed mb-6">
                  “{testimonial.content}”
                </p>
                <h3 className="font-serif text-xl text-brand-black">
                  {testimonial.author}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-brand-gold">
            Agendamento
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-6">
            Pronta para sua experiência Beauty Glow?
          </h2>
          <p className="text-white/70 leading-relaxed mb-10">
            Fale com nossa equipe pelo WhatsApp e escolha o melhor horário para você.
          </p>

          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
              'Olá, gostaria de agendar minha experiência na Beauty Glow!'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 bg-brand-gold text-brand-black px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-500"
          >
            Agendar pelo WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
