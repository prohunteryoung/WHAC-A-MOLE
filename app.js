const squares = document.querySelectorAll('.square');
const score = document.getElementById('score');
const timeRemained = document.getElementById('time-left');
const startBtn = document.getElementById('start');
const settingBtn = document.getElementById('setting');

let randomSquare;

function mixSquare() {
  squares.forEach((e) => e.classList.remove('mole'));

  const randomNumber = Math.floor(Math.random() * squares.length);
  randomSquare = squares[randomNumber];
  randomSquare.classList.add('mole');
}

let scoreDisplay = 0;

function getPoint() {
  if (this.id == randomSquare.id) {
    scoreDisplay++;
    score.textContent = scoreDisplay;
  }
}

squares.forEach((e) => e.addEventListener('mousedown', getPoint));

let count = 5;
timeRemained.textContent = count;

let goal = 10;

function countDown() {
  count--;
  timeRemained.textContent = count;
  if (count === 0) {
    // alert('Time is up!');
    clearInterval(countInterval);
    clearInterval(randomSquareInterval);
    squares.forEach((e) => e.classList.remove('mole'));
    if (scoreDisplay >= goal) {
      alert('You won!');
      scoreDisplay = 'You won! 😊';
      score.textContent = scoreDisplay;
    } else {
      alert('You lost~');
      scoreDisplay = 'You Lost 😰';
      score.textContent = scoreDisplay;
    }
  }
}

startBtn.addEventListener('click', onStart);

let randomSquareInterval;
let countInterval;

function onStart() {
  randomSquareInterval = setInterval(mixSquare, 1000);
  countInterval = setInterval(countDown, 1000);
}

settingBtn.addEventListener('click', onSetting);

function onSetting() {
  const time = prompt('Time?', 10);
  count = time;
  timeRemained.textContent = count;
  goal = prompt('Minimum score?', 10);
}
