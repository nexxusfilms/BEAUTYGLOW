/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import { CatalogModal } from './components/CatalogModal';
import { BRUNA_SERVICES, DUCY_SERVICES, NAILS_PHONE_NUMBER } from './constants';

export default function App() {
  const [openCatalog, setOpenCatalog] = useState<'bruna' | 'ducy' | null>(null);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-offwhite min-h-screen selection:bg-brand-beige selection:text-brand-black">
        <Navbar onOpenCatalog={setOpenCatalog} />
        
        <main>
          <Home onOpenCatalog={setOpenCatalog} />
        </main>

        <Footer />

        {/* Global Modals */}
        <CatalogModal 
          isOpen={openCatalog === 'bruna'}
          onClose={() => setOpenCatalog(null)}
          title="Estética Facial & Injetáveis"
          subtitle="Bruna Services • Procedimentos Avançados"
          services={BRUNA_SERVICES}
          whatsappMessagePrefix="Olá, gostaria de agendar minha experiência na Beauty Glow!"
        />

        <CatalogModal 
          isOpen={openCatalog === 'ducy'}
          onClose={() => setOpenCatalog(null)}
          title="Ducy Nails"
          subtitle="Catálogo Nail Design"
          services={DUCY_SERVICES}
          customPhoneNumber={NAILS_PHONE_NUMBER}
          whatsappMessagePrefix="Olá, gostaria de agendar minha experiência na Beauty Glow com a Ducy Nails!"
        />
      </div>
    </Router>
  );
}

