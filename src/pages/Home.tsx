type HomeProps = {
  onOpenCatalog: (catalog: 'bruna' | 'ducy') => void;
};

export default function Home({ onOpenCatalog }: HomeProps) {
  return (
    <>
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

      <section id="servicos" className="services">
        <h2>Nossos serviços</h2>

        <div className="cards">
          <article>
            <h3>Estética Facial</h3>
            <p>Protocolos personalizados para pele, viço e autoestima.</p>
          </article>

          <article>
            <h3>Injetáveis</h3>
            <p>Procedimentos avançados com cuidado e naturalidade.</p>
          </article>

          <article>
            <h3>Ducy Nails</h3>
            <p>Nail design, alongamento, blindagem e esmaltação em gel.</p>
          </article>
        </div>
      </section>
    </>
  );
}
