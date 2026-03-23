import type { ContactInfo } from './types.js'

export function renderContact(contact: ContactInfo): string {
  return `
  <div class="contact-tagline fade-up">${contact.cta}</div>
  <p class="contact-sub fade-up">${contact.availability}</p>
  <div class="contact-links fade-up">
    <a href="mailto:${contact.email}" class="contact-link">✉ ${contact.email}</a>
    <a href="${contact.linkedin}" class="contact-link" rel="noopener noreferrer">↗ LinkedIn</a>
    <a href="${contact.corporate}" class="contact-link" rel="noopener noreferrer">↗ ${contact.corporateName}</a>
  </div>
  <div class="contact-divider"></div>
  <div class="contact-corp fade-up">
    <a href="${contact.corporate}">${contact.corporateName}</a> — ${contact.location}
  </div>`
}

export function renderFooter(contact: ContactInfo): string {
  return `
  <span class="footer-text">${contact.footer.left.toUpperCase()}</span>
  <span class="footer-text">${contact.footer.right.toUpperCase()}</span>`
}