import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {
  return (
    <main>
      <h1>BeautyGlow</h1>
      <p>Site publicado com React + Vite + GitHub Pages.</p>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
