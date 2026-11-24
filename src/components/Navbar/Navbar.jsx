import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const NAV_LINKS = ['Home', 'Our Stories', 'About', 'Contact']
const MOBILE_NAV_LINKS = ['Home', 'About', 'Our Stories', 'Services', 'Films', 'Contact']

const getHref = (label) => {
  if (label === 'Home') return '#'
  if (label === 'Films') return '#films'
  return `#${label.toLowerCase().replace(' ', '-')}`
}

export default function Navbar({ isHeroLoaded }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const brandRef = useRef(null)
  const linksRef = useRef(null)

  /* Animate nav in after hero loads */
  useEffect(() => {
    if (!isHeroLoaded) return
    const tl = gsap.timeline({ delay: 0.4 })
    tl.to(brandRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0)
      .to(linksRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.15)
  }, [isHeroLoaded])

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        {/* Brand */}
        <a href="#" className="navbar__brand" ref={brandRef} aria-label="Mahalakshmi Studio – Home">
          <span className="navbar__brand-name">Mahalakshmi Studio</span>
          <span className="navbar__brand-tagline">The Wedding Storytellers</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" ref={linksRef} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={getHref(link)}
                className="navbar__link"
                onClick={closeMenu}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {MOBILE_NAV_LINKS.map((link) => (
          <a
            key={link}
            href={getHref(link)}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            {link}
          </a>
        ))}
        <div className="navbar__mobile-divider" />
        <span className="navbar__mobile-brand">Mahalakshmi Studio</span>
      </div>
    </>
  )
}

