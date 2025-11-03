let justEvaluated = false;

function appendValue(value) {
  const display = document.getElementById('display');

  // Clear display if a number is typed after evaluation
  if (justEvaluated && /[0-9.]/.test(value)) {
    display.value = '';
    justEvaluated = false;
  }

  if (value === '*') {
    display.value += '×';
  } else if (value === '/') {
    display.value += '÷';
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
  justEvaluated = false;
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
  justEvaluated = false;
}

function calculate() {
  const display = document.getElementById('display');
  let expression = display.value
    .replace(/×/g, '*')
    .replace(/÷/g, '/');

  try {
    const result = eval(expression);
    display.value = result;
    justEvaluated = true;
  } catch {
    display.value = 'Error';
    justEvaluated = false;
  }
}
