import '../styles/main.scss'
import documentReady from './document-ready'
import cookiesManagement from './cookies'
import scrollManagement from './scroll-management'
import signUp from './signup-form'
import questionnaire from './questionnaire'
import color from './color'
import calculator from './calculator'

documentReady(cookiesManagement
  ,scrollManagement
  ,questionnaire
  ,signUp
  ,color
  ,calculator
)