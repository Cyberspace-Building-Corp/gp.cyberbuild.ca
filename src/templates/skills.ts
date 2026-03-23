import type { Cert, SkillDomain } from './types.js'

function renderCert(cert: Cert): string {
  const badgeLines = cert.badge.split('\n').join('<br>')
  return `
  <div class="cert-item" style="--cert-color: var(--${cert.accent});" id="cert-${cert.id}">
    <div class="cert-badge">${badgeLines}</div>
    <div>
      <div class="cert-name">${cert.name}</div>
      <div class="cert-issuer">${cert.issuer}</div>
    </div>
  </div>`
}

function renderDomain(domain: SkillDomain): string {
  const tags = domain.skills.map(s =>
    `<span class="skill-tag${s.primary ? ' primary' : ''}">${s.name}</span>`
  ).join('')
  return `
  <div class="domain" style="--d-color: var(--${domain.accent});" id="domain-${domain.id}">
    <div class="domain-label">${domain.label}</div>
    <div class="skill-tags">${tags}</div>
  </div>`
}

export function renderCerts(certs: Cert[]): string {
  return certs.map(renderCert).join('\n')
}

export function renderSkillDomains(domains: SkillDomain[]): string {
  return domains.map(renderDomain).join('\n')
}
