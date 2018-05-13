
// Words for our hangman game...
var wordChoice = ["dubbel", "stout", "porter", "gose", "hefeweizen", "tripel", "schwarzbier", "amber", "blonde", "bock"];

// Function that chooses random word
function randomWord() {
    return wordChoice[Math.floor(Math.random() * wordChoice.length)];
}

// Word chosen by computer...
var word = randomWord();


// Used letters...
var usedLetters = [];
var answerArray;

// Array for letters in randomly selected word...
function answer() {
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
}

answer();

// Guess left...
var guessesLeft = 10;

// Remaining letters to be guessed
var remainingLetters = word.length;


//This function takes a letter the user pressed...
console.log(word)
document.onkeyup = function (event) {
    // Stores it in the variable, switches to lower case...
    var userGuess = event.key.toLowerCase();
    document.getElementById("you-win").innerHTML = " ";
    document.getElementById("you-lose").innerHTML = " ";
    // Puts the letter in our usedLetters array...
    usedLetters.push(userGuess);

    // And displays the used letters on the page...
    if (word.indexOf(userGuess) == -1) {
        guessesLeft--;
    }
    else {
        for (var i = 0; i < word.length; i++) {
            if (userGuess == word.charAt(i)) {
                answerArray[i] = userGuess;
                remainingLetters--;
                console.log(remainingLetters);
            }

        }
    }

    if (remainingLetters == 0) {
        document.getElementById("you-win").innerHTML = "You win! Press any key to beer me!"
        word = randomWord();
        answer();
        console.log(word)
        guessesLeft = 10;
        usedLetters = [];
        remainingLetters = word.length;
    }

    if (guessesLeft == 0) {
        document.getElementById("you-lose").innerHTML = "You lost! Press any key to chug another!"
        word = randomWord();
        answer();
        console.log(word)
        guessesLeft = 10;
        usedLetters = [];
        remainingLetters = word.length;
    }


    document.getElementById("word").innerHTML = answerArray.join(" ");
    document.getElementById("guesses").innerHTML = usedLetters;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
}





























