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
