let currentNumber = 0;

const display = document.getElementById('displayNumber');
const image = document.getElementById('numberImage');
const colorPicker = document.getElementById('colorPicker');

function setNumber() {
  const input = document.getElementById('numberInput').value;
  currentNumber = parseInt(input) || 0;
  updateDisplay();
}

function changeNumber(amount) {
  currentNumber += amount;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentNumber;
  image.src = `${currentNumber}.png`; 
}

colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  display.style.color = selectedColor;

  
  image.style.filter = `drop-shadow(0 0 5px ${selectedColor}) saturate(1.5)`;
});
