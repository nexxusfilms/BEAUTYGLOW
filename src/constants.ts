import { Service, TeamMember } from './types';

export const PHONE_NUMBER = "5511932032385";
export const NAILS_PHONE_NUMBER = "5511953936451";

export const BRUNA_SERVICES: { [key: string]: Service[] } = {
  "Sobrancelhas": [
    {
      id: "sb1",
      name: "Design Personalizado",
      category: "Sobrancelhas",
      description: "Mapeamento facial completo para harmonizar o olhar respeitando sua estrutura óssea e densidade natural.",
      image: "https://pbs.twimg.com/media/HIn2v6WWAAA6w0M?format=jpg&name=large"
    },
    {
      id: "sb2",
      name: "Design com Tintura",
      category: "Sobrancelhas",
      description: "Realce de cor e preenchimento de falhas superficiais com tintura específica para fios e sombra suave na pele.",
      image: "https://pbs.twimg.com/media/HIn3W-wXIAAS32H?format=jpg&name=large"
    },
    {
      id: "sb3",
      name: "Brow Lamination",
      category: "Sobrancelhas",
      description: "Técnica de alinhamento dos fios para um visual mais encorpado, moderno e com maior versatilidade de estilo.",
      image: "https://pbs.twimg.com/media/HInxSyrXoAAiXz-?format=jpg&name=medium"
    },
    {
      id: "sb4",
      name: "Brow Recovery",
      category: "Sobrancelhas",
      description: "Protocolo regenerativo para estimular o folículo e favorecer o crescimento saudável dos fios naturais das sobrancelhas.",
      image: "https://pbs.twimg.com/media/HIs4XGfXIAE9nj6?format=jpg&name=large",
      imagePosition: "center 70%"
    }
  ],
  "Lábios": [
    {
      id: "lb1",
      name: "Tratamento de Hidratação",
      category: "Lábios",
      description: "Revitalização profunda para lábios ressecados, devolvendo o viço e a maciez sem adição de pigmentos.",
      image: "https://pbs.twimg.com/media/HIn4XfFXAAA_GqW?format=jpg&name=large",
      imagePosition: "center 60%"
    },
    {
      id: "lb2",
      name: "Neutralização / Revitalização",
      category: "Lábios",
      description: "Uniformização do tom labial e correção de manchas, proporcionando uma cor saudável e natural.",
      image: "https://pbs.twimg.com/media/HIn4p0-WkAAKlyT?format=jpg&name=large",
      imagePosition: "center 65%"
    }
  ],
  "Cílios": [
    {
      id: "ci1",
      name: "Lash Lifting",
      category: "Cílios",
      description: "Curvatura e tingimento dos próprios cílios, criando um efeito de rímel natural que dura várias semanas.",
      image: "https://pbs.twimg.com/media/HInzYFHWoAEFs5k?format=jpg&name=large"
    },
    {
      id: "ci2",
      name: "Extensão Personalizada",
      category: "Cílios",
      description: "Aplicação fio a fio com análise de visagismo para um olhar sofisticado e marcante na medida certa.",
      image: "https://pbs.twimg.com/media/HIn5P0IXkAAz391?format=jpg&name=large"
    }
  ],
  "Injetáveis": [
    {
      id: "sk1",
      name: "Toxina Botulínica",
      category: "Injetáveis",
      description: "Suavização e prevenção de linhas de expressão com planejamento individualizado para manter a dinâmica natural do rosto.",
      image: "https://pbs.twimg.com/media/HIs5U6tXgAA7o35?format=jpg&name=large",
      imagePosition: "center"
    },
    {
      id: "sk2",
      name: "Preenchimento Facial",
      category: "Injetáveis",
      description: "Restauração de volumes perdidos e refinamento de contornos com ácido hialurônico de alta tecnologia.",
      image: "https://pbs.twimg.com/media/HIn2WwRWcAEygCk?format=jpg&name=large",
      imagePosition: "center"
    },
    {
      id: "sk3",
      name: "Bioestimuladores de Colágeno",
      category: "Injetáveis",
      description: "Estímulo gradual da produção de colágeno pelo próprio organismo, promovendo firmeza e estrutura à pele a longo prazo.",
      image: "https://pbs.twimg.com/media/HIn1S5jXUAEK6Or?format=jpg&name=large",
      imagePosition: "center"
    }
  ],
  "Complementares": [
    {
      id: "cp1",
      name: "Hidragloss",
      category: "Complementares",
      description: "Tratamento de super hidratação com ativos que promovem rejuvenescimento e brilho imediato.",
      image: "https://pbs.twimg.com/media/HIn79iTXgAAw_9O?format=jpg&name=large"
    },
    {
      id: "cp2",
      name: "Microagulhamento",
      category: "Complementares",
      description: "Tratamento para textura, poros e cicatrizes, estimulando a renovação celular profunda.",
      image: "https://pbs.twimg.com/media/HIn8f3rWkAAI6V4?format=jpg&name=large"
    }
  ]
};

