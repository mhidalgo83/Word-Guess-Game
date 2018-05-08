 
 // The player starts with 10 guesses...
var userGuess = 10;

// Words for our hangman game.
var wordChoice = ["radagast", "frodo", "legolas", "gimli", "gandalf", "merry", "samwise", "rivendell", "elrond", "aragorn",
    "pippin", "eowyn", "gollum", "boromir", "faramir"];

// Function for choosing our random word from list above.
function randomWord () {
    wordChoice[Math.floor(Math.random() * wordChoice.length)];
}

// Array for letters in randomly selected word.
var answerArray = [];
for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
}

// Determines how many letters are left in our word.
var remainingLetters = randomWord.length;

//
while (remainingLetters > 0) {
    event.onkeypress //any letter//{
        if //Char === letter in word, run function wins//
        else //subtract 1 from userGuess total{
            if //userGuess = 0, end game
            else //continue game
        }
    }
    }
    //Game code
    //Take input from player
    //Track used letters
    //
    //If true, update answerArray and remainingLetters for every correct guess, else decrease userGuess counter
}