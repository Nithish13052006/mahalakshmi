// ============================================
// MAHALAKSHMI STUDIO — useInView Hook
// Triggers animation when element enters viewport
// ============================================

import { useEffect, useRef, useState } from 'react'

/**
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Fraction of element visible (0–1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.once - Only trigger once
 */
export function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}

