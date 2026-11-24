// ============================================
// MAHALAKSHMI STUDIO — Site Constants
// ============================================

export const SITE = {
  name: 'Mahalakshmi Studio',
  tagline: 'The Wedding Storytellers',
  phone: '+91 9842179105',
  phoneDisplay: '+91 98421 79105',
  whatsappNumber: '919842179105',
  email: 'info@mahalakshmistudio.com',
  instagram: 'https://www.instagram.com/mahalakshmi_studio.in/',
  instagramHandle: '@mahalakshmi_studio.in',
  address: 'Tamil Nadu, India',
  establishedYear: '2014',
  footerTagline: 'We Build Relationships, Not Just Clients.',
}

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hi Mahalakshmi Studio, I would like to enquire about your wedding photography services.'

export const WHATSAPP_URL = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`

/**
 * Builds a dynamic WhatsApp URL from an enquiry form
 */
export const buildEnquiryWhatsAppUrl = ({ name, weddingDate, location, service, message }) => {
  const lines = [
    `Hi Mahalakshmi Studio, I would like to enquire about your wedding photography services.`,
    name ? `\n• Name: ${name}` : '',
    weddingDate ? `\n• Wedding Date: ${weddingDate}` : '',
    location ? `\n• Event Location: ${location}` : '',
    service ? `\n• Service Interested In: ${service}` : '',
    message ? `\n• Details / Vision: ${message}` : '',
  ].filter(Boolean)

  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines.join(''))}`
}
