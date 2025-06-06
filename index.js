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


// variables
var wordToGuessEl = document.getElementById('word-to-guess')
var previousWordEl = document.getElementById('previous-word')
var incorrectLettersEl = document.getElementById('incorrect-letters')
var remainingGuessesEl = document.getElementById('remaining-guess')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')


var wins = 0
var losses = 0

var maxGuesses = 10

// starting the game
function wordStart() {
  var wordLength = wordStart.length;
  
}

// access user's keypress
document.onekeyup = function(e) {
  console.log(e.key) 
}



// select a word from words list at random
  var randomWord = words[Math.floor(Math.random() * words.length)];
  var selectedWord = words[randomIndex];
  console.log(selectedWord);

  // place in #word-to-guess element with letter replaced with underscores
    document.getElementById('wordToGuess').textContent = "_"

  // game should display ten remaining guesses in #remaining-guesses element


  // user presses a letter key code checks whether the letter is included in the word, if letter is included, replace underscores in displayed word with the instances of that letter
    if letter is included, then replace underscore with correct letter
  
    if (wordToGuess === )

  // if letter is not included, #word-to-guess element remains unchanged
  // an incorrectly-guessed letter should be added to #incorrect-letter element
  // #remaining-guess element will refelct one fewer remaining guesses
  // when user compeletes a word, count a win and display a 1 in #wins element
  // game proceeds to next randomly-chosen word and reset all elements
  // #previous-word will show last guessed word
