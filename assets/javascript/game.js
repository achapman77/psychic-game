//Create array of choices for computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u" ,"v", "w", "x", "y", "z"]

//Create blank array to hold user guesses
var userGuessesArray = [];

//Create variables to hold number of wins, losses
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var evaluation = (wins/losses)*100;


//Create variables that reference places in the HTML to display things
var userGuessesText = document.getElementById("user-guesses-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
console.log(userGuessesText);

//Evaluate user guess by key event
document.onkeyup = function(event) {
    
    //Determines what key was pressed by user
    var userGuess = event.key;
    // TEST OK
    // console.log(userGuess);
    
    //Add user guess to userGuessesArray
    userGuessesArray.push(userGuess);
    //TEST OK
    // console.log(userGuessesArray);

    //Randomize computer guess 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // TEST OK
    // console.log(computerGuess);
    

    //Evaluate user vs. compter 
    if (userGuess === computerGuess) {
        wins++;
    } else {
        losses++;
        // TEST OK
        // alert("wrong");
    }

    //Display the user guesses and wins/losses/ties
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    userGuessesText.textContent = userGuessesArray.toString();
    

}

//Subtract 1 from guessesLeft
// for (var i = 10; i >=0, i-- ) {
//     guessesLeft--;
//     console.log(guessesLeft);
// }

//Reset game when guessesLeft = 0
function reset(userGuessesArray, wins, losses, guessesLeft, evaluation) {
    userGuessesArray = []
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    evaluation = 0;
}