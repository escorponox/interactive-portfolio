export default () => {
  const newFactButton = document.getElementById('new-fact-button');
  newFactButton.addEventListener('click', getNewFact);

  getNewFact();

  function getNewFact() {
    const xhr = new XMLHttpRequest();

    const number = Math.floor(Math.random() * 100);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const numberFact = newFactButton.nextElementSibling;
        numberFact.classList.add('c-number-fact-container--hidden');
        setTimeout(function() {
          const words = xhr.response.split(' ');
          numberFact.firstElementChild.innerHTML = words.shift();
          numberFact.lastElementChild.innerHTML = words.join(' ');
          numberFact.classList.remove('c-number-fact-container--hidden');
        }, 500);
      }
    };

    xhr.open('GET', `http://numbersapi.com/${number}/trivia`);
    xhr.send();
  }
}
