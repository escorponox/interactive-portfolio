import ajaxPromises from './ajax-promises';

export default () => {
  const newFactButton = document.getElementById('new-fact-button');

  const updateFact = (response) => {
    const numberFact = newFactButton.nextElementSibling;
    numberFact.classList.add('c-number-fact-container--hidden');
    setTimeout(() => {
      const words = response.split(' ');
      numberFact.firstElementChild.innerHTML = words.shift();
      numberFact.lastElementChild.innerHTML = words.join(' ');
      numberFact.classList.remove('c-number-fact-container--hidden');
    }, 500);
  };

  const getNewFact = () => {
    const number = Math.floor(Math.random() * 100);
    ajaxPromises(`http://numbersapi.com/${number}/trivia`)
      .then(updateFact);
  };

  getNewFact();
  newFactButton.addEventListener('click', getNewFact);
}
