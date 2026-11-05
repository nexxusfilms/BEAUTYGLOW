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
    image: "/banners/exo-glow-brows.webp",
    imageMobile: "/banners/exo-glow-brows-mobile.jpg",
    imagePosition: "center 12%",
    narrowText: true,
    servico: "Exo Glow Brows",
    eyebrow: "Exo Glow Brows",
    title: "Regeneração dos fios",
    subtitle: "Tratamento regenerativo de tecnologia coreana que estimula o crescimento das sobrancelhas e recupera falhas.",
    showText: true,
  },
  {
    id: "h2",
    image: "/img/HInxhUXWkAE-WsJ.jpg",
    servico: "Nano Lips",
    eyebrow: "Nano Lips",
    title: "Lábios com cor e definição",
    subtitle: "Revitalização do tom natural com acabamento delicado.",
    showText: true,
  },
  {
    id: "h3",
    image: "/banners/k-glow-skin.webp",
    imagePosition: "40% 15%",
    servico: "K-Glow Skin",
    eyebrow: "K-Glow Skin",
    title: "Pele renovada, luminosa e radiante",
    subtitle: "Tecnologia coreana que combina renovação da pele e cuidado regenerativo em um protocolo personalizado.",
    showText: true,
  },
  {
    id: "h4",
    image: "/banners/exo-glow-hair.webp",
    imagePosition: "70% center",
    servico: "Exo Glow Hair",
    eyebrow: "Exo Glow Hair",
    title: "Mais densidade, menos falhas",
    subtitle: "Tratamento capilar regenerativo com tecnologia coreana, desenvolvido para cuidar do couro cabeludo e estimular o crescimento dos fios.",
    showText: true,
  },
  {
    id: "h5",
    image: "/banners/nano-brows-desktop.jpg",
    imageMobile: "/banners/nano-brows.webp",
    imagePosition: "center 12%",
    mobileFit: "width",
    narrowText: true,
    servico: "Nano Brows",
    eyebrow: "Nano Brows",
    title: "Sobrancelhas definidas com naturalidade",
    subtitle: "Realce seu olhar com a nanopigmentação que valoriza seus traços e proporciona um resultado delicado e harmonioso.",
    showText: true,
  },
];

// Galeria de antes e depois. Para incluir mais fotos, basta adicionar itens nesta lista.
export const RESULTS: ResultItem[] = [
  {
    id: "r1",
    image: "/img/HIn1S5jXUAEK6Or.jpg",
    servico: "Bioestimulador de Colágeno",
    description: "Mais firmeza e sustentação no contorno facial.",
  },
];

export const TREATMENTS: { [key: string]: Service[] } = {
  "Sobrancelhas": [
    {
      id: "sb2",
      tag: "Perfect Brows",
      name: "Design de Sobrancelhas Exclusivo",
      category: "Sobrancelhas",
      description: "Procedimento de alta performance que une visagismo e harmonização facial, com um desenho personalizado que valoriza seu olhar, de forma natural e elegante.",
      image: "/img/perfect-brows.webp"
    },
    {
      id: "sb3",
      tag: "Brows Lift",
      name: "Sobrancelhas mais alinhadas e valorizadas",
      category: "Sobrancelhas",
      description: "Protocolo exclusivo que combina Brow Lamination, Design Visagista, coloração e um ritual sensorial de cuidado, para um olhar mais marcante e uma aparência de sobrancelhas mais cheias, definidas e harmoniosas.",
      image: "/img/brows-lift.webp"
    },
    {
      id: "sb1",
      tag: "Nano Brows",
      name: "Sobrancelhas naturalmente definidas, com harmonia e sofisticação.",
      category: "Sobrancelhas",
      description: "Técnica exclusiva de nanopigmentação que valoriza o desenho das sobrancelhas, preenchendo falhas e proporcionando mais definição e naturalidade, com um resultado personalizado que respeita a identidade de cada rosto.",
      image: "/img/HInty-SWAAE9xhv.jpg",
      imagePosition: "center 41%"
    },
    {
      id: "sb4",
      tag: "Exo Glow Brows",
      name: "Sobrancelhas mais preenchidas, fortes e saudáveis.",
      category: "Sobrancelhas",
      description: "Tratamento regenerativo de tecnologia coreana que estimula o crescimento dos fios, fortalece as sobrancelhas e auxilia na recuperação de falhas, promovendo uma aparência mais preenchida e natural.",
      image: "/img/exo-glow-brows.webp"
    }
  ],

  "Lábios": [
    {
      id: "lb1",
      tag: "Nano Lips",
      name: "Nanopigmentação Labial",
      category: "Lábios",
      description: "Devolve vitalidade e definição sutil. Inclui neutralização de tons escurecidos e infusão de ácido hialurônico para saúde da pele.",
      image: "/img/HInxhUXWkAE-WsJ.jpg"
    },
    {
      id: "lb2",
      tag: "Lip Glow Therapy",
      name: "Cuidado especial para os lábios",
      category: "Lábios",
      description: "Ritual de cuidado labial que combina esfoliação suave, hidratação e finalização com brilho, proporcionando uma experiência breve e acolhedora, pensada para deixar os lábios com sensação de maciez e conforto.",
      image: "/img/lip-glow-therapy.webp"
    },
    {
      id: "lb3",
      tag: "Glow Lips Hydro",
      name: "Hidratação e renovação para os lábios.",
      category: "Lábios",
      description: "Protocolo tecnológico de cuidado labial que combina ativos específicos, hidratação e uma etapa com microagulhas, auxiliando na melhora da textura e proporcionando lábios mais macios, hidratados e com aparência saudável.",
      image: "/img/glow-lips-hydro.webp"
    },
    {
      id: "lb4",
      tag: "Glow Lips Regenerate",
      name: "Regeneração e cuidado avançado para os lábios.",
      category: "Lábios",
      description: "Protocolo de regeneração labial, que combina ativos específicos de tecnologia coreana selecionados para regenerar, recuperar e hidratar profundamente os lábios.",
      image: "/img/glow-lips-regenerate-v2.webp"
    }
  ],

  "Olhos": [
    {
      id: "ol1",
      tag: "Lash Lift & Tint",
      name: "Cílios naturais com efeito alongado e curvatura perfeita",
      category: "Olhos",
      description: "Realce todo o potencial dos seus cílios naturais! Um protocolo que combina curvatura e coloração para criar um olhar mais aberto, marcante e expressivo, com efeito de máscara de cílios e praticidade no dia a dia.",
      image: "/img/lash-lift-tint.webp"
    },
    {
      id: "ol3",
      tag: "Soft Natural Lashes",
      name: "Extensão de cílios com efeito natural",
      category: "Olhos",
      description: "Alongamento personalizado fio a fio ou em volume light, que proporciona cílios mais preenchidos, definidos e um olhar delicadamente realçado, respeitando a harmonia dos seus traços.",
      image: "/img/soft-natural-lashes.webp"
    },
    {
      id: "ol4",
      tag: "Glam Lashes",
      name: "Cílios mais volumosos, preenchidos e um olhar marcante.",
      category: "Olhos",
      description: "Extensão de cílios com efeito mais volumoso e expressivo, ideal para quem deseja um olhar mais intenso, destacado e com presença, valorizando a beleza dos olhos.",
      image: "/img/glam-lashes.webp"
    },
    {
      id: "ol5",
      tag: "Glow Lash Refill",
      name: "Mantenha seus cílios sempre impecáveis e renovados.",
      category: "Olhos",
      description: "Manutenção exclusiva para clientes Beauty Glow que desejam preservar a beleza e o preenchimento das extensões. Indicada dentro do prazo estabelecido pela clínica, mediante avaliação das extensões e dos fios naturais.",
      image: "/img/glow-lash-refill.webp"
    },
    {
      id: "ol2",
      tag: "Nano Eyeliner",
      name: "Delineado personalizado para realçar e transformar o seu olhar.",
      category: "Olhos",
      description: "Nanopigmentação das pálpebras, com diferentes possibilidades de efeitos, do realce sutil da raiz dos cílios ao delineado clássico ou esfumado, respeitando o formato dos olhos e a identidade de cada olhar.",
      image: "/img/nano-eyeliner-v2.webp"
    }
  ],

  "Pele": [
    {
      id: "pl1",
      tag: "K-Beauty Glow",
      name: "Uma experiência de cuidado coreano para revelar uma pele radiante.",
      category: "Pele",
      description: "Ritual facial inspirado na beleza coreana, que combina etapas de cuidado e revitalização para proporcionar uma pele com aparência mais fresca, luminosa e bem cuidada. Pode ser complementado com a limpeza de pele, conforme a necessidade e avaliação individual.",
      image: "/img/k-beauty-glow.webp"
    },
    {
      id: "pl2",
      tag: "Korean Glow Peel",
      name: "O segredo da Glass Skin: luminosidade, uniformidade e pele renovada.",
      category: "Pele",
      description: "Inspirado na tecnologia coreana, o Korean Glow Peel é um peeling químico de nova geração que promove a renovação da pele, auxiliando na melhora da textura, luminosidade, oleosidade, poros aparentes e uniformidade do tom. Uma experiência de cuidado avançado para conquistar uma pele com aparência mais lisa, viçosa e radiante, sem a descamação intensa dos peelings tradicionais.",
      image: "/img/korean-glow-peel.webp"
    },
    {
      id: "pl3",
      tag: "BB Glow",
      name: "Efeito pele de porcelana: mais luminosidade e uniformidade.",
      category: "Pele",
      description: "Tratamento estético inspirado no efeito BB Cream, que utiliza séruns específicos para proporcionar uma pele com aparência mais uniforme, luminosa e revitalizada, valorizando o viço e a beleza natural do rosto.",
      image: "/img/bb-glow.webp"
    },
    {
      id: "pl4",
      tag: "Glow Exo Regen",
      name: "Biotecnologia coreana e inovação para o cuidado avançado da sua pele.",
      category: "Pele",
      description: "Uma experiência de cuidado regenerativo que combina ativos biotecnológicos de origem coreana, com foco na qualidade, textura e firmeza da pele. Protocolo exclusivo assinado por Bruna Guma, que traz para a Beauty Glow conhecimentos e tecnologias diretamente da Coreia do Sul, com planejamento personalizado para cada pele.",
      image: "/img/glow-exo-regen.webp"
    }
  ],

  "Complementares": [
    {
      id: "cp2",
      tag: "Glow Hair & Beard",
      name: "Estímulo ao crescimento e mais densidade para os fios.",
      category: "Complementares",
      description: "Protocolo de estímulo capilar que combina microagulhamento e ativos biotecnológicos de origem coreana, com foco no fortalecimento dos fios, estímulo ao crescimento e melhora da densidade capilar, tanto no cabelo quanto na barba.",
      image: "/img/glow-hair-beard.webp"
    },
    {
      id: "cp3",
      tag: "Glow Skin Repigmentation",
      name: "Micropigmentação paramédica e harmonização da pele.",
      category: "Complementares",
      description: "Técnicas especializadas de micropigmentação paramédica para camuflagem de manchas senis, cicatrizes e estrias, além da harmonização e restauração estética das aréolas. Protocolos personalizados que buscam promover maior uniformidade visual, respeitando as características e particularidades de cada pele.",
      image: "/img/glow-skin-repigmentation.webp"
    },
    {
      id: "cp4",
      tag: "Glow Inject",
      name: "Realce sua beleza com equilíbrio e naturalidade.",
      category: "Complementares",
      description: "Tratamentos injetáveis personalizados que incluem toxina botulínica, preenchimentos, bioestimuladores e outras possibilidades para cuidar dos sinais do envelhecimento, valorizar os contornos e promover harmonia facial.",
      image: "/img/glow-inject.webp"
    },
    {
      id: "cp5",
      tag: "Glow Laser Technologies",
      name: "Tecnologia avançada para transformar o cuidado com a sua pele.",
      category: "Complementares",
      description: "Tratamentos com tecnologias avançadas como Lavieen, laser de CO₂ e Ultraformer, entre outras, para estimular o rejuvenescimento, melhorar a textura, promover firmeza e valorizar a qualidade da pele, com protocolos personalizados para cada necessidade.",
      image: "/img/glow-laser-technologies.webp"
    },
    {
      id: "cp6",
      tag: "Glow Laser Removal",
      name: "Uma nova possibilidade para pigmentos que você deseja remover",
      category: "Complementares",
      description: "Tratamento especializado para remoção de pigmentos de sobrancelhas, lábios e tatuagens, com tecnologia e planejamento individualizado de acordo com as características do pigmento e da região tratada.",
      image: "/img/glow-laser-removal.webp"
    }
  ]
};

export const TESTIMONIALS = [
  {
    id: "te1",
    author: "Maria Constantino",
    content: "Minhas sobrancelhas estão naturalmente lindas desde que as deixei aos cuidados da Beauty Glow. Comecei com um tratamento para crescimento de pelos em falhas que foi um sucesso e não parei mais. Recomendo pra todo mundo!!",
    image: "/img/review-1.png"
  },
  {
    id: "te2",
    author: "Ana Paula Nunes",
    content: "Eu não conhecia esta clínica de estética e fiquei impressionada pela qualidade do serviço. Recomendo.",
    image: "/img/review-2.png"
  },
  {
    id: "te3",
    author: "Karen do Valle",
    content: "Toda equipe maravilhosa, Bruna fez a micro em minha mãe e eu, e amamos o resultado e o cuidado especial em cada detalhe. Preço justo e serviço excepcional.",
    image: "/img/review-3.png"
  }
];
