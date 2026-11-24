import { useState, useMemo } from 'react'
import { WHATSAPP_URL, SITE } from '../../utils/constants'
import './Portfolio.css'

const CATEGORIES = [
  'All Stories',
  'Wedding Stories',
  'Candid Moments',
  'Pre-Wedding',
  'Wedding Details',
]

const STORIES = [
  {
    id: 1,
    title: 'The Grand Kongu Wedding',
    category: 'Wedding Stories',
    tag: 'Procession & Heritage',
    src: '/images/gallery-kongu-procession.jpg',
    alt: 'Traditional Kongu wedding groom procession with Nadaswaram musicians against a golden sky',
    size: 'featured-wide',
  },
  {
    id: 2,
    title: 'Infinite Love',
    category: 'Wedding Stories',
    tag: 'Sacred Vows',
    src: '/images/gallery-infinite-love.jpg',
    alt: 'Bride and groom in traditional South Indian wedding attire sharing a quiet gaze at a temple entrance',
    size: 'tall',
  },
  {
    id: 3,
    title: 'Better Half',
    category: 'Candid Moments',
    tag: 'Quiet Tenderness',
    src: '/images/gallery-better-half.jpg',
    alt: 'Groom gently holding bride close in a candid portrait against a bamboo grove backdrop',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Wholesome of Love',
    category: 'Candid Moments',
    tag: 'Pure Joy',
    src: '/images/gallery-wholesome-love.jpg',
    alt: 'Black and white candid portrait of bride and groom sharing joyful laughter at their wedding ceremony',
    size: 'medium',
  },
  {
    id: 5,
    title: 'The Whispering Mist',
    category: 'Pre-Wedding',
    tag: 'Lakeside Serenade',
    src: '/images/gallery-misty-couple.jpg',
    alt: 'Couple sharing a joyful embrace on a misty lotus pond jetty during their pre-wedding shoot',
    size: 'featured-wide',
  },
  {
    id: 6,
    title: 'Floral Stage',
    category: 'Wedding Stories',
    tag: 'Reception Night',
    src: '/images/gallery-floral-stage.jpg',
    alt: 'Bride and groom seated on a red sofa throne framed by an arch of vibrant tropical florals at reception',
    size: 'tall',
  },
  {
    id: 7,
    title: 'Crimson Cascade',
    category: 'Pre-Wedding',
    tag: 'Mountain Horizon',
    src: '/images/gallery-flying-saree.jpg',
    alt: 'Dramatic pre-wedding shoot with bride in a flowing crimson gown billowing in the wind against mountain vistas',
    size: 'wide',
  },
  {
    id: 8,
    title: 'Together is My Favourite Place',
    category: 'Wedding Stories',
    tag: 'Candid Moments',
    src: '/images/gallery-together-favorite.jpg',
    alt: 'Editorial magazine-layout showing couple at a floral reception stage with the quote Together is my favorite place to be',
    size: 'medium',
  },
  {
    id: 9,
    title: 'Bamboo Grove Portrait',
    category: 'Candid Moments',
    tag: 'Natural Light',
    src: '/images/gallery-bamboo-couple.jpg',
    alt: 'Bride in red Kanjivaram saree and groom in white sherwani sharing a tender pose in a bamboo grove',
    size: 'medium',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Stories')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const filteredStories = useMemo(() => {
    if (activeCategory === 'All Stories') return STORIES
    return STORIES.filter((s) => s.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="our-stories" className="portfolio-section" aria-label="Our Portfolio">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <div className="portfolio-header-left">
            <span className="section-label">Our Portfolio</span>
            <h2 className="section-title">
              Stories We&apos;ve Had <br />
              <em>the Honour to Tell.</em>
            </h2>
            <p className="section-subtitle">
              A collection of moments, emotions and celebrations captured through our lens across South India.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="portfolio-filters" role="tablist" aria-label="Filter gallery by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`portfolio-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="portfolio-grid">
          {filteredStories.map((item) => (
            <article
              key={item.id}
              className={`portfolio-card ${item.size}`}
              onClick={() => setSelectedPhoto(item)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedPhoto(item)}
            >
              <div className="portfolio-img-wrapper">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="portfolio-img"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-meta">
                    <span className="portfolio-tag">{item.tag}</span>
                    <h3 className="portfolio-card-title">{item.title}</h3>
                    <span className="portfolio-category-pill">{item.category}</span>
                  </div>
                  <span className="portfolio-view-icon" aria-hidden="true">
                    +
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Minimal Footer CTA */}
        <div className="portfolio-footer-cta">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline"
            aria-label="Explore all wedding stories on Instagram"
          >
            Explore All Stories on Instagram ↗
          </a>
          <a
            href={WHATSAPP_URL('Hi Mahalakshmi Studio, I loved your wedding stories portfolio and want to check availability for my date.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-primary"
            aria-label="Enquire on WhatsApp"
          >
            Enquire for Your Date →
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
            >
              ✕
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <span className="section-label">{selectedPhoto.category}</span>
              <h3 className="lightbox-title">{selectedPhoto.title}</h3>
              <p className="lightbox-desc">{selectedPhoto.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

