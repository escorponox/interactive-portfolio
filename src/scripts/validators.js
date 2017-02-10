export const isEmailAddress = input => {
  input = input || '';
  const atIndex = input.indexOf('@');
  return atIndex > 0 && atIndex < input.length - 1 && atIndex === input.lastIndexOf('@');
};

export const isPhoneNumber = input => {
  const cleanedInput = input.split('').filter(c => c != ' ').join('');
  const number = Number(cleanedInput);
  return cleanedInput.length === 9 ? number > 599999999 && number < 1000000000 : false;
};

export const isAlphanumericChar = c => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');

export const withoutSymbols = input => input.split('').filter(c => c === ' ' || isAlphanumericChar(c)).join('');

export const isDate = input => !isNaN(Date.parse(input));

export const isBeforeDate = (input, reference) => {
  const inputDate = Date.parse(input);
  const referenceDate = Date.parse(reference);
  if (isNaN(inputDate) || isNaN(referenceDate)) throw new Error('Error in dates: ' + input + ' - ' + reference);
  return inputDate < referenceDate;
};

export const isAfterDate = (input, reference) => !isBeforeDate(input, reference);

export const isBeforeToday = input => {
  const inputDate = Date.parse(input);
  if (isNaN(inputDate)) throw new Error('Error in date: ' + input);
  const today = new Date(new Date().toDateString());
  return inputDate < today;
};

export const isAfterToday = input => {
  const inputDate = Date.parse(input);
  if (isNaN(inputDate)) throw new Error('Error in date: ' + input);
  const today = new Date(new Date().toDateString());
  return inputDate > (new Date(today.getTime() + 86399999));
};

export const isEmpty = function (input) {
  if (input === null) return false;
  return input.split('').every(function (c) {
    return c === ' ';
  });
};

export const toLCWordArray = str => str.toLowerCase().split('').reduce((prev, curr) => {
  if (isAlphanumericChar(curr)) prev[prev.length - 1] += curr;
  else prev.push('');
  return prev;
}, ['']).filter(word => word.length > 0);

export const contains = (input, words) => {
  const inputLCWordArray = toLCWordArray(input);
  return words.some(word => inputLCWordArray.indexOf(word.toLowerCase()) > -1);
};

export const lacks = (input, words) => !contains(input, words);

export const isComposedOf = (input, strings) => strings
  .sort((a, b) => b.length - a.length)
  .reduce((prev, curr) => {
    while (prev.search(curr) > -1) {
      prev = prev.replace(curr, '')
    }
    return prev;
  }, input)
  .split('')
  .every(c => !isAlphanumericChar(c));

export const isOneOf = (input, strings) => strings.indexOf(input) > -1;

export const isLength = (input, n) => input.length <= n;

export const isOfLength = (input, n) => input.length >= n;

export const countWords = input => toLCWordArray(input).length;

export const lessWordsThan = (input, n) => countWords(input) <= n;

export const moreWordsThan = (input, n) => countWords(input) >= n;

export const isBetween = (input, floor, ceil) => input >= floor && input <= ceil;

export const isTime = input => {
  const split = input.split(':');
  return input.length !== 5 || input.indexOf(':') !== 2 ? false :
    split.length === 2 && isBetween(split[0], 0, 23) && isBetween(split[1], 0, 59);
};

export const isAlphanumeric = input => input.split('').every(isAlphanumericChar);

export const isCreditCard = input => {
  const splitInput = input.split('-');
  return splitInput.length === 1 ? isAlphanumeric(input) && input.length === 16 :
    splitInput.every((curr, index, arr) => arr.length === 4 && curr.length === 4 && isAlphanumeric(curr));
};

export const isCSV = input => isBetween(Number(input), 0, 999) && input.trim().length === 3;

export const isHexChar = c => (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F') || (c >= '0' && c <= '9');

export const isHex = input => {
  const splitInput = input.split('');
  return splitInput.shift() !== '#' ? false :
    splitInput.every(function (curr, index, arr) {
      return arr.length === 3 || arr.length === 6 && isHexChar(curr);
    });
};

export const isRGB = input => input
  .slice(0, 4) !== 'rgb(' || input.slice(input.length - 1) !== ')' ? false :
  input.slice(4, input.length - 2).split(',')
    .every((curr, index, arr) => arr.length === 3 && isBetween(Number(curr), 0, 255));

export const isHSL = input => {
  if (input.slice(0, 4) !== 'hsl(' || input.slice(input.length - 1) !== ')') return false;
  const values = input.slice(4, input.length - 2).split(',');
  return values.length === 3 && isBetween(values.shift(), 0, 360) ?
    isBetween(values.shift(), 0, 1) && isBetween(values.shift(), 0, 1) : false;
};

export const isColor = input => isHex(input) || isRGB(input) || isHSL(input);

export const isTrimmed = input => input[0] === ' ' || input[input.length - 1] === ' ' ? false :
  input.split('').every(function (curr, index, arr) {
    return curr !== ' ' || arr[index - 1] !== ' ';
  });

export const addValidation = (selector, events, showError, msg) => {
  Array.from(document.querySelectorAll(selector)).forEach(input => {
    events.forEach(event => {
      input.addEventListener(event, () => {
        if (showError(input)) {
          input.nextElementSibling.innerHTML = msg;
          input.setCustomValidity(msg);
        }
        else {
          input.setCustomValidity('');
        }
      });
    });
  })
};

export const addOK = function (selector, events, show) {
  Array.from(document.querySelectorAll(selector)).forEach(input => {
    events.forEach(event => {
      input.addEventListener(event, function () {
        input.previousElementSibling.style.display = show(input) ? 'inline-block' : 'none';
      });
    });
  });
};
