export const GA_TRACKING_ID = "UA-167539311-1"

type Gtag = typeof gtag;
type WindowWithGtag = Window & { gtag: Gtag };

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  const windowWithGtag = window as WindowWithGtag;
  windowWithGtag.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: { action: string, category: string, label: string, value: string}): void => {
  const windowWithGtag = window as WindowWithGtag;
  windowWithGtag.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
