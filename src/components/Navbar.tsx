type NavbarProps = {
  onOpenCatalog: (catalog: 'bruna' | 'ducy') => void;
};

export function Navbar({ onOpenCatalog }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-black/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a href="#" className="font-serif text-2xl text-brand-black">
          BeautyGlow
        </a>

        <nav className="flex items-center gap-5 text-xs uppercase tracking-[0.2em]">
          <a href="#inicio" className="text-brand-black hover:text-brand-gold transition-colors">
            Início
          </a>

          <a href="#selecao-catalogo" className="text-brand-black hover:text-brand-gold transition-colors">
            Serviços
          </a>

          <button
            onClick={() => onOpenCatalog('bruna')}
            className="text-brand-black hover:text-brand-gold transition-colors"
          >
            Estética
          </button>

          <button
            onClick={() => onOpenCatalog('ducy')}
            className="text-brand-black hover:text-brand-gold transition-colors"
          >
            Ducy Nails
          </button>
        </nav>
      </div>
    </header>
  );
}
