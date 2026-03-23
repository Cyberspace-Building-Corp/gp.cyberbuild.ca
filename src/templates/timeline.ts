import type { TimelineEra } from './types.js'

function renderMilestones(milestones: string[]): string {
  if (!milestones.length) return ''
  const items = milestones.map(m => `<li>${m}</li>`).join('')
  return `<ul class="era-milestones">${items}</ul>`
}

function renderEra(era: TimelineEra): string {
  const isRight = era.side === 'right'
  const contentBlock = `
    <div class="era-date">${era.date}</div>
    <div class="era-org">${era.org}</div>
    <div class="era-role">${era.role}</div>
    <div class="era-body">${era.body}</div>
    ${renderMilestones(era.milestones)}`

  const leftContent  = isRight ? '' : contentBlock
  const rightContent = isRight ? contentBlock : ''

  return `
  <div class="era ${isRight ? 'right' : ''}" style="--node-color: var(--${era.accent});" id="era-${era.id}">
    <div class="era-left">${leftContent}</div>
    <div class="era-center"><div class="era-node"></div><div class="era-line"></div></div>
    <div class="era-right">${rightContent}</div>
  </div>`
}

export function renderTimeline(eras: TimelineEra[]): string {
  return eras.map(renderEra).join('\n')
}
