declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

type TrackParams = Record<string, string>;

// Envia o evento para o GTM (dataLayer) e, opcionalmente, para o Pixel da Meta.
export function trackEvent(event: string, params: TrackParams = {}, metaEvent?: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });

  if (metaEvent && typeof window.fbq === 'function') {
    window.fbq('track', metaEvent, params);
  }
}
