
import {wordChoices} from "./secondary.js"

let result = 0;
let wordStorage = '';
let guesses = '';
let missStorage = '';
let word = document.querySelector('#word');
let guess = document.querySelector('#guess');
let misses = document.querySelector('#misses');
let man = document.querySelectorAll('.man-0');

function generateWordStorage() {
  wordStorage = wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

function generateGuessWord() {
  let guessWord = '';
  let isFinish = true;

  for (let i = 0; i < wordStorage.length; i++) {
    if (wordStorage[i] != ' ') {
      if (guesses.toUpperCase().indexOf(wordStorage[i].toUpperCase()) >= 0) {
        guessWord += wordStorage[i].toUpperCase() + '&nbsp;';
      }
      else {
        guessWord += '_&nbsp;';

        isFinish = false;
      }
    }
    else {
      guessWord += '&nbsp;&nbsp;';
    }
  }

  word.innerHTML = 'WORD: ' + guessWord;

  if (isFinish) {
    result = 1;
  }
}

function generateMisses() {
  let missedLetters = '';

  for (let i = 0; i < man.length; i++) {
    man[i].style.display = 'none';
  }

  for (let i = 0; i < missStorage.length; i++) {
    document.querySelector('.man-' + (i + 1)).style.display = 'block';

    missedLetters += missStorage[i] + ', ';
  }

  missedLetters = missedLetters.substring(0, missedLetters.length - 2);
  misses.innerHTML = 'MISSES: ' + missedLetters;

  if (missStorage.length >= 6) {
    result = 2;
  }
}

function initializeGame() {
  result = 0;
  wordStorage = '';
  guesses = '';
  missStorage = '';
  word.innerText = '';
  guess.value = '';
  misses.innerText = '';

  generateWordStorage();
  generateGuessWord();
  generateMisses();

  guess.disabled = false;
}

initializeGame();

guess.addEventListener('keypress', function (evt) {
  if (evt.keyCode === 13) {
    if (result === 0) {
      let getTime = setInterval(function () {
        if (wordStorage.toUpperCase().indexOf(guess.value.toUpperCase()) >= 0) {
          guesses += guess.value.toUpperCase();
        }
        else {
          if (missStorage.toUpperCase().indexOf(guess.value.toUpperCase()) < 0) {
            missStorage += guess.value.toUpperCase();
          }
        }

        guess.value = '';

        generateGuessWord();
        generateMisses();

        clearInterval(getTime);

        let getTime2 = setInterval(function () {
          if (result === 1) {
            guess.disabled = true;

            if (confirm('You won! You have ' + missStorage.length + ' miss(es). ' + 'Try again?')) {
              initializeGame();
            }
          }
          else if (result === 2) {
            guess.disabled = true;

            if (confirm('You lose! The answer is "' + wordStorage + '". Better luck next time!')) {
              initializeGame();
            }
          }

          clearInterval(getTime2);
        });
      }, 100);
    }
  }
});