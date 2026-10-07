const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "cohort", "touch"];
const STORAGE_KEY = "oitp_ai_attribution";
const DEFAULT_CAMPAIGN = "customer_ai_discovery_2026q4";
const CANONICAL_PAGE = "https://ai.oneitpro.com/";
const CORPORATE_CONTACT = "https://www.oneitpro.com/#contact";
const attribution = { site_source: "ai", landing_page: CANONICAL_PAGE };
const query = new URLSearchParams(window.location.search);

for (const key of ATTRIBUTION_KEYS) {
  const value = query.get(key);
  if (value && value.length <= 250) attribution[key] = value;
}

try {
  const prior = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  for (const key of ATTRIBUTION_KEYS) {
    if (!attribution[key] && typeof prior[key] === "string") attribution[key] = prior[key];
  }
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
} catch {
  // Conversion paths remain functional when storage is unavailable.
}

function emitEvent(name) {
  document.dispatchEvent(new CustomEvent("oitp:analytics", {
    detail: { event: name, ...attribution }
  }));
}

document.querySelectorAll("[data-event]").forEach(control => {
  control.addEventListener("click", () => emitEvent(control.dataset.event));
});

// Microsoft Bookings is kept on its approved direct URL. Bookings receives only
// parameters it natively supports; campaign attribution is retained for page/chat analytics.
emitEvent("landing_page_visit");

const chatStatus = document.querySelector("#chat-status");
let chatReady = false;

window.addEventListener("chatwoot:ready", () => {
  chatReady = true;
  if (window.$chatwoot?.setCustomAttributes) {
    window.$chatwoot.setCustomAttributes({
      ...attribution,
      utm_campaign: attribution.utm_campaign || DEFAULT_CAMPAIGN
    });
  }
});

if (location.hostname === "ai.oneitpro.com") {
  const sdk = document.createElement("script");
  sdk.src = "https://chat.oneitpro.com/packs/js/sdk.js";
  sdk.async = true;
  sdk.onload = () => window.chatwootSDK?.run({
    websiteToken: "WPAgNXztaznkoJkcKtCdh1bS",
    baseUrl: "https://chat.oneitpro.com"
  });
  document.head.appendChild(sdk);
}

document.querySelectorAll(".chat-trigger").forEach(button => {
  button.addEventListener("click", () => {
    if (chatReady && window.$chatwoot?.toggle) {
      window.$chatwoot.toggle("open");
      return;
    }
    chatStatus.textContent = "Opening One I.T. Pro chat on the main website.";
    window.open(CORPORATE_CONTACT, "_blank", "noopener,noreferrer");
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

