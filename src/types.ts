export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  category: string;
  image?: string;
  imagePosition?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  image?: string;
}

export interface HeroSlide {
  id: string;
  // Arte do banner. Se a arte já tiver o texto aplicado, deixe showText como false.
  image: string;
  // Versão vertical para celular (opcional). Sem ela, usa a mesma arte.
  imageMobile?: string;
  imagePosition?: string;
  // No celular, mostra a foto na largura toda, a partir do topo, e funde com o fundo marrom embaixo.
  mobileFit?: 'width';
  // Texto mais estreito no computador, para não tampar a foto.
  narrowText?: boolean;
  servico: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cta?: string;
  showText?: boolean;
}

export interface ResultItem {
  id: string;
  image: string;
  servico: string;
  description?: string;
}
