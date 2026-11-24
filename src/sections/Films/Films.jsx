import { useState } from 'react'
import { SITE, WHATSAPP_URL } from '../../utils/constants'
import './Films.css'

// Curated wedding films & reel highlights from Mahalakshmi Studio
const FEATURED_FILMS = [
  {
    id: 'film-1',
    title: 'The Kongu Procession Heritage Film',
    couple: 'Mano & Subashini',
    type: 'Wedding Teaser Film',
    duration: '01:45',
    thumbnail: '/images/story-kongu-wedding.webp',
    reelUrl: 'https://www.instagram.com/mahalakshmi_studio.in/reels/',
    description: 'A celebration of deep-rooted Kongu Nadu tradition, the thunderous beats of the nadaswaram, and pure bridal joy.',
  },
  {
    id: 'film-2',
    title: 'Sacred Muhurtham & Akshata Moments',
    couple: 'Prem & Kaviya',
    type: 'Ceremony Film',
    duration: '02:10',
    thumbnail: '/images/story-muhurtham-ceremony.webp',
    reelUrl: 'https://www.instagram.com/mahalakshmi_studio.in/reels/',
    description: 'The sacred mantras, the shower of golden akshata, and tears of family blessing captured in high-definition cinematography.',
  },
  {
    id: 'film-3',
    title: 'Mist, Love & Mountains Pre-Wedding',
    couple: 'Ashwin & Sneha',
    type: 'Pre-Wedding Cinema',
    duration: '01:30',
    thumbnail: '/images/mahalakshmi-prewedding-02.webp',
    reelUrl: 'https://www.instagram.com/mahalakshmi_studio.in/reels/',
    description: 'Dawn in the misty Western Ghats — an ethereal cinematic symphony of movement, mountain breeze, and devotion.',
  },
]

export default function Films() {
  const [activeFilm, setActiveFilm] = useState(FEATURED_FILMS[0])
  const [embedLoaded, setEmbedLoaded] = useState(false)

  return (
    <section id="films" className="films-section" aria-label="Wedding Films">
      <div className="container">
        {/* Header */}
        <div className="films-header">
          <span className="section-label">The Wedding Films</span>
          <h2 className="section-title">
            Moments Worth <br />
            <em>Reliving.</em>
          </h2>
          <p className="section-subtitle">
            Every emotion has a story. Experience ours through the lens. Crafted with cinematic depth, authentic live audio, and timeless color grading.
          </p>
        </div>

        {/* Cinematic Video Showcase Layout */}
        <div className="films-showcase-grid">
          {/* Main Visual Cinema Player Card */}
          <div className="films-main-player">
            <div className="player-aspect-wrapper">
              <img
                src={activeFilm.thumbnail}
                alt={`${activeFilm.title} - ${activeFilm.couple}`}
                className="player-poster-img"
              />
              <div className="player-overlay-gradient" />

              <div className="player-details">
                <span className="player-badge">{activeFilm.type} • {activeFilm.duration}</span>
                <h3 className="player-title">{activeFilm.title}</h3>
                <p className="player-couple">{activeFilm.couple}</p>
                <p className="player-desc">{activeFilm.description}</p>

                <div className="player-action-row">
                  <a
                    href={activeFilm.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-primary"
                    aria-label={`Watch ${activeFilm.title} on Instagram`}
                  >
                    Watch on Instagram ↗
                  </a>
                  <a
                    href={WHATSAPP_URL(`Hi Mahalakshmi Studio, I loved your wedding film "${activeFilm.title}" and would love to enquire about cinema packages for our wedding.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-outline"
                    aria-label="Enquire for wedding cinema"
                  >
                    Enquire for Cinema →
                  </a>
                </div>
              </div>

              {/* Instagram Audio / Profile Watermark */}
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-brand-pill"
                aria-label="Follow Mahalakshmi Studio on Instagram"
              >
                <span className="ig-dot" />
                <span>{SITE.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Side Reel Queue / Selection */}
          <div className="films-queue">
            <h4 className="queue-heading">Featured Films &amp; Teasers</h4>
            <div className="queue-list" role="list">
              {FEATURED_FILMS.map((film) => (
                <div
                  key={film.id}
                  className={`queue-item ${activeFilm.id === film.id ? 'active' : ''}`}
                  onClick={() => setActiveFilm(film)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveFilm(film)}
                  aria-label={`Select film ${film.title}`}
                >
                  <div className="queue-thumb-wrap">
                    <img src={film.thumbnail} alt={film.title} className="queue-thumb-img" />
                    <span className="queue-play-mini">▶</span>
                  </div>
                  <div className="queue-info">
                    <span className="queue-type">{film.type}</span>
                    <h5 className="queue-title">{film.title}</h5>
                    <span className="queue-couple">{film.couple}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Instagram Profile Banner */}
            <div className="instagram-official-box">
              <div className="ig-box-header">
                <span className="ig-logo-text">Instagram</span>
                <span className="ig-verified-badge">Official Reel Channel</span>
              </div>
              <p className="ig-box-text">
                Follow our official feed for weekly 4K wedding reels, behind-the-scenes cinematography, and candid highlights.
              </p>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link-gold"
              >
                Visit @mahalakshmi_studio.in ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

