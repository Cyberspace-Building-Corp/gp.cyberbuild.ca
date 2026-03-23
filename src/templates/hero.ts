import type { SiteMeta } from './types.js'

export function renderHero(site: SiteMeta): string {
  const stats = site.stats.map(s => `
    <div class="stat-card ${s.accent !== 'cyan' ? s.accent : ''}">
      <span class="stat-number">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>`).join('')

  return `
  <div class="hero-portrait-wrap">
    <div>
      <div class="portrait-hex">
        <img src="/portrait.png" alt="${site.name} — painterly portrait" width="320" height="320" />
      </div>
      <div class="portrait-stats">
        ${stats}
      </div>
    </div>
  </div>`
}

export function renderHeroText(site: SiteMeta): string {
  return `
  <div class="eyebrow">${site.title}</div>
  <h1>${site.name.split(' ')[0]}<br><span class="last">${site.name.split(' ').slice(1).join(' ')}</span></h1>
  <div class="hero-title">${site.subtitle}</div>
  <p class="hero-desc">${site.tagline}</p>
  <div class="hero-actions">
    <a href="#timeline" class="btn-primary">Career Timeline ↓</a>
    <a href="#contact" class="btn-secondary">Get in Touch</a>
  </div>`
}
