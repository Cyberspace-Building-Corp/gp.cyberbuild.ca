import type { Project } from './types.js'

function renderProject(project: Project): string {
  const tags = project.tags.map(t => `<span class="p-tag">${t}</span>`).join('')
  return `
  <div class="project-card" style="--p-color: var(--${project.accent});" id="project-${project.id}">
    <div class="p-index">PROJECT // ${project.index}</div>
    <div class="p-title">${project.title}</div>
    <div class="p-outcome">${project.outcome}</div>
    <p class="p-body">${project.body}</p>
    <div class="p-tags">${tags}</div>
  </div>`
}

export function renderProjects(projects: Project[]): string {
  return projects.map(renderProject).join('\n')
}
