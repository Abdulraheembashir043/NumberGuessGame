let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

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
    label.style.display = 'inline';
    guess.style.display = 'inline';
    guess.textContent += 0 + ' ';
  } else {
    label.style.display = 'inline';
    guess.style.display = 'inline';
    guess.textContent += number.value + ' ';
  }

  if(test === random) {
    message.textContent = 'Congratulations! You got it right!';
    message.style.background = 'green';
    message.style.color = 'white'
    setGameOver();
  } else if(guessCount === 10) {
    message.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    message.style.background = 'red';
    message.style.color = 'white';
    message.textContent = 'Wrong';
    if(test < random) {
        remark.textContent = 'Last guess was too Low!';
      } else if(test > random) {
        remark.textContent = 'Last guess was too High!';
      }
    }

  number.value = '';
  guessCount++;
})

function setGameOver() {
  number.disabled = true;
  button.disabled = true;

  reset.style.display = 'block';
  remark.textContent = '';

  reset.addEventListener('click', resetGame);
}

function resetGame() {

    guessCount = 1;

    number.disabled = false;
    button.disabled = false;
    
    label.style.display = 'none';
    guess.style.display = 'none';
    guess.textContent = '';
    reset.style.display = 'none';
    message.textContent = '';
    
    random = Math.floor(Math.random() * 100 + 1);
    console.log(random);

}