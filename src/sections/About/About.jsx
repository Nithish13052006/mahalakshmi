import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useInView } from '../../hooks/useInView'
import './About.css'

export default function About() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.15 })
  const contentRef = useRef(null)
  const imageMainRef = useRef(null)
  const imageSecRef = useRef(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    if (inView && !animatedRef.current) {
      animatedRef.current = true
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }
      )
        .fromTo(
          imageMainRef.current,
          { opacity: 0, scale: 1.05, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power2.out' },
          '-=0.7'
        )
        .fromTo(
          imageSecRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.8'
        )
    }
  }, [inView])

  return (
    <section id="about" className="about-section" ref={sectionRef} aria-label="About Mahalakshmi Studio">
      <div className="container about-container">
        {/* Editorial Text Column */}
        <div className="about-content" ref={contentRef}>
          <span className="section-label">Behind The Lens</span>

          <h2 className="section-title about-title">
            We Build Relationships, <br />
            <em>Not Just Clients.</em>
          </h2>

          <div className="about-narrative">
            <p className="about-lead">
              Every wedding has a story worth remembering. At Mahalakshmi Studio, we believe photography is more than capturing pictures. It is about preserving emotions, traditions and the beautiful moments that become memories for a lifetime.
            </p>
            <p className="about-detail">
              From the sacred rhythm of the nadaswaram to the quiet glance between two souls before the sacred knot is tied — we document the authenticity of South Indian heritage with a modern cinematic aesthetic.
            </p>
          </div>

          <div className="about-signature-block">
            <div className="about-badge">
              <span className="badge-year">EST. 2014</span>
              <span className="badge-divider">/</span>
              <span className="badge-text">TAMIL NADU, INDIA</span>
            </div>
            <p className="about-signature-quote">
              “Photographs that feel like the day itself — timeless, poignant, and true.”
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Image Composition */}
        <div className="about-visuals">
          <div className="about-image-primary-wrap" ref={imageMainRef}>
            <img
              src="/images/story-couple-portrait.webp"
              alt="Romantic South Indian bride and groom couple portrait in traditional wedding attire"
              loading="lazy"
              className="about-image-primary"
            />
            <div className="about-image-frame" aria-hidden="true" />
          </div>

          <div className="about-image-secondary-wrap" ref={imageSecRef}>
            <img
              src="/images/story-better-half.webp"
              alt="Intimate wedding moment with groom kissing bride's forehead"
              loading="lazy"
              className="about-image-secondary"
            />
            <div className="about-caption-box">
              <span className="about-caption-num">01</span>
              <span className="about-caption-text">Unscripted Emotion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

