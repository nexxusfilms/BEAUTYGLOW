import { Hero } from '../components/Hero';
import { Reviews } from '../components/Reviews';
import { Treatments } from '../components/Treatments';
import { About } from '../components/About';
import { Results } from '../components/Results';
import { TeamSection } from '../components/TeamSection';
import { LocationSection } from '../components/LocationSection';
import { Section } from '../components/Layout';
import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';

const differentials = [
  { title: 'Exclusividade', text: 'Atendimento individualizado e personalizado para cada biotipo e identidade.' },
  { title: 'Segurança', text: 'Protocolos rigorosos de biossegurança e materiais de última geração.' },
  { title: 'Responsabilidade', text: 'Foco em saúde e estética de longo prazo, evitando excessos e artificialismo.' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Treatments />
      <About />

      <Section className="bg-white !py-20 md:!py-28">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 text-center">
          {differentials.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-brand-gold-deep font-medium">{item.title}</h3>
              <p className="font-light text-brand-black/70">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <WhatsAppLink
            local="diferenciais"
            className="inline-flex items-center gap-3 bg-brand-black text-brand-offwhite px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-brand-gold-deep transition-colors duration-300"
          >
            <WhatsAppIcon />
            Agende sua avaliação
          </WhatsAppLink>
        </div>
      </Section>

      <Results />
      <TeamSection />
      <LocationSection />
    </>
  );
}
