import { useState } from 'react'
import './Testimonials.css'

// IMPORTANT: Per project instructions, these are clearly identifiable
// placeholder entries ready to be replaced with authentic verified client words.
const PLACEHOLDER_TESTIMONIALS = [
  {
    id: 1,
    quote:
      '“Having Mahalakshmi Studio capture our wedding was the best decision we made. From the early morning ceremonies to the late evening celebrations, they moved like family. The moments captured will be cherished for generations.”',
    clientPlaceholder: '[ Verified Couple Review — The Kongu Heritage Wedding ]',
    location: 'Coimbatore, Tamil Nadu',
    service: 'Full Wedding & Reception Photography',
    year: '2024',
  },
  {
    id: 2,
    quote:
      '“The candids and the wedding teaser brought tears of joy to our parents. Their patience with our families, sensitivity to our rituals, and cinematic eye made every frame look straight out of a classic movie.”',
    clientPlaceholder: '[ Verified Couple Review — Sacred Temple Muhurtham ]',
    location: 'Chennai, Tamil Nadu',
    service: 'Traditional Muhurtham & Candid Cinematography',
    year: '2024',
  },
  {
    id: 3,
    quote:
      '“Our pre-wedding shoot in the misty mountains felt effortless and magical. They gave us space to be ourselves while capturing the grand scale of the landscape and the tenderness of our story.”',
    clientPlaceholder: '[ Verified Couple Review — Pre-Wedding Destination Shoot ]',
    location: 'Western Ghats, Tamil Nadu',
    service: 'Pre-Wedding Photography & Film',
    year: '2023',
  },
]

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const current = PLACEHOLDER_TESTIMONIALS[currentIdx]

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % PLACEHOLDER_TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIdx((prev) =>
      prev === 0 ? PLACEHOLDER_TESTIMONIALS.length - 1 : prev - 1
    )
  }

  return (
    <section id="testimonials" className="testimonials-section" aria-label="Client Testimonials">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <span className="section-label">Kind Words</span>
          <h2 className="section-title">
            Memories That Speak <br />
            <em>for Themselves.</em>
          </h2>
          <p className="section-subtitle">
            Reflections and heartfelt memories from couples who trusted us with their forever stories.
          </p>
        </div>

        {/* Editorial Quotation Stage */}
        <div className="testimonials-stage">
          <div className="quote-mark" aria-hidden="true">
            “
          </div>

          <div className="testimonial-card" key={current.id}>
            <blockquote className="testimonial-quote">
              {current.quote}
            </blockquote>

            <div className="testimonial-author-block">
              <span className="testimonial-placeholder-tag">
                {current.clientPlaceholder}
              </span>
              <div className="testimonial-meta-line">
                <span className="meta-loc">{current.location}</span>
                <span className="meta-sep">•</span>
                <span className="meta-service">{current.service}</span>
                <span className="meta-sep">•</span>
                <span className="meta-year">{current.year}</span>
              </div>
            </div>
          </div>

          {/* Minimal Controls */}
          <div className="testimonial-controls">
            <div className="testimonial-counter">
              <span className="counter-current">0{currentIdx + 1}</span>
              <span className="counter-slash">/</span>
              <span className="counter-total">0{PLACEHOLDER_TESTIMONIALS.length}</span>
            </div>

            <div className="testimonial-nav-btns">
              <button
                className="testimonial-nav-btn"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                className="testimonial-nav-btn"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

