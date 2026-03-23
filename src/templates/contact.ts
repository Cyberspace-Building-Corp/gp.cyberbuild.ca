import type { SiteMeta } from './types.js'

export function renderContact(site: SiteMeta): string {
  return `
  <div class="contact-tagline fade-up">Ready to work together?</div>
  <p class="contact-sub fade-up">Available for contract and permanent engagements in database architecture, data engineering, cloud infrastructure, and full-stack development.</p>
  <div class="contact-links fade-up">
    <a href="mailto:${site.contact.email}" class="contact-link">✉ ${site.contact.email}</a>
    <a href="${site.contact.linkedin}" class="contact-link" rel="noopener noreferrer">↗ LinkedIn</a>
    <a href="${site.contact.corporate}" class="contact-link" rel="noopener noreferrer">↗ cyberbuild.ca</a>
  </div>
  <div class="contact-divider"></div>
  <div class="contact-corp fade-up">
    <a href="${site.contact.corporate}">${site.name.split(' ')[0] === 'Greg' ? 'Cyberspace Building Corp.' : ''}</a> — ${site.location}
  </div>`
}
