const colorForm = () => {
  const buildColor = ranges => ranges.reduce((prev, curr, index, array) => {
    const sufix = index === array.length - 1 ? ')' : ',';
    prev += curr.value + sufix;
    return prev;
  }, 'rgba(');

  const ranges = Array.from(document.querySelectorAll('.input-range-coves'));
  const output = document.getElementById('color');

  let color = buildColor(ranges);
  output.style.backgroundColor = color;
  output.innerHTML = color;

  ranges.forEach((input, index, arr) => {
    input.nextElementSibling.innerHTML = input.value;
    input.addEventListener('input', function (event) {
      event.target.nextElementSibling.innerHTML = event.target.value;
      color = buildColor(arr);
      output.style.backgroundColor = color;
      output.innerHTML = color;
    });
  });
};

export default colorForm;
