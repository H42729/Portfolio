import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const defaultMargin = isMobile ? '0px 0px 50px 0px' : '0px 0px -30px 0px';
    const defaultThreshold = isMobile ? 0.02 : 0.1;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: defaultThreshold, rootMargin: defaultMargin, ...options }
    );

    // Observe element itself and all children with reveal classes
    const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    targets.forEach((child) => observer.observe(child));

    if (
      el.classList.contains('reveal') ||
      el.classList.contains('reveal-left') ||
      el.classList.contains('reveal-right')
    ) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
