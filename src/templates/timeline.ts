import type { TimelineEra } from './types.js'

function renderMilestones(milestones: string[]): string {
  if (!milestones.length) return ''
  const items = milestones.map(m => `<li>${m}</li>`).join('')
  return `<ul class="era-milestones">${items}</ul>`
}

function renderEra(era: TimelineEra): string {
  return `
  <div class="era" style="--node-color: var(--${era.accent});" id="era-${era.id}">
    <div class="era-meta">
      <div class="era-date">${era.date}</div>
      <div class="era-org">${era.org}</div>
      <div class="era-role">${era.role}</div>
    </div>
    <div class="era-center"><div class="era-node"></div><div class="era-line"></div></div>
    <div class="era-body">${era.body}</div>
    <div class="era-milestones-col">${renderMilestones(era.milestones)}</div>
  </div>`
}

export function renderTimeline(eras: TimelineEra[]): string {
  return eras.map(renderEra).join('\n')
}