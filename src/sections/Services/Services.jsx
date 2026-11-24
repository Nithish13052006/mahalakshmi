import { useState } from 'react'
import { WHATSAPP_URL } from '../../utils/constants'
import './Services.css'

const SERVICES = [
  {
    num: '01',
    title: 'Wedding Photography',
    subtitle: 'Ceremonial & Traditional',
    description:
      'Capturing the emotions, traditions and unforgettable moments of your special day. We honour every ritual — from the sacred mangalsutra to the joy of reception — with timeless artistry.',
    image: '/images/story-muhurtham-ceremony.webp',
    alt: 'Sacred wedding ceremony and traditional rituals captured in rich detail',
    features: ['Traditional Rituals & Muhurtham', 'Family & Ancestral Portraits', 'Full Day Coverage', 'Fine Art Heirloom Album'],
  },
  {
    num: '02',
    title: 'Candid Photography',
    subtitle: 'Unposed & Authentic',
    description:
      'Real emotions and spontaneous moments captured naturally. We step back quietly to preserve the tears, laughter and unscripted glances that words can never replicate.',
    image: '/images/story-candid-bw.webp',
    alt: 'Spontaneous and heartfelt laughter shared between the bride and groom',
    features: ['Unscripted Emotional Storytelling', 'Guest & Family Candids', 'Golden Hour Couple Session', 'High-Res Digital Gallery'],
  },
  {
    num: '03',
    title: 'Wedding Cinematography',
    subtitle: 'Cinematic Films & Teasers',
    description:
      'Beautifully crafted wedding films that let you relive your celebration. Masterfully graded visual poetry accompanied by authentic sound design and traditional melodies.',
    image: '/images/story-reception-lights.webp',
    alt: 'Cinematic wedding film still featuring nighttime ambience and couple elegance',
    features: ['4K Ultra HD Multi-Cam Production', 'Cinematic Wedding Teaser (1-2 Min)', 'Full Ceremony Feature Film', 'Aerial Drone Cinematography'],
  },
  {
    num: '04',
    title: 'Pre-Wedding Photography',
    subtitle: 'Editorial Couple Sessions',
    description:
      'Creative couple portraits and romantic storytelling before your wedding. Curated outdoor locations, breathtaking natural backdrops, and serene intimate romance.',
    image: '/images/mahalakshmi-prewedding-01.webp',
    alt: 'Couple in dramatic mountain landscape with flowing magenta pre-wedding gown',
    features: ['Custom Location Scouting', 'Editorial Styling Guidance', 'Concept Storytelling', 'Save-the-Date Digital Teasers'],
  },
]

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="services" className="services-section" aria-label="Our Services">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <span className="section-label">What We Capture</span>
          <h2 className="section-title">
            Every Moment Deserves <br />
            <em>to Be Remembered.</em>
          </h2>
          <p className="section-subtitle">
            Crafted for couples who value authentic emotion, architectural elegance, and timeless South Indian traditions.
          </p>
        </div>

        {/* Editorial Split Showcase (No ordinary cards) */}
        <div className="services-showcase">
          {/* Left Column: Interactive Service List */}
          <div className="services-list" role="tablist" aria-label="Services list">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.num}
                className={`service-item ${activeIdx === idx ? 'active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                role="tab"
                tabIndex={0}
                aria-selected={activeIdx === idx}
                onKeyDown={(e) => e.key === 'Enter' && setActiveIdx(idx)}
              >
                <div className="service-item-top">
                  <span className="service-num">{srv.num}</span>
                  <div className="service-title-wrap">
                    <h3 className="service-title">{srv.title}</h3>
                    <span className="service-subtitle">{srv.subtitle}</span>
                  </div>
                  <span className="service-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="service-expanded-content">
                  <p className="service-desc">{srv.description}</p>
                  <ul className="service-features-list">
                    {srv.features.map((f) => (
                      <li key={f} className="service-feature-tag">
                        <span className="feature-dot" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL(`Hi Mahalakshmi Studio, I am interested in your ${srv.title} service. Could you share packages and availability?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-enquire-link"
                    aria-label={`Enquire about ${srv.title} on WhatsApp`}
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Cinematic Photograph Display */}
          <div className="services-visual" aria-live="polite">
            <div className="services-visual-inner">
              {SERVICES.map((srv, idx) => (
                <div
                  key={srv.num}
                  className={`services-photo-layer ${activeIdx === idx ? 'active' : ''}`}
                >
                  <img
                    src={srv.image}
                    alt={srv.alt}
                    loading="lazy"
                    className="services-photo-img"
                  />
                  <div className="services-photo-vignette" />
                  <div className="services-photo-badge">
                    <span className="badge-service-num">{srv.num}</span>
                    <span className="badge-service-title">{srv.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

