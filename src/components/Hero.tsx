type HeroProps = {
  onOpenCatalog: (catalog: 'bruna' | 'ducy') => void;
};

export function Hero({ onOpenCatalog }: HeroProps) {
  return (
    <section id="inicio" className="hero">
      <p className="tag">Clínica de Estética</p>
      <h1>BeautyGlow</h1>
      <p className="subtitle">
        Realce sua beleza natural com estética facial, injetáveis e nail design.
      </p>

      <div className="buttons">
        <button onClick={() => onOpenCatalog('bruna')}>Ver estética</button>
        <button onClick={() => onOpenCatalog('ducy')}>Ver Ducy Nails</button>
      </div>
    </section>
  );
}
