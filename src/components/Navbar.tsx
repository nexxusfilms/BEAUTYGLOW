type NavbarProps = {
  onOpenCatalog: (catalog: 'bruna' | 'ducy') => void;
};

export function Navbar({ onOpenCatalog }: NavbarProps) {
  return (
    <header className="navbar">
      <strong>BeautyGlow</strong>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <button onClick={() => onOpenCatalog('bruna')}>Estética</button>
        <button onClick={() => onOpenCatalog('ducy')}>Ducy Nails</button>
      </nav>
    </header>
  );
}
