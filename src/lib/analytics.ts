type EventParams = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes an event to the GTM dataLayer. GA4 events are configured in GTM;
 * this only emits the event, it does not require a GA4 tag to be present.
 */
export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
