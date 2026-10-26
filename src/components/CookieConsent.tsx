import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'bg-cookie-consent';
const OPEN_EVENT = 'bg-open-cookie-settings';

type Choice = 'granted' | 'denied';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

// Aplica a escolha no Consent Mode do Google (via GTM) e no Pixel da Meta.
function applyChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Sem armazenamento (aba anônima): a escolha vale só para esta visita.
  }

  window.gtag?.('consent', 'update', {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
  window.fbq?.('consent', choice === 'granted' ? 'grant' : 'revoke');
  window.dataLayer?.push({ event: 'cookie_consent_update', consent: choice });
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readChoice() === null);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (choice: Choice) => {
    applyChoice(choice);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed z-50 inset-x-3 bottom-3 md:inset-x-auto md:left-6 md:bottom-6 md:max-w-md bg-white border border-brand-beige rounded-2xl shadow-2xl p-5 md:p-6"
    >
      <p className="text-sm text-brand-black/80 leading-relaxed mb-4">
        Usamos cookies para medir o desempenho do site e das nossas campanhas. Você pode aceitar ou recusar.{' '}
        <Link to="/privacidade" className="underline underline-offset-2 hover:text-brand-gold-deep">Saiba mais</Link>.
      </p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => choose('denied')}
          className="flex-1 border border-brand-beige text-brand-black text-xs uppercase tracking-widest py-3 rounded-full hover:border-brand-gold transition-colors"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className="flex-1 bg-brand-black text-brand-offwhite text-xs uppercase tracking-widest py-3 rounded-full hover:bg-brand-gold-deep transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};
