import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

/* ============================================
   SLIDE DATA
   Each slide has its own composition metadata.
   object-position is handled in CSS per data-slide attr.
   "infiniteLove" flag suppresses any text overlay on that image.
============================================= */
const SLIDES = [
  {
    src: '/images/mahalakshmi-prewedding-02.webp',
    alt: 'Couple in a romantic misty lakeside pre-wedding moment',
    loading: 'eager',
    fetchpriority: 'high',
  },
  {
    src: '/images/mahalakshmi-prewedding-01.webp',
    alt: 'Couple with flowing gown against mountain landscape pre-wedding',
    loading: 'lazy',
    fetchpriority: 'auto',
  },
  {
    src: '/images/mahalakshmi-wedding-01.webp',
    alt: 'Bride and groom seated at beautifully decorated wedding stage',
    loading: 'lazy',
    fetchpriority: 'auto',
  },
  {
    src: '/images/mahalakshmi-wedding-02.webp',
    alt: 'Wedding couple gazing at each other at temple — Infinite Love',
    loading: 'lazy',
    fetchpriority: 'auto',
    infiniteLove: true, // photo already has embedded "Infinite Love" text — no overlay text
  },
]

const SLIDE_DURATION = 5500  // ms each slide is fully visible
const FADE_DURATION  = 1300  // ms crossfade