export const DUCY_SERVICES: { [key: string]: Service[] } = {
  "Alongamento": [
    { id: "na1", name: "Alongamento em Gel", category: "Alongamento", description: "Acabamento natural e resistente para um visual elegante e duradouro.", image: "https://pbs.twimg.com/media/HIW2lhSWgAEu1kc?format=jpg&name=medium" },
    { id: "na2", name: "Alongamento em Acrygel", category: "Alongamento", description: "Equilíbrio perfeito entre a leveza do gel e a força do acrílico.", image: "https://pbs.twimg.com/media/HIs3owwWsAEKWsh?format=jpg&name=large" },
    { id: "na3", name: "Alongamento em Polygel", category: "Alongamento", description: "Maleabilidade superior e resistência para formatos impecáveis.", image: "https://pbs.twimg.com/media/HIW2lhSWEAAHYPf?format=jpg&name=medium" },
    { id: "na4", name: "Faceta em Gel", category: "Alongamento", description: "Praticidade e durabilidade com géis pré-curados para correção estética.", image: "https://pbs.twimg.com/media/HIW2lhRW4AAfCKI?format=jpg&name=medium" },
    { id: "na5", name: "Alinhamento de Lâminas", category: "Alongamento", description: "Harmonização do formato natural sem necessidade de extensões completas.", image: "https://pbs.twimg.com/media/HIW2hpoWMAASxkV?format=jpg&name=medium" }
  ],
  "Blindagem": [
    { id: "st1", name: "Banho de Gel", category: "Blindagem", description: "Capa protetora sobre as unhas naturais para evitar quebras e garantir esmaltação perfeita.", image: "https://pbs.twimg.com/media/HIW2iJOXUAAN4NL?format=jpg&name=medium" },
    { id: "st2", name: "Blindagem de Diamante", category: "Blindagem", description: "Reforço extra-resistente para unhas extremamente frágeis ou com curvatura acentuada.", image: "https://pbs.twimg.com/media/HIW2lhSWsAAtfBy?format=jpg&name=medium" },
    { id: "st3", name: "Blindagem Cimentinho", category: "Blindagem", description: "Combinação de gel e acrílico para máxima dureza e crescimento saudável.", image: "https://pbs.twimg.com/media/HIW2lhRXQAAWoBS?format=jpg&name=medium" }
  ],
  "Estilo & Nail Art": [
    { id: "es1", name: "Formatos Personalizados", category: "Estilo", description: "Square, Almond ou Stiletto: design adaptado à anatomia das suas mãos.", image: "https://pbs.twimg.com/media/HIs4TdaXsAAOQuU?format=jpg&name=medium" },
    { id: "es2", name: "Nail Art Sofisticada", category: "Estilo", description: "Personalização com pedrarias, madrepérola e texturas para um visual exclusivo.", image: "https://pbs.twimg.com/media/HIn-0n2W8AACv9G?format=jpg&name=large" }
  ],
  "Cutilagem": [
    { id: "cu1", name: "Cutilagem Híbrida", category: "Cutilagem", description: "Técnica avançada que combina métodos manuais e mecânicos para um acabamento impecável e duradouro.", image: "https://pbs.twimg.com/media/HIt2C-eXYAA55UD?format=jpg&name=large" }
  ]
};

export const TEAM: TeamMember[] = [
  { id: "t1", name: "Bruna", role: "Founder & Estrategista", positioning: "Focada em gestão, qualidade e inovação. Idealizadora do método Beauty Glow de naturalidade consciente.", image: "https://pbs.twimg.com/media/HHo0jjRXgAQlz0C?format=jpg&name=4096x4096", imagePosition: "center 10%" },
  { id: "t6", name: "Ducy", role: "Nail Design", positioning: "Referência em design sofisticado, focada em durabilidade e cuidado extremo com a saúde das unhas naturais.", image: "https://pbs.twimg.com/media/HIW7KFgXIAAnoiE?format=jpg&name=large" },
  { id: "t2", name: "Juliana", role: "Lips & Lashes", positioning: "Líder de equipe e responsável pela qualidade técnica.", image: "https://pbs.twimg.com/media/HIn5oZ0WcAAwp2a?format=jpg&name=large" },
  { id: "t3", name: "Paloma", role: "Brows & Lashes", positioning: "Especialista em manter o rigor técnico e o conceito de sofisticação em cada detalhe do olhar.", image: "https://pbs.twimg.com/media/HIn6NfcWEAAwKy5?format=jpg&name=large", imagePosition: "center 15%" },
  { id: "t4", name: "Ellen", role: "Biomédica Esteta", positioning: "Especialista em procedimentos estéticos avançados e injetáveis, priorizando segurança absoluta e resultados naturais.", image: "https://pbs.twimg.com/media/HIrplDCWcAAvSXJ?format=jpg&name=large", imagePosition: "center 20%" },
  { id: "t5", name: "Jeu", role: "Auxiliar de Limpeza", positioning: "Responsável pela organização, higienização e manutenção dos ambientes, assegurando padrão elevado de cuidado, biossegurança e conforto.", image: "https://pbs.twimg.com/media/HIn9AO7XcAE33_O?format=jpg&name=large" }
];

export const TESTIMONIALS = [
  {
    id: "te1",
    author: "Maria Constantino",
    content: "Minhas sobrancelhas estão naturalmente lindas desde que as deixei aos cuidados da Beauty Glow. Comecei com um tratamento para crescimento de pelos em falhas que foi um sucesso e não parei mais. Recomendo pra todo mundo!!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWwxSM23NeSrUFGSrmsLR7EnoxG8byfqdBgu7F223s7MvXkl18fNA=w90-h90-p-rp-mo-br100"
  },
  {
    id: "te2",
    author: "Ana Paula Nunes",
    content: "Eu não conhecia esta clínica de estética e fiquei impressionada pela qualidade do serviço. Recomendo.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWL5WCybqnR40vgrBufGAsAniU4bjd5XD6OtfYua3vbmkjbd-vT=w90-h90-p-rp-mo-br100"
  },
  {
    id: "te3",
    author: "Karen do Valle",
    content: "Toda equipe maravilhosa, Bruna fez a micro em minha mãe e eu, e amamos o resultado e o cuidado especial em cada detalhe. Preço justo e serviço excepcional.",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWrQmCV3W2sK0zHRtPPXw_WMqQHaP6aZCTFJr4i3Bkvc_aJfUWp=w90-h90-p-rp-mo-br100"
  }
];
