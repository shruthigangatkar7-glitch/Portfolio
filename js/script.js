/* ============================================================
   Shruthi M G — Portfolio Interactions
   ============================================================ */

(() => {
  "use strict";

  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const backToTop = document.getElementById("back-to-top");
  const yearEl = document.getElementById("year");

  /* Navbar shadow on scroll */
  const onScrollNav = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };
  onScrollNav();

  /* Mobile hamburger toggle */
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", open);
  });

  /* Close mobile menu on link click */
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* Active nav link highlighting via IntersectionObserver */
  const sections = document.querySelectorAll("section[id]");
  const linkByHref = {};
  document.querySelectorAll(".nav-link").forEach((link) => {
    linkByHref[link.getAttribute("href").slice(1)] = link;
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
          const target = linkByHref[entry.target.id];
          if (target) target.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  /* Scroll-reveal animations */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    revealObserver.observe(el);
  });

  /* Back to top */
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* Footer year */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Resume download click tracking (analytics hook placeholder) */
  document.querySelectorAll('a[download]').forEach((link) => {
    link.addEventListener("click", () => {
      console.info("Resume download triggered.");
    });
  });

  window.addEventListener("scroll", onScrollNav, { passive: true });
})();
