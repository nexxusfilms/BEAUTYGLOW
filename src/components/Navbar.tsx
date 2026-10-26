import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CLINIC } from '../constants';
import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';

const navLinks = [
  { name: 'A Clínica', href: '/#about' },
  { name: 'Tratamentos', href: '/#tratamentos' },
  { name: 'Resultados', href: '/#resultados' },
  { name: 'Onde Estamos', href: '/#location' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-offwhite/95 backdrop-blur-md border-b border-brand-beige">
      <nav aria-label="Principal" className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center gap-4">
        <a href="/#inicio" onClick={closeMenu} className="shrink-0" aria-label="Beauty Glow - início">
          <img src="/brand/logo-horizontal.png" alt="Beauty Glow" width={720} height={159} className="h-8 md:h-10 w-auto" />
        </a>

        <ul className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-xs uppercase tracking-widest hover:text-brand-gold-deep transition-colors duration-300">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href={CLINIC.instagram} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest hover:text-brand-gold-deep transition-colors duration-300">
              Instagram
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppLink
            local="menu"
            className="inline-flex items-center gap-2 bg-brand-black text-brand-offwhite text-[11px] md:text-xs uppercase tracking-widest px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-brand-gold-deep transition-colors duration-300"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Agendar
          </WhatsAppLink>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-offwhite border-t border-brand-beige overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {[...navLinks, { name: 'Instagram', href: CLINIC.instagram }].map((link) => (
                <li key={link.name} className="border-b border-brand-beige/70 last:border-0">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block py-4 text-sm uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
