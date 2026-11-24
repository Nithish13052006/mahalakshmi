import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Portfolio from './sections/Portfolio/Portfolio'
import Services from './sections/Services/Services'
import Films from './sections/Films/Films'
import Testimonials from './sections/Testimonials/Testimonials'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp'

function App() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  return (
    <div className="app">
      {/* Cinematic Navigation */}
      <Navbar isHeroLoaded={heroLoaded} />

      {/* Cinematic Hero (Preserved without modification) */}
      <Hero onLoaded={() => setHeroLoaded(true)} />

      {/* Main Website Sections */}
      <main id="main-content" aria-label="Main content">
        {/* Section 3: About Mahalakshmi Studio */}
        <About />

        {/* Section 4: Featured Wedding Stories (Portfolio) */}
        <Portfolio />

        {/* Section 5: What We Capture (Our Services) */}
        <Services />

        {/* Section 6: Wedding Films (Cinematography & Instagram Showcase) */}
        <Films />

        {/* Section 7: Kind Words (Client Testimonials) */}
        <Testimonials />

        {/* Section 8: Let's Create Something Timeless (Contact & WhatsApp Booking) */}
        <Contact />
      </main>

      {/* Section 9: Luxury Minimal Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
