document.documentElement.classList.add("js-reveal");

const revealSelectors = [
  ".site-header",
  ".hero-copy > *",
  ".hero-visual",
  ".ticker",
  ".section-intro",
  ".problem-grid > *",
  ".belief > *",
  ".case-heading",
  ".case-flow",
  ".case-bottom",
  ".proof-heading",
  ".proof-card",
  ".method-intro",
  ".method-list",
  ".lesson-card",
  ".included-strip",
  ".audience-copy",
  ".audience-note",
  ".expert-photo",
  ".expert-copy",
  ".offer-copy",
  ".price-card",
  ".faq-list details",
  ".final-cta > *",
  ".site-footer > *",
].join(",");

const revealElements = [...document.querySelectorAll(revealSelectors)];
revealElements.forEach((element) => element.classList.add("reveal"));

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: "0px" },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

// Substitua o valor abaixo pelo link final do seu checkout Hotmart.
const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/J107159670P";

document.querySelectorAll("[data-checkout]").forEach((link) => {
  if (HOTMART_CHECKOUT_URL) {
    link.href = HOTMART_CHECKOUT_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#oferta")?.scrollIntoView({ behavior: "smooth" });
    });
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav?.classList.toggle("open");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
