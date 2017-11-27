var inquirer = require("inquirer");
var wordsAvailable = require("./word.js");


var randomWord = wordsAvailable[Math.floor(Math.random() * 11) + 1];

function Word(word, length) {
    this.word = word;
    this.length = length;
}

function Guess(guess) {
    this.guess = guess;
}

        var chosenWord = new Word(randomWord, randomWord.length);
        var chosenWordArr = chosenWord.word.split('');
    
        var guesses = [];
        var wordBuild = [];
        var guessesLeft = 0;

        for (let i=0;chosenWord.length>i;i++) {
            wordBuild.push(" _ ");
        };
        
        function runGame(){

        if (wordBuild.join("") === chosenWord.word) {
            console.log("Congratulations! You have defeated me");
        }
        else {

        inquirer.prompt([
            {
              name: "guess",
              message: "Guess a Letter!"
            }]).then(function(answers) {
                var guess = new Guess(answers);

            for (let i=0;chosenWordArr.length>i;i++) {
                if(guess.guess.guess === chosenWordArr[i]) {
                    wordBuild[i] = guess.guess.guess;
                    console.log("CORRECT!")
                }
            }
            console.log("Word to Guess " + wordBuild.join(""));
            console.log("Guesses Left:" + (chosenWord.length-guessesLeft));
        

        if (guessesLeft<chosenWord.length) {
            
            guessesLeft++;
            guesses.push(guess.guess.guess);
            console.log("Guessed Letters " + guesses);
            runGame();
            
        }
        else {
            console.log("Game Over");
            console.log("Word was " + chosenWord.word);
        
        };
        
    });
    }    
    };
    runGame();

