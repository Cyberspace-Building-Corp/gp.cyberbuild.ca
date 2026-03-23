import type { LeadershipCard } from './types.js'

function renderCard(card: LeadershipCard): string {
  const tags = card.tags.map(t => `<span class="p-tag">${t}</span>`).join('')
  return `
  <div class="project-card fade-up" style="--p-color: var(--${card.accent}); cursor: default;" id="leadership-${card.id}">
    <div class="p-index">LEADERSHIP // ${card.index}</div>
    <div class="p-title">${card.title}</div>
    <p class="p-body">${card.body}</p>
    <div class="p-tags">${tags}</div>
  </div>`
}

export function renderLeadership(cards: LeadershipCard[]): string {
  return cards.map(renderCard).join('\n')
}
