// Centralised analytics — the single "doorbell" every form and CTA rings.
//
// Why this exists: previously each component called react-ga4 / react-facebook-pixel
// inline, so 19 of ~22 lead forms were never wired up and GA4 showed 0 conversions.
// Everything now routes through here so tracking is consistent and complete.
//
// Prod-gating: analytics only initialise in production (so local dev traffic doesn't
// pollute GA4 / Meta). Set VITE_ANALYTICS_DEBUG=true to force it on locally for testing.
//
// Conversion model (agreed with the business):
//   - primary lead (real enquiry / contact form)  -> GA4 `generate_lead`  (THE key event)
//   - soft lead    (freebie email grab)           -> GA4 `soft_lead`      (tracked, not primary)
//   - both tiers also fire the Meta standard `Lead` event, tagged with lead_tier.
// Flip `generate_lead` to a Key Event once in GA4 Admin and every form site-wide counts.

let ReactGA = null;
let ReactPixel = null;
let initialised = false;

const analyticsEnabled = () =>
    import.meta.env.PROD || import.meta.env.VITE_ANALYTICS_DEBUG === 'true';

const debugLog = (...args) => {
    if (import.meta.env.VITE_ANALYTICS_DEBUG === 'true') {
        // Stringify objects so the payload is readable in a single log line
        // eslint-disable-next-line no-console
        console.log('[analytics]', ...args.map((a) => (typeof a === 'object' && a !== null ? JSON.stringify(a) : a)));
    }
};

/**
 * Initialise GA4 + Meta Pixel. Call once, on app mount.
 * Lazy-loads both libraries so they stay out of the initial bundle.
 */
export async function initAnalytics() {
    if (!analyticsEnabled() || initialised) return;
    initialised = true;

    try {
        const gaModule = await import('react-ga4');
        ReactGA = gaModule.default;
        const gaId = import.meta.env.VITE_GA_ID;
        if (gaId) {
            ReactGA.initialize(gaId);
            ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
        } else {
            console.warn('GA4 ID not found in VITE_GA_ID');
        }
    } catch (err) {
        console.error('GA4 init failed:', err);
    }

    try {
        const pixelModule = await import('react-facebook-pixel');
        ReactPixel = pixelModule.default;
        const pixelId = import.meta.env.VITE_FB_PIXEL_ID;
        if (pixelId) {
            ReactPixel.init(pixelId);
            ReactPixel.pageView();
        } else {
            console.warn('Meta Pixel ID not found in VITE_FB_PIXEL_ID');
        }
    } catch (err) {
        console.error('Meta Pixel init failed:', err);
    }
}

/**
 * Fire a lead-capture conversion across GA4 + Meta.
 *
 * @param {string} source        - where the lead came from, e.g. 'adelaide_page_form'
 * @param {object} [opts]
 * @param {'primary'|'soft'} [opts.tier='primary'] - 'primary' = real enquiry, 'soft' = freebie email grab
 * @param {number} [opts.value=0]                  - monetary value if known (AUD)
 * @param {object} [opts.extra]                    - any extra params to attach
 */
export function trackLead(source, { tier = 'primary', value = 0, ...extra } = {}) {
    debugLog('trackLead', { source, tier, value, ...extra });

    if (ReactGA) {
        if (tier === 'primary') {
            ReactGA.event('generate_lead', {
                lead_source: source,
                currency: 'AUD',
                value,
                ...extra,
            });
        } else {
            ReactGA.event('soft_lead', {
                lead_source: source,
                ...extra,
            });
        }
    }

    if (ReactPixel) {
        ReactPixel.track('Lead', {
            content_name: source,
            lead_tier: tier,
            currency: 'AUD',
            value,
        });
    }
}

/**
 * Generic passthrough for non-lead engagement events (package select, CTA, nav).
 * @param {string} name    - GA4 event name
 * @param {object} [params]
 */
export function trackEvent(name, params = {}) {
    debugLog('trackEvent', name, params);
    if (ReactGA) ReactGA.event(name, params);
}
