export interface SiteMeta {
  name: string
  title: string
  subtitle: string
  tagline: string
  location: string
  contact: { email: string; linkedin: string; corporate: string }
  stats: Array<{ value: string; label: string; accent: string }>
}

export interface TimelineEra {
  id: string
  date: string
  org: string
  role: string
  accent: string
  side: 'left' | 'right'
  body: string
  milestones: string[]
}

export interface Project {
  id: string
  index: string
  title: string
  outcome: string
  accent: string
  body: string
  tags: string[]
}

export interface Cert {
  id: string
  badge: string
  name: string
  issuer: string
  accent: string
}

export interface SkillDomain {
  id: string
  label: string
  accent: string
  skills: Array<{ name: string; primary: boolean }>
}

export interface LeadershipCard {
  id: string
  index: string
  title: string
  accent: string
  body: string
  tags: string[]
}
