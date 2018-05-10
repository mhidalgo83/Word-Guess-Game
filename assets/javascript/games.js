// VARIABLES

//===========================================================

// Words for our hangman game...
var wordChoice = ["dubbel", "stout", "porter", "gose", "hefeweizen"];

// Word chosen by computer...
var word = wordChoice[Math.floor(Math.random() * wordChoice.length)];

// Used letters...
var usedLetters = [];

// Used words...
var usedWords = [];

// Array for letters in randomly selected word...
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
// Guess left...
var guessesLeft = 10;

// Remaining letters to be guessed
var remainingLetters = word.length;

// FUNCTIONS

//============================================================

// This function chooses our word...
function randomWord() {
    return wordChoice[Math.floor(Math.random() * wordChoice.length)];
}
// This displays our word as underscored blank spaces...
document.getElementById("word").innerHTML = answerArray.join(" ");

//This function takes a letter the user pressed...
document.onkeyup = function guess(event) {
    // Stores it in the variable, switches to lower case...
    var userGuess = event.key.toLowerCase();
    // Puts the letter in our usedLetters array...
    usedLetters.push(userGuess);
    // And displays the used letters on the page...
    document.getElementById("guesses").innerHTML = usedLetters;
}

// Take the userGuess, compare it to the answerArray, and see if the letter matches...   should I use indexOf or charAt??

    // put letter into answerArray
    // ???
    // else 
    // reduce guesseLeft --1;

// }

// Guessed letter






// Computer choice...






// Display remaining letters to be guessed using length of word










// document.getElementById("#word").innerHTML = word;

// The player starts with 10 guesses...
// var userGuess = 10;



// Determines how many letters are left in our word.
// var remainingLetters = randomWord.length;



//


















// Function to update userGuess if guess is incorrect...
// function updateGuesses () {
//     document.getElementById("#guesses").innerHTML = "Guesses left:" + userGuess;
// };




// Function to add underscored spaces in place of characters in random word...
