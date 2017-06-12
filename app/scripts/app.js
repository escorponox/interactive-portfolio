import '../styles/main.scss'
import documentReady from './document-ready'
import cookiesManagement from './cookies'
import scrollManagement from './scroll-management'
import hashManagement from './hash-management'
import projectTemplate from './project-template'

documentReady(
  cookiesManagement,
  scrollManagement,
  hashManagement,
  projectTemplate
)
