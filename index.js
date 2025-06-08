var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]


// variables DOM elements
const wordToGuessEl = document.getElementById('word-to-guess');
const previousWordEl = document.getElementById('previous-word');
const incorrectLettersEl = document.getElementById('incorrect-letters');
const remainingGuessesEl = document.getElementById('remaining-guesses');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// game variables
var incorrectLetters = [];
var currentWord = '';
var displayWord = '';
var remainingGuesses = 10;
var incorrectLetters = [];
var wins = 0;
var losses = 0;
var previousWord;


// starting the game
function wordStart() {
  previousWordEl.textContent = previousWord;
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  displayWord = '_'.repeat(currentWord.length);
  incorrectLetters =[]
  remainingGuesses = 10;

}

//access user key function
document.onekeyup = function(e) {
  var key = e.key.toLowerCase();
  console.log(e.key)
  if (!wordToGuessEl.matches(!/^[a-z]$/)) return;
  if (displayedWord.includes(key) || incorrectLetters.includes(key)) return;

  if (currentWord.includes(key)) {
    
  } else {
    incorrectLetters.push(key);
    incorrectLettersEl.textContent = incorrectLetters.join('. ');
    remainingGuesses--;
    remainingGuessesEl.textContent = remainingGuesses;
  }
 
}


// access user's keypress
// select a word from words list at random
// place in #word-to-guess element with letter replaced with underscores
// game should display ten remaining guesses in #remaining-guesses element
// user presses a letter key code checks whether the letter is included in the word, if letter is included, replace underscores in displayed word with the instances of that letter
// if letter is not included, #word-to-guess element remains unchanged
// an incorrectly-guessed letter should be added to #incorrect-letter element
// #remaining-guess element will refelct one fewer remaining guesses
// when user compeletes a word, count a win and display a 1 in #wins element
// game proceeds to next randomly-chosen word and reset all elements
  // #previous-word will show last guessed word
