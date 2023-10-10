var inputElement = document.querySelector('input');
var resultElement = document.querySelector('p');
function calculateSum() {
  const num1 = Number(inputElement.value);
  let sum = 0;
  for (let i = num1; i <= num1 + 50; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  resultElement.textContent = 'Sum of even numbers from ' + num1 + ' to ' + (num1 + 50) + ' is ' + sum;
}
inputElement.addEventListener('input', calculateSum);