export default function Hero({ onLoaded }) {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded]   = useState(false)

  const slideRefs      = useRef([])
  const imgRefs        = useRef([])
  const labelRef       = useRef(null)
  const line1Ref       = useRef(null)
  const line2Ref       = useRef(null)
  const descRef        = useRef(null)
  const ctasRef        = useRef(null)
  const indicatorsRef  = useRef(null)
  const scrollRef      = useRef(null)
  const counterRef     = useRef(null)
  const currentNumRef  = useRef(null)

  const timerRef       = useRef(null)
  const isAnimating    = useRef(false)

  /* ---- INITIAL CINEMATIC REVEAL ---- */
  useEffect(() => {
    // Ensure first image is visible from start (opacity: 1 via CSS)
    // Initial reveal timeline fires after first image loads
    const img = imgRefs.current[0]
    if (!img) return

    const runReveal = () => {
      setLoaded(true)
      onLoaded?.()

      const tl = gsap.timeline()

      // 1. Hero image scale reveal (Ken Burns opening)
      tl.fromTo(
        imgRefs.current[0],
        { scale: 1.08 },
        { scale: 1, duration: 2.2, ease: 'power2.out' },
        0
      )

      // 2. Brand label
      tl.to(labelRef.current, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      }, 0.6)

      // 3. Headline line 1
      tl.to(line1Ref.current, {
        opacity: 1, y: 0, duration: 1.0, ease: 'power4.out',
      }, 0.85)

      // 4. Headline line 2
      tl.to(line2Ref.current, {
        opacity: 1, y: 0, duration: 1.0, ease: 'power4.out',
      }, 1.1)

      // 5. Description
      tl.to(descRef.current, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      }, 1.4)

      // 6. CTAs
      tl.to(ctasRef.current, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      }, 1.65)

      // 7. Side decorations
      tl.to([indicatorsRef.current, scrollRef.current, counterRef.current], {
        opacity: 1, x: 0, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
      }, 1.8)
    }

    if (img.complete) {
      runReveal()
    } else {
      img.addEventListener('load', runReveal, { once: true })
      img.addEventListener('error', runReveal, { once: true }) // graceful degradation
    }
  }, [onLoaded])

  /* ---- SLIDE TRANSITION ---- */
  const goToSlide = useCallback((next) => {
    if (isAnimating.current) return

    const prev = current
    if (next === prev) return

    isAnimating.current = true

    const prevSlide = slideRefs.current[prev]
    const nextSlide = slideRefs.current[next]
    const nextImg   = imgRefs.current[next]

    // Reset next slide scale before crossfade
    gsap.set(nextImg, { scale: 1.08 })

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false
        setCurrent(next)
      },
    })

    // Crossfade
    tl.to(nextSlide, { opacity: 1, duration: FADE_DURATION / 1000, ease: 'power2.inOut' }, 0)
    tl.to(prevSlide, { opacity: 0, duration: FADE_DURATION / 1000, ease: 'power2.inOut' }, 0)

    // Subtle Ken Burns on incoming slide
    tl.to(nextImg, {
      scale: 1,
      duration: (SLIDE_DURATION + FADE_DURATION) / 1000,
      ease: 'power1.out',
    }, 0)

    // Update counter
    if (currentNumRef.current) {
      tl.to(currentNumRef.current, {
        opacity: 0, y: -8, duration: 0.25, ease: 'power2.in',
        onComplete: () => {
          if (currentNumRef.current) {
            currentNumRef.current.textContent = String(next + 1).padStart(2, '0')
          }
        },
      }, 0.1)
      tl.to(currentNumRef.current, {
        opacity: 1, y: 0, duration: 0.35, ease: 'power2.out',
      }, 0.4)
    }
  }, [current])

  /* ---- AUTO-ADVANCE TIMER ---- */
  useEffect(() => {
    if (!loaded) return

    const advance = () => {
      const next = (current + 1) % SLIDES.length
      goToSlide(next)
    }

    timerRef.current = setTimeout(advance, SLIDE_DURATION)
    return () => clearTimeout(timerRef.current)
  }, [current, loaded, goToSlide])

  /* ---- INDICATOR CLICK ---- */
  const handleIndicator = (idx) => {
    if (idx === current || isAnimating.current) return
    clearTimeout(timerRef.current)
    goToSlide(idx)
  }

  /* ---- SCROLL HINT ---- */
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="hero" aria-label="Hero — Mahalakshmi Studio">
      {/* ---- SLIDESHOW ---- */}
      <div className="hero__slides" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="hero__slide"
            data-slide={i}
            ref={(el) => (slideRefs.current[i] = el)}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={slide.loading}
              fetchPriority={slide.fetchpriority}
              decoding={i === 0 ? 'sync' : 'async'}
              ref={(el) => (imgRefs.current[i] = el)}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* ---- GRADIENT OVERLAY ---- */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* ---- HERO CONTENT ---- */}
      <div className="hero__content">
        <p className="hero__label" ref={labelRef}>
          The Wedding Storytellers
        </p>

        <h1 className="hero__headline">
          <span className="hero__headline-line" ref={line1Ref}>Every Frame.</span>
          <span className="hero__headline-line" ref={line2Ref}>A Forever Story.</span>
        </h1>

        <p className="hero__description" ref={descRef}>
          We capture the emotions, traditions and timeless moments<br className="hide-mobile" />
          that make your story unforgettable.
        </p>

        <div className="hero__ctas" ref={ctasRef}>
          <a href="#our-stories" className="hero__cta-primary" aria-label="Explore our wedding stories">
            Explore Our Stories&nbsp;↗
          </a>
          <a href="#contact" className="hero__cta-secondary" aria-label="Book your wedding photography">
            Book Your Wedding
          </a>
        </div>
      </div>

      {/* ---- SLIDE COUNTER (desktop) ---- */}
      <div className="hero__counter" ref={counterRef} aria-hidden="true">
        <span className="hero__counter-current" ref={currentNumRef}>01</span>
        <span className="hero__counter-divider" />
        <span className="hero__counter-total">
          {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>

      {/* ---- SLIDE INDICATORS ---- */}
      <div
        className="hero__indicators"
        ref={indicatorsRef}
        role="tablist"
        aria-label="Slideshow navigation"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__indicator${i === current ? ' active' : ''}`}
            onClick={() => handleIndicator(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ---- SCROLL INDICATOR ---- */}
      <button
        className="hero__scroll"
        ref={scrollRef}
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" />
      </button>
    </section>
  )
}

