function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const background = document.body;

startButton.addEventListener('click', () => {
  const changeContinue = setInterval(changeColor, 1000);
});

function changeColor() {
  const color = getRandomHexColor();
  background.style.backgroundColor = color;
  startButton.disabled = true;
}

stopButton.addEventListener('click', stopChange);

function stopChange() {
  console.log('Stop Button has been clicked');
  clearInterval(changeContinue);
  startButton.disabled = false;
}
