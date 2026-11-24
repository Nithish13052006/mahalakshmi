import { SITE, WHATSAPP_URL } from '../../utils/constants'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section" role="contentinfo" aria-label="Studio Footer">
      <div className="container footer-container">
        {/* Top Tier: Brand Statement */}
        <div className="footer-top-tier">
          <div className="footer-brand-wrap">
            <h2 className="footer-brand-title">{SITE.name}</h2>
            <span className="footer-brand-tagline">{SITE.tagline}</span>
            <p className="footer-mantra">
              &ldquo;{SITE.footerTagline}&rdquo;
            </p>
          </div>

          <div className="footer-action-wrap">
            <a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary"
              aria-label="Book on WhatsApp"
            >
              Enquire on WhatsApp ↗
            </a>
          </div>
        </div>

        {/* Middle Tier: Navigation & Contact Links */}
        <div className="footer-mid-tier">
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop() }}>
                  Home
                </a>
              </li>
              <li><a href="#about">About</a></li>
              <li><a href="#our-stories">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#films">Wedding Films</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-nav-list">
              <li>
                <a href={`tel:${SITE.phone}`} className="footer-contact-link">
                  Direct: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  Instagram: {SITE.instagramHandle} ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Location</h4>
            <p className="footer-col-text">
              {SITE.address}
            </p>
            <p className="footer-col-text-muted">
              Documenting weddings across Tamil Nadu, Kerala, Bangalore and worldwide destinations.
            </p>
          </div>
        </div>

        {/* Bottom Tier: Minimal Copyright & Back to Top */}
        <div className="footer-bottom-tier">
          <p className="footer-copyright">
            &copy; {currentYear} {SITE.name}. All Rights Reserved. Crafted with cinematic devotion.
          </p>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <span className="top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

