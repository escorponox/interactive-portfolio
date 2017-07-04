import '../styles/main.scss'
import documentReady from './document-ready'
import cookiesManagement from './cookies'
import scrollManagement from './scroll-management'
import projectTemplate from './project-template'

documentReady(
  cookiesManagement,
  scrollManagement,
  projectTemplate
)
