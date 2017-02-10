import cookiesManagement from './cookies';
import scrollManagement from './scroll-management';
import signUp from './signup-form';
import questionnaire from './questionnaire';
import color from './color';
import calculator from './calculator';
import documentReady from './document-ready';

documentReady(cookiesManagement);
documentReady(questionnaire);
documentReady(signUp);
documentReady(color);
documentReady(calculator);
documentReady(scrollManagement);
