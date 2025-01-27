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
// const readline = require("node:readline/promises");
import readline from "node:readline";
console.log(
  "Welcome to Word Guess! You have 5 turns to guess the word. Please enter your first guess:"
);

// set up 3 constants for the 3 messages depend on the result for use later
const WRONG_GUESS = "Wrong guess! Try again:";
const AMZAING = "You got it! Amazing!";
const GAME_OVER = "You're out of turns, game over!";

// milstone 3
// get user input (crossed checked the readline doc from nodejs)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// set up totalAttempts to 5
let totalAttempts = 5;

// use while loop to keep track a
while (totalAttempts > 0) {
  // ask for user input
  const userInput = await rl.question("Enter your guess: ", (userInput) => {
    // check if user input is 4 letters
    if (userInput.length !== 4) {
      console.log("Invalid input. Please enter a 4-letter word.");
      return;
    }
  });

  // ensure that word is in the list and user didnt enter a number
  if (list.includes(userInput) || /\d/.test(userInput)) {
    console.log("Invalid input. Please enter a 4-letter word.");
    continue;
  }

  // check if the user's guess is correct
  // check guess word return boolnea value
  const isCorrect = checkGuessWord(userInput);

  // if true then return AMZAING and break the loop
  // if false then return WRONG_GUESS and decrement totalAttempts
  if (isCorrect) {
    console.log(AMZAING);
    break;
  } else {
    console.log(WRONG_GUESS);
    totalAttempts--;
  }

  // display word on how many attempts left
  console.log(`You have ${totalAttempts} attempts left.`);
}

// if totalAttempts is 0 then print GAME_OVER
if (totalAttempts === 0) {
  console.log(GAME_OVER);
}
