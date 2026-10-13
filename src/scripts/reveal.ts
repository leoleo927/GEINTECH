/**
 * Muestra con animación los elementos marcados con `data-reveal`
 * cuando entran en la pantalla. Cada elemento se anima una sola vez.
 */
const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
);

elements.forEach((element) => observer.observe(element));
