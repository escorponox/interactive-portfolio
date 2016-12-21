import calculatorUtils from './calculator-utils'

const calculator = () => {

  let screenExpression = [];
  const screenInput = document.querySelector('#screen');

  document.querySelector('#calculator').addEventListener('click', function (event) {
    if (event.target.classList.contains('calculator__button--number')
      || event.target.classList.contains('calculator__button--sign')) {
      screenExpression = calculatorUtils.appendChar(screenExpression, event.target.innerHTML.trim());
    }
    if (event.target.id === 'del') {
      screenExpression = calculatorUtils.delete(screenExpression);
    }
    if (event.target.id === 'clear') {
      screenExpression = calculatorUtils.clear();
    }
    if (event.target.id === 'equal') {
      screenExpression = calculatorUtils.equal(screenExpression);
    }
    screenInput.value = calculatorUtils.displayScreen(screenExpression);
  });
};

export default calculator;
