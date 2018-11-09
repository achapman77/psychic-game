//Create array of choices for computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u" ,"v", "w", "x", "y", "z"]

//Create blank array to hold user guesses for future display
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
var evaluationText = document.getElementById("evaluation-text");

//Evaluate user guess by key event
document.onkeyup = function(event) {
    
    //Determines what key was pressed by user
    var userGuess = event.key;
    // console.log(userGuess); // TEST OK
    
    //Add user guess to userGuessesArray
    userGuessesArray.push(userGuess);
    // console.log(userGuessesArray); //TEST OK

    //Randomize computer guess 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // console.log(computerGuess); //TEST OK
    

    //Evaluate user vs. compter 
    if (userGuess === computerGuess) {
        wins++;
    } else {
        losses++;
        // alert("wrong"); //TEST OK
    }

    //Display the user guesses and wins/losses/ties
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    userGuessesText.textContent = userGuessesArray.toString();
    
    //Evaluate user psychic ability
    if (evaluation <= 30) {
        evaluationText.textContent = evaluation + "% psychic ability. " + "Most monkeys are smarter than you.";
    
    } else if (evaluation <= 60) {
        evaluationText.textContent = evaluation + "% psychic ability. " + "Meh...Pure coincidence.";
        
    } else {
        evaluationText.textContent = evaluation + "% psychic ability. " + "Please report to the NSA immediately!";
    }
}

//Subtract 1 from guessesLeft
for (var i = 10; i >=0, i-- ) {
    guessesLeft--;
    console.log(guessesLeft);
}

//Reset game when guessesLeft = 0
function reset(userGuessesArray, wins, losses, guessesLeft, evaluation) {
    userGuessesArray = []
    wins = 0;
    losses = 0;
    guessesLeft = 10;
    evaluation = 0;
}