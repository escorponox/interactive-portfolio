(function (document) {

  function documentReady(cb) {
    document.readyState === "interactive" || document.readyState === "complete" ? cb() : document.addEventListener("DOMContentLoaded", cb);
  }

  documentReady(function () {

    document.screenExpression = [];
    const screenInput = document.querySelector('#screen');

    document.querySelector('#calculator').addEventListener('click', function (event) {
      if (event.target.classList.contains('calculator__button--number')
        || event.target.classList.contains('calculator__button--sign')) {
        document.screenExpression = calculator.appendChar(document.screenExpression, event.target.innerHTML.trim());
      }
      if (event.target.id === 'del') {
        document.screenExpression = calculator.delete(document.screenExpression);
      }
      if (event.target.id === 'clear') {
        document.screenExpression = calculator.clear();
      }
      if (event.target.id === 'equal') {
        document.screenExpression = calculator.equal(document.screenExpression);
      }
      screenInput.value = calculator.displayScreen(document.screenExpression);
    });
  });
})(document);
