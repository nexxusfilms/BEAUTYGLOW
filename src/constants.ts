import { HeroSlide, ResultItem, Service } from './types';

export const PHONE_NUMBER = "5511932032385";

export const CLINIC = {
  name: "Beauty Glow",
  address: "R. Chile, 39 - Jardim América, São Paulo - SP, 01436-050",
  latitude: -23.575940,
  longitude: -46.670295,
  instagram: "https://www.instagram.com/beautyglowbr/",
  instagramHandle: "@beautyglowbr",
  email: "academybeautyglow@gmail.com",
  googleMapsUrl: "https://www.google.com/maps/place/Cl%C3%ADnica+de+Est%C3%A9tica+Beauty+Glow/@-23.5759381,-46.6702848,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5999766a84f7:0x8a3f43197b512c6a!8m2!3d-23.5759381!4d-46.6702848!16s%2Fg%2F11rjts6fy2?entry=ttu",
};

// Banner rotativo do topo do site. As imagens abaixo são provisórias,
// até chegarem as 4 artes oficiais.
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "h1",
    image: "https://pbs.twimg.com/media/HInty-SWAAE9xhv?format=jpg&name=large",
    servico: "Nanopigmentação de Sobrancelhas",
    eyebrow: "Sobrancelhas",
    title: "Nanopigmentação de Sobrancelhas",
    subtitle: "Fios desenhados um a um para um olhar natural e harmônico.",
    showText: true,
  },
  {
    id: "h2",
    image: "https://pbs.twimg.com/media/HInxhUXWkAE-WsJ?format=jpg&name=large",
    servico: "Nanopigmentação Labial",
    eyebrow: "Lábios",
    title: "Lábios com cor e definição",
    subtitle: "Revitalização do tom natural com acabamento delicado.",
    showText: true,
  },
  {
    id: "h3",
    image: "https://pbs.twimg.com/media/HIs5U6tXgAA7o35?format=jpg&name=large",
    servico: "Toxina Botulínica",
    eyebrow: "Injetáveis",
    title: "Rejuvenescimento sem perder a expressão",
    subtitle: "Toxina botulínica com dosagem personalizada e resultado natural.",
    showText: true,
  },
  {
    id: "h4",
    image: "https://pbs.twimg.com/media/HHozd1CWoAMgk9e?format=jpg&name=large",
    servico: "Avaliação personalizada",
    eyebrow: "Jardins · São Paulo",
    title: "Beleza natural de alto padrão",
    subtitle: "Agende sua avaliação personalizada na Beauty Glow.",
    showText: true,
  },
];

// Galeria de antes e depois. Para incluir mais fotos, basta adicionar itens nesta lista.
export const RESULTS: ResultItem[] = [
  {
    id: "r1",
    image: "https://pbs.twimg.com/media/HIn1S5jXUAEK6Or?format=jpg&name=large",
    servico: "Bioestimulador de Colágeno",
    description: "Mais firmeza e sustentação no contorno facial.",
  },
];

export const TREATMENTS: { [key: string]: Service[] } = {
  "Sobrancelhas": [
    {
      id: "sb1",
      name: "Nanopigmentação de Sobrancelhas",
      category: "Sobrancelhas",
      description: "Pilar da Beauty Glow, cada em naturalidade e equilíbrio. Atua restaurando falhas e assimetrias respeitando o visagismo facial e incluindo o protocolo Brow Recovery.",
      image: "https://pbs.twimg.com/media/HInty-SWAAE9xhv?format=jpg&name=medium"
    },
    {
      id: "sb2",
      name: "Design Visagista",
      category: "Sobrancelhas",
      description: "Estudo de proporções e identidade. Mais que remoção de pelos, é a harmonização da expressão baseada na estrutura óssea e facial.",
      image: "https://pbs.twimg.com/media/HInxoPfXEAAhLAF?format=jpg&name=medium"
    },
    {
      id: "sb3",
      name: "Brow Lamination",
      category: "Sobrancelhas",
      description: "Alinhamento estratégico dos fios naturais para um olhar estruturado e definido, mantendo a leveza e saúde capilar.",
      image: "https://pbs.twimg.com/media/HInxSyrXoAAiXz-?format=jpg&name=medium"
    },
    {
      id: "sb4",
      name: "Brow Recovery",
      category: "Sobrancelhas",
      description: "Protocolo regenerativo para estimular o folículo e favorecer o crescimento saudável dos fios naturais das sobrancelhas.",
      image: "https://pbs.twimg.com/media/HIs4XGfXIAE9nj6?format=jpg&name=large"
    }
  ],

  "Lábios": [
    {
      id: "lb1",
      name: "Nanopigmentação Labial",
      category: "Lábios",
      description: "Devolve vitalidade e definição sutil. Inclui neutralização de tons escurecidos e infusão de ácido hialurônico para saúde da pele.",
      image: "https://pbs.twimg.com/media/HInxhUXWkAE-WsJ?format=jpg&name=large"
    },
    {
      id: "lb2",
      name: "Hidratação Labial",
      category: "Lábios",
      description: "Revitalização profunda com nanotecnologia. Melhora textura e viço, podendo incluir efeito lip tint temporário.",
      image: "https://pbs.twimg.com/media/HInyRooWYAAZ_Cl?format=jpg&name=large"
    }
  ],

  "Olhos": [
    {
      id: "ol1",
      name: "Lash Lifting",
      category: "Olhos",
      description: "Curvatura técnica personalizada dos cílios naturais, preservando a integridade dos fios e realçando o olhar de forma orgânica.",
      image: "https://pbs.twimg.com/media/HInzYFHWoAEFs5k?format=jpg&name=large"
    },
    {
      id: "ol2",
      name: "Nanopigmentação de Delineado",
      category: "Olhos",
      description: "Realce elegante e discreto da base dos cílios. Técnicas sutis que valorizam o olhar sem pesar.",
      image: "https://pbs.twimg.com/media/HInzp41WEAAkKZv?format=jpg&name=large"
    }
  ],

  "Injetáveis & Rejuvenescimento": [
    {
      id: "ij1",
      name: "Toxina Botulínica",
      category: "Injetáveis & Rejuvenescimento",
      description: "Suavização e prevenção de linhas de expressão com planejamento individualizado para manter a dinâmica natural do rosto.",
      image: "https://pbs.twimg.com/media/HIs5U6tXgAA7o35?format=jpg&name=large"
    },
    {
      id: "ij2",
      name: "Preenchimento Facial",
      category: "Injetáveis & Rejuvenescimento",
      description: "Restauração de volumes e contornos focada em harmonia global, evitando excessos e respeitando a anatomia individual."
    },
    {
      id: "ij3",
      name: "Bioestimulador de Colágeno",
      category: "Injetáveis & Rejuvenescimento",
      description: "Estímulo gradual da produção de colágeno pelo próprio organismo, promovendo firmeza e estrutura à pele a longo prazo.",
      image: "https://pbs.twimg.com/media/HIn1S5jXUAEK6Or?format=jpg&name=large"
    }
  ],

  "Complementares": [
    {
      id: "cp1",
      name: "Epilação Facial (Linha)",
      category: "Complementares",
      description: "Remoção precisa com linha aprovada pela Anvisa, respeitando a sensibilidade e garantindo acabamento refinado.",
      image: "https://pbs.twimg.com/media/HIn2WwOW0AAyJvf?format=jpg&name=large"
    }
  ]
};

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
