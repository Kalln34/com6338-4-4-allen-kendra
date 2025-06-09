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
var wins = 0;
var losses = 0;
var previousWord = '';


// starting the game
function wordStart() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  displayWord = Array(currentWord.length).fill('_');
  incorrectLetters =[]
  remainingGuesses = 10;
  wordToGuessEl.textContent = displayWord.join('');
  incorrectLettersEl.textContent = '';
  remainingGuessesEl.textContent = remainingGuesses;
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
}
wordStart();


//access user key function
document.onkeyup = function(e) {
  var letter = e.key.toLowerCase();
  if (!letter.match(/^[a-z]$/)) return;

  if (displayWord.includes(letter) || incorrectLetters.includes(letter)) return;

  if (currentWord.includes(letter)) {
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === letter) {
        displayWord[i] = letter;
      }
    }
    wordToGuessEl.textContent = displayWord.join('');
    
    if (!displayWord.includes('_')) {
      wins++;
      winsEl.textContent = wins;
      previousWordEl.textContent = currentWord;
      wordStart();

    }
    } else {
      incorrectLetters.push(letter);
      incorrectLettersEl.textContent = incorrectLetters.join(',');
      remainingGuesses--;
      remainingGuessesEl.textContent = remainingGuesses;

      if (remainingGuesses === 0) {
        losses++;
        lossesEl.textContent = losses;
        previousWordEl.textContent = currentWord;
        wordStart();
      }
    }

  }



// access user's keypress - with onekeyup function
// select a word from words list at random - with randomindex?
// place in #word-to-guess element with letter replaced with underscores 
// game should display ten remaining guesses in #remaining-guesses element - with textContent code? 
// user presses a letter key code checks whether the letter is included in the word, if letter is included, replace underscores in displayed word with the instances of that letter
// if letter is not included, #word-to-guess element remains unchanged
// an incorrectly-guessed letter should be added to #incorrect-letter element - added code for else = added with .push and .join
// #remaining-guess element will refelct one fewer remaining guesses = code - losses++
// when user compeletes a word, count a win and display a 1 in #wins element = code - wins++
// game proceeds to next randomly-chosen word and reset all elements
  // #previous-word will show last guessed word
