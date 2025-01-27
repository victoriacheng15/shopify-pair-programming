// milstones 1
const list = [
  "able",
  "belt",
  "bolt",
  "cast",
  "cash",
  "knot",
  "note",
  "near",
  "over",
  "salt",
  "wind",
];

// use random() to pick random word form list
const randomWord = list[Math.floor(Math.random() * list.length)];

// implement equal check for random word and guessed word
function checkGuessWord(guessedWord) {
  return guessedWord === randomWord;
}

console.log(checkGuessWord("able"));

// milestone 2
const readline = require("node:readline/promises");
console.log(
  "Welcome to Word Guess! You have 5 turns to guess the word. Please enter your first guess:"
);

// set up 3 constants for the 3 messages depend on the result for use later
const WRONG_GUESS = "Wrong guess! Try again:";
const AMZAING = "You got it! Amazing!";
const GAME_OVER = "You're out of turns, game over!";
