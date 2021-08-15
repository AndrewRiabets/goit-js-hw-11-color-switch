const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBTN: document.querySelector('[data-action="start"]'),
  stopBTN: document.querySelector('[data-action="stop"]'),
};
let colorID = null;

// Запускаем смену цвета фона и блокируем кнопку старт
refs.startBTN.addEventListener('click', changeColor)

function changeColor() {
  refs.startBTN.setAttribute('disabled', true);
  colorID = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);
  
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// 

//Останавливаем смену цвета фона и разблокируем кнопку старт 
refs.stopBTN.addEventListener('click', stopChangeColor);

function stopChangeColor() {
  refs.startBTN.removeAttribute('disabled');
  clearInterval(colorID);
};
// 