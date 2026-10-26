import { WhatsAppIcon, WhatsAppLink } from '../whatsapp';

// Botão de contato sempre visível durante a navegação.
export const FloatingWhatsApp = () => (
  <WhatsAppLink
    local="flutuante"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed z-40 right-4 bottom-4 md:right-6 md:bottom-6 inline-flex items-center gap-2 bg-[#0E7A3E] text-white rounded-full shadow-2xl shadow-black/20 h-14 pl-4 pr-5 md:pr-6 hover:brightness-105 transition"
  >
    <WhatsAppIcon className="w-6 h-6" />
    <span className="text-sm font-medium">Fale conosco</span>
  </WhatsAppLink>
);
