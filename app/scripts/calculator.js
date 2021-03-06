import * as calculatorUtils from './calculator-utils'

let screenExpression = []
const screenInput = document.getElementById('screen')

document.getElementById('calculator').addEventListener('click', event => {
  if (
    event.target.classList.contains('calculator__button--number') ||
    event.target.classList.contains('calculator__button--sign')
  ) {
    screenExpression = calculatorUtils.appendChar(
      screenExpression,
      event.target.innerHTML.trim()
    )
  }
  if (event.target.id === 'del') {
    screenExpression = calculatorUtils.del(screenExpression)
  }
  if (event.target.id === 'clear') {
    screenExpression = calculatorUtils.clear()
  }
  if (event.target.id === 'equal') {
    screenExpression = calculatorUtils.equal(screenExpression)
  }
  screenInput.value = calculatorUtils.displayScreen(screenExpression)
})
