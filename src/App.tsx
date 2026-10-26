/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-offwhite min-h-screen selection:bg-brand-soft-gold selection:text-brand-black">
        <Navbar />

        <main className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </div>
    </Router>
  );
}
