import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavLink {
  name: string;
  href?: string;
  onClick?: () => void;
  type: 'anchor' | 'link' | 'action';
}

const NavItem: React.FC<{ link: NavLink, mobile?: boolean, onClose: () => void }> = ({ link, mobile = false, onClose }) => {
  const baseClass = mobile 
    ? "text-sm uppercase tracking-widest text-center cursor-pointer py-2"
    : "text-xs uppercase tracking-widest hover:text-brand-gold transition-colors duration-300 cursor-pointer";

  const handleAnchorClick = (e: React.MouseEvent) => {
    if (link.type === 'anchor' && link.href) {
      const id = link.href.includes('#') ? link.href.split('#')[1] : '';
      if (id) {
        e.preventDefault();
        onClose();
        
        // Use a small timeout to allow the menu close state to register
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  if (link.type === 'action' && link.onClick) {
    return (
      <button 
        onClick={() => {
          link.onClick?.();
          onClose();
        }}
        className={baseClass}
      >
        {link.name}
      </button>
    );
  }

  if (link.type === 'link' && link.href) {
    return (
      <Link 
        to={link.href} 
        onClick={onClose}
        className={baseClass}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <a 
      href={link.href}
      onClick={handleAnchorClick}
      className={baseClass}
    >
      {link.name}
    </a>
  );
};

export const Navbar = ({ onOpenCatalog }: { onOpenCatalog: (type: 'bruna' | 'ducy') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Sobre a Clínica', href: '/#about', type: 'anchor' },
    { name: 'Catálogo Estética', onClick: () => onOpenCatalog('bruna'), type: 'action' },
    { name: 'Catálogo Nails', onClick: () => onOpenCatalog('ducy'), type: 'action' },
    { name: 'Equipe', href: '/#team', type: 'anchor' },
    { name: 'Onde Estamos', href: '/#location', type: 'anchor' },
    { name: 'Instagram', href: 'https://www.instagram.com/beautyglowbr/', type: 'link' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    closeMenu();
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/' ? 'bg-brand-offwhite/80 backdrop-blur-md border-b border-brand-beige py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#selecao-catalogo" 
          onClick={(e) => scrollToSection(e, 'selecao-catalogo')}
          className="font-serif text-2xl tracking-widest text-brand-black cursor-pointer"
        >
          BEAUTY <span className="font-light italic">GLOW</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <NavItem key={link.name} link={link} onClose={closeMenu} />
          ))}
          <a 
            href="/#selecao-catalogo"
            onClick={(e) => scrollToSection(e, 'selecao-catalogo')}
            className="bg-brand-black text-white text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-brand-gold transition-all duration-300"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-offwhite border-b border-brand-beige overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 items-center">
              {navLinks.map((link) => (
                <NavItem key={link.name} link={link} mobile onClose={closeMenu} />
              ))}
              <a 
                href="/#selecao-catalogo"
                onClick={(e) => scrollToSection(e, 'selecao-catalogo')}
                className="w-full bg-brand-gold text-white text-xs uppercase tracking-widest py-4 rounded-full text-center mt-2 font-semibold"
              >
                Agendar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
