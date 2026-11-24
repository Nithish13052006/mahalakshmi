// ============================================
// MAHALAKSHMI STUDIO — GSAP Animation Utilities
// ============================================

/**
 * Fade in an element from below — standard reveal
 */
export const fadeInUp = (element, options = {}) => {
  const { delay = 0, duration = 0.9, y = 40, ease = 'power3.out' } = options
  return {
    from: { opacity: 0, y, willChange: 'transform, opacity' },
    to: { opacity: 1, y: 0, duration, delay, ease },
    element,
  }
}

/**
 * Stagger children elements in sequence
 */
export const staggerChildren = (parent, options = {}) => {
  const { stagger = 0.12, delay = 0, duration = 0.8 } = options
  return { parent, stagger, delay, duration }
}

/**
 * Cinematic reveal for hero text
 */
export const cinematicReveal = (element, options = {}) => {
  const { delay = 0, duration = 1.4 } = options
  return {
    from: { opacity: 0, y: 60, skewY: 2 },
    to: { opacity: 1, y: 0, skewY: 0, duration, delay, ease: 'power4.out' },
    element,
  }
}

