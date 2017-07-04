import template from '../templates/project-content.hbs'
import ajax from './ajax-promises'

const loadProject = event => {
  const labelFor = event.target.getAttribute('for')
  const tabProject = document.querySelector(
    'label.accordion-label[for=' + labelFor + ']'
  ).nextElementSibling

  if (tabProject.classList.contains('vertical-tab__content__project--empty')) {
    let projectScript = ''
    ajax(`data/${labelFor}.json`)
      .then(data => JSON.parse(data))
      .then(data => {
        if (data.script) {
          projectScript = data.script
        }
        return template(data)
      })
      .then(data => {
        tabProject.insertAdjacentHTML('beforeend', data)
        requestAnimationFrame(() => {
          tabProject.classList.remove('vertical-tab__content__project--empty')
        })
      })
      .then(() => {
        if (projectScript) {
          const scriptTag = document.createElement('script')
          scriptTag.charset = 'utf-8'
          scriptTag.type = 'text/javascript'
          scriptTag.src = projectScript
          document.getElementsByTagName('head')[0].appendChild(scriptTag)
        }
      })
      .catch(err => console.error('Error retrieving project data:', err))
  }
}

export default () => {
  Array.from(document.querySelectorAll('.js-project-label')).forEach(label => {
    label.addEventListener('click', loadProject)
  })
}
