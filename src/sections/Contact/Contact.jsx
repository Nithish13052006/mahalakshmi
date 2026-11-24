import { useState } from 'react'
import { SITE, WHATSAPP_URL, buildEnquiryWhatsAppUrl } from '../../utils/constants'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    weddingDate: '',
    location: '',
    service: 'Wedding & Reception Photography',
    message: '',
  })
  const [formError, setFormError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formError) setFormError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setFormError('Please provide your name.')
      return
    }

    // Construct WhatsApp enquiry URL with URLSearchParams
    const targetUrl = buildEnquiryWhatsAppUrl(formData)

    // Open WhatsApp directly
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="contact-section" aria-label="Contact and Wedding Booking">
      <div className="container contact-container">
        {/* Left Column: Direct Contact & Luxury Information */}
        <div className="contact-info-col">
          <span className="section-label">Let&apos;s Create Something Timeless</span>

          <h2 className="section-title contact-title">
            Your Story <br />
            <em>Deserves to Be Told.</em>
          </h2>

          <p className="contact-lead">
            Planning your wedding? Let&apos;s talk about the moments you want us to capture. We welcome enquiries across Tamil Nadu and destination celebrations worldwide.
          </p>

          {/* Quick Direct WhatsApp CTAs */}
          <div className="contact-direct-actions">
            <a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary"
              aria-label="Book your wedding on WhatsApp"
            >
              Book Your Wedding ↗
            </a>
            <a
              href={WHATSAPP_URL('Hi Mahalakshmi Studio, I would like to chat with you about my upcoming celebration.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline"
              aria-label="Chat with us on WhatsApp"
            >
              Chat With Us on WhatsApp
            </a>
          </div>

          {/* Studio Details Card */}
          <div className="contact-details-list">
            <div className="contact-detail-row">
              <span className="detail-label">Studio</span>
              <span className="detail-val">{SITE.name}</span>
            </div>

            <div className="contact-detail-row">
              <span className="detail-label">Direct Phone</span>
              <a href={`tel:${SITE.phone}`} className="detail-val hover-gold">
                {SITE.phoneDisplay}
              </a>
            </div>

            <div className="contact-detail-row">
              <span className="detail-label">WhatsApp</span>
              <a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-val hover-gold"
              >
                {SITE.phoneDisplay} (Direct Instant Chat)
              </a>
            </div>

            <div className="contact-detail-row">
              <span className="detail-label">Instagram</span>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-val hover-gold"
              >
                {SITE.instagramHandle} ↗
              </a>
            </div>

            <div className="contact-detail-row">
              <span className="detail-label">Location</span>
              <span className="detail-val">{SITE.address}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Tailored WhatsApp Enquiry Form */}
        <div className="contact-form-col">
          <div className="contact-form-box">
            <div className="form-box-header">
              <h3 className="form-box-title">Check Date Availability</h3>
              <p className="form-box-subtitle">
                Fill in your details below and submit directly to our official WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="enquiry-form" noValidate>
              {formError && <div className="form-error-banner" role="alert">{formError}</div>}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Priyadarshini &amp; Karthik"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="weddingDate" className="form-label">
                    Wedding / Event Date
                  </label>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location" className="form-label">
                    Event Location / City
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g. Coimbatore, Chennai"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Wedding &amp; Reception Photography">Wedding &amp; Reception Photography</option>
                  <option value="Traditional Muhurtham Coverage">Traditional Muhurtham Coverage</option>
                  <option value="Candid Photography &amp; Film">Candid Photography &amp; Film</option>
                  <option value="Wedding Cinematography (4K Teasers &amp; Feature)">Wedding Cinematography (4K)</option>
                  <option value="Pre-Wedding Couple Session">Pre-Wedding Couple Session</option>
                  <option value="Complete Wedding Photography &amp; Film Package">Complete Photography &amp; Film Package</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Vision / Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about the ceremonies, venue, or special requests..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn-gold-primary form-submit-btn"
                aria-label="Send wedding enquiry via WhatsApp"
              >
                Send Enquiry via WhatsApp ↗
              </button>

              <p className="form-disclaimer">
                No spam. Clicking submit opens WhatsApp with your prefilled details directly to our studio team.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

