import { defineConfig, type Plugin } from 'vite'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Templates run at build time in Node context — import directly
import { renderHero, renderHeroText } from './src/templates/hero.js'
import { renderTimeline }             from './src/templates/timeline.js'
import { renderProjects }             from './src/templates/projects.js'
import { renderCerts, renderSkillDomains } from './src/templates/skills.js'
import { renderLeadership }           from './src/templates/leadership.js'
import { renderContact, renderFooter }     from './src/templates/contact.js'

import type { SiteMeta, TimelineEra, Project, Cert, SkillDomain, LeadershipCard, ContactInfo } from './src/templates/types.js'

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(resolve(__dirname, path), 'utf8')) as T
}

function contentInjectionPlugin(): Plugin {
  return {
    name: 'content-injection',
    transformIndexHtml: {
      enforce: 'pre',
      transform(html: string): string {
        const site       = readJson<SiteMeta>('content/site.json')
        const contact    = readJson<ContactInfo>('content/contact.json')
        const timeline   = readJson<TimelineEra[]>('content/timeline.json')
        const projects   = readJson<Project[]>('content/projects.json')
        const certs      = readJson<Cert[]>('content/certs.json')
        const skills     = readJson<SkillDomain[]>('content/skills.json')
        const leadership = readJson<LeadershipCard[]>('content/leadership.json')

        return html
          .replace('<!-- inject:meta-title -->', site.name)
          .replace('<!-- inject:hero-text -->', renderHeroText(site))
          .replace('<!-- inject:hero-portrait -->', renderHero(site))
          .replace('<!-- inject:timeline -->', renderTimeline(timeline))
          .replace('<!-- inject:projects -->', renderProjects(projects))
          .replace('<!-- inject:certs -->', renderCerts(certs))
          .replace('<!-- inject:skills -->', renderSkillDomains(skills))
          .replace('<!-- inject:leadership -->', renderLeadership(leadership))
          .replace('<!-- inject:contact -->', renderContact(contact))
          .replace('<!-- inject:footer -->', renderFooter(contact))
      }
    }
  }
}

export default defineConfig({
  plugins: [contentInjectionPlugin()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Inline small assets; portrait is large so it stays as a file in public/
    assetsInlineLimit: 4096,
  }
})