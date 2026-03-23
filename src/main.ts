/**
 * main.ts — client-side scroll animation only.
 *
 * All content is injected at build time by vite.config.ts.
 * This file has exactly one responsibility: observe elements
 * and add the `visible` class when they enter the viewport.
 */

const OBSERVE_SELECTORS = [
  '.era',
  '.cert-item',
  '.domain',
  '.fade-up',
].join(', ')

const CARD_GRID_SELECTORS = [
  '.projects-grid',
]

function initScrollObserver(): void {
  // Individual element reveals
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll<HTMLElement>(OBSERVE_SELECTORS).forEach((el) => {
    observer.observe(el)
  })

  // Staggered card grid reveals
  const gridObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll<HTMLElement>('.project-card')
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 100)
          })
          gridObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05 }
  )

  CARD_GRID_SELECTORS.forEach((selector) => {
    const grid = document.querySelector<HTMLElement>(selector)
    if (grid) gridObserver.observe(grid)
  })
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollObserver)
} else {
  initScrollObserver()
}
