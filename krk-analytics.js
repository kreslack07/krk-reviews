/* KRK conversion tracking — GA4 (G-8CCRK0RVJF), property "hustle-ebace".
   One file for the whole funnel: kreslack07.github.io/krk-reviews.
   Loaded once per page as:
     <script async src="/krk-reviews/krk-analytics.js" data-krk-item="..." data-krk-name="..." data-krk-price=".."></script>
   Events fired: page_view (automatic) · view_item · begin_checkout · purchase.
   Idempotent: including the tag twice does not double-fire, and a Stripe session
   id only ever produces one purchase event (localStorage guard on thanks.html).
   Rule: never send a `value` that has not been read back from Stripe/Gumroad. */
(function () {
  var ID = 'G-8CCRK0RVJF';
  if (window.__krkGa4) { return; }
  window.__krkGa4 = true;

  var self = document.currentScript || document.querySelector('script[src*="krk-analytics.js"]');
  function attr(n) { return self && self.getAttribute ? self.getAttribute(n) : null; }

  var CURRENCY = 'AUD';

  /* checkout slug -> catalogue entry (slug = last path segment of the checkout URL).
     Amounts read back 2026-11-26: Stripe payment_links API (livemode), and the live
     kreslack2.gumroad.com product page for the Gumroad slugs. */
  var CATALOGUE = {
    '9b67sl5za8b76m7bgi67s02': { id: 'krk-audit-48h', name: 'KRK 48-Hour AI & SEO Website Audit', price: 49.00, category: 'service', channel: 'stripe' },
    '4gm3cv4vw7739yjgb267s0f': { id: 'krk-seo-check-10pt', name: 'KRK 10-Point Quick SEO Check (24h)', price: 19.00, category: 'service', channel: 'stripe' },
    '5kqcn5faa62zb2ndoq67s0j': { id: 'krk-care-99mo', name: 'KRK Local Visibility Care (monthly)', price: 99.00, category: 'service', channel: 'stripe' },
    'znaarn': { id: 'krk-audit-48h', name: 'KRK 48-Hour AI & SEO Website Audit Report', price: 49.00, category: 'service', channel: 'gumroad' },
    'aavetj': { id: 'krk-mega-bundle', name: 'KRK Digital Product Mega Bundle', price: 99.00, category: 'bundle', channel: 'gumroad' },
    'krk-ai-prompt-library': { id: 'krk-ai-prompt-library', name: 'KRK AI Prompt Library - 500+ prompts', price: 29.00, category: 'digital', channel: 'gumroad' },
    'mufce': { id: 'krk-notion-workspace', name: 'KRK Notion Ultimate Workspace', price: 39.00, category: 'digital', channel: 'gumroad' },
    'krk-freelancer-starter-kit': { id: 'krk-freelancer-starter-kit', name: 'KRK Freelancer Starter Kit', price: 33.00, category: 'digital', channel: 'gumroad' },
    'ai-prompt-toolkit': { id: 'ai-prompt-toolkit-50', name: 'AI Prompt Engineering Toolkit - 50 prompts', price: 4.95, category: 'digital', channel: 'gumroad' },
    'pitch-deck-template-kit': { id: 'pitch-deck-template-kit', name: 'Pitch Deck Template Kit', price: 25.00, category: 'digital', channel: 'gumroad' }
  };

  function slugOf(href) {
    return (href.split('?')[0].split('#')[0].split('/').pop() || '').toLowerCase();
  }


  /* SKUs carried on the Stripe redirect URL (?sku=...) into thanks.html. */
  var SKUS = {
    'krk-audit-48h':      { id: 'krk-audit-48h',      name: 'KRK 48-Hour AI & SEO Website Audit',  price: 49.00, category: 'service' },
    'krk-seo-check-10pt': { id: 'krk-seo-check-10pt', name: 'KRK 10-Point Quick SEO Check (24h)',  price: 19.00, category: 'service' },
    'krk-care-99mo':      { id: 'krk-care-99mo',      name: 'KRK Local Visibility Care (monthly)', price: 99.00, category: 'service' }
  };

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    var t = document.createElement('script');
    t.async = true;
    t.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(t);
  }
  gtag('js', new Date());
  gtag('config', ID, { send_page_view: true, currency: CURRENCY });

  /* ---- view_item: declared on the page itself, so it is always the page's own product ---- */
  var page = null;
  if (attr('data-krk-item')) {
    page = {
      item_id: attr('data-krk-item'),
      item_name: attr('data-krk-name') || document.title,
      currency: CURRENCY,
      item_category: attr('data-krk-cat') || 'digital'
    };
    var p = parseFloat(attr('data-krk-price'));
    if (!isNaN(p)) { page.price = p; }
    var vi = { currency: CURRENCY, items: [page] };
    if (page.price) { vi.value = page.price; }
    gtag('event', 'view_item', vi);
  }

  /* ---- begin_checkout: fired on the click that leaves for Stripe or Gumroad ---- */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) { return; }
    var href = a.href || '';
    var isStripe = href.indexOf('buy.stripe.com') > -1;
    var isGumroad = href.indexOf('gumroad.com') > -1;
    if (!isStripe && !isGumroad) { return; }

    var slug = slugOf(href);
    var known = CATALOGUE[slug];
    var item = known
      ? { item_id: known.id, item_name: known.name, price: known.price, currency: CURRENCY, item_category: known.category }
      : { item_id: (isGumroad ? 'gumroad-' : 'stripe-') + slug,
          item_name: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80) || slug,
          currency: CURRENCY,
          item_category: 'digital' };
    var payload = {
      currency: CURRENCY,
      payment_channel: isStripe ? 'stripe' : 'gumroad',
      link_url: href,
      items: [item]
    };
    if (known) { payload.value = known.price; }
    gtag('event', 'begin_checkout', payload);
  }, true);

  /* ---- purchase: Stripe Payment Link redirect -> thanks.html?sku=...&session_id=... ---- */
  if (attr('data-krk-thanks')) {
    var q = new URLSearchParams(window.location.search);
    var sid = q.get('session_id');
    var sku = q.get('sku') || (q.get('thanks') ? attr('data-krk-sku') : null);
    var p2 = sku ? SKUS[sku] : null;
    var guard = 'krk_purchase_' + (sid || sku || 'unknown');
    var seen = false;
    try { seen = !!window.localStorage.getItem(guard); } catch (_) {}
    if (p2 && (sid || sku) && !seen) {
      try { window.localStorage.setItem(guard, '1'); } catch (_) {}
      var pp = {
        currency: CURRENCY,
        value: p2.price,
        items: [{ item_id: p2.id, item_name: p2.name, price: p2.price, currency: CURRENCY, item_category: p2.category }]
      };
      if (sid) { pp.transaction_id = sid; }
      gtag('event', 'purchase', pp);
    }
  }
})();
