let random = Math.floor(Math.random() * 100) + 1;

const number = document.querySelector('input');
const button = document.querySelector('button');
const guess = document.querySelector('#pre');
const message = document.querySelector('#message');
const remark = document.querySelector('#remark');
const label = document.querySelector('#label');
const reset = document.querySelector('#reset');

let guessCount = 1;
number.focus();

button.addEventListener('click', (e) => {
  let test = Number(number.value);

  if(number.value === '') {
    displayElement('inline', 0);
  } else if(isNaN(number.value)) {
    number.focus();
    if(guessCount > 1) {
      guessCount--
    }
  }else {
    displayElement('inline', number.value);
  }

  if(test === random) {
    displayContent('green', 'white', 'Congratulations! You got it right!', '');
    setGameOver();
  } else if(guessCount === 7) {
    displayContent('red', 'white', '!!!GAME OVER!!!', 'The number you are looking for is ' + random)
    setGameOver();
  } else if(!isNaN(number.value)) {
    displayContent('red', 'white', 'Wrong')
    if(test < random) {
      remark.textContent = 'Last guess was too Low!';
    } else if(test > random) {
      remark.textContent = 'Last guess was too High!';
    }
  }

  number.value = '';
  guessCount++;
  number.focus();
})

function displayElement(display, value) {
  label.style.display = display;
  guess.style.display = display;
  guess.textContent += value + ' ';
}

function displayContent(background, color, msg, rmk) {
  message.style.background = background;
  message.style.color = color;
  message.textContent = msg;
  remark.textContent = rmk;
}

function setGameOver() {
  number.disabled = true;
  button.disabled = true;
  reset.style.display = 'block';
  reset.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  number.disabled = false;
  button.disabled = false;
  label.style.display = 'none';
  guess.style.display = 'none';
  reset.style.display = 'none';
  guess.textContent = '';
  message.textContent = '';
  remark.textContent = '';
  number.focus();

  random = Math.floor(Math.random() * 100 + 1);
}