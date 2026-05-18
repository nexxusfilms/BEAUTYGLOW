import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="tag">Clínica de Estética</p>
        <h1>BeautyGlow</h1>
        <p className="subtitle">
          Realce sua beleza natural com tratamentos estéticos modernos,
          atendimento personalizado e cuidado em cada detalhe.
        </p>

        <div className="buttons">
          <a href="#servicos">Ver serviços</a>
          <a href="https://wa.me/5500000000000" target="_blank">
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      <section id="servicos" className="services">
        <h2>Nossos serviços</h2>

        <div className="cards">
          <article>
            <h3>Limpeza de pele</h3>
            <p>Tratamento para renovar, hidratar e deixar a pele mais saudável.</p>
          </article>

          <article>
            <h3>Design de sobrancelhas</h3>
            <p>Realce o olhar com um design feito sob medida para o seu rosto.</p>
          </article>

          <article>
            <h3>Tratamentos faciais</h3>
            <p>Protocolos personalizados para cuidado, viço e autoestima.</p>
          </article>
        </div>
      </section>

      <section className="contact">
        <h2>Agende seu horário</h2>
        <p>Entre em contato pelo WhatsApp e fale com nossa equipe.</p>
        <a href="https://wa.me/5500000000000" target="_blank">
          Chamar no WhatsApp
        </a>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
