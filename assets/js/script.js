var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","harry", "modulus", "object", "function", "bottle", "water"];

// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}
// CODE ABOVE THIS POINT IS COMPLETE, YOU ONLY NEED TO MAKE MODIFICATIONS AFTER THIS LINE
//------------------------------------------------------------------------------------------
//-------------------------------------STOP-------------------------------------------------
//------------------------------------------------------------------------------------------





// The winGame function is called when the win condition is met
// this should update the page with score and display you won!!
// also increase the winCounter which can be done with  ++ operator
function winGame() {
 // your code goes here
  setWins()
}







// The loseGame function is called when timer reaches 0
// this should update the page with score and display you lost!!
// also increase the loseCounter which can be done with  ++ operator
function loseGame() {
 // your code goes here
  setLosses()
}








// Updates win count on screen and sets win count to client storage/LOCAL STORAGE
function setWins() {
 // your code goes here
}







// Updates lose count on screen and sets lose count to client storage/LOCAL STORAGE
function setLosses() {
 // your code goes here
}








// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// this function checks the time and when time is 0, we check if the user has won or not
// if user has won we call winGame() otherwise loseGame()
// we can use setInterval within the startTimer function here like this
// timer=setInterval(function(){
//   timerCount--; // reduce the time by 1 second then add further logic here.
// },1000)
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    // your code goes here
  }, 1000);
}








// Creates blanks on screen
// aim of this function is to randomly pick a word from  ["variable","harry", "modulus", "object", "function", "bottle", "water"]
// then make a string with underscores => for example if word was water then this function should give 5 underscores. "_ _ _ _ _"
// UNDERSCORES SHOULD HAVE SPACES BETWEEN THEM BUT NO SPACE AFTER THE LAST UNDERSCORE
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
   // your code goes here

  // wordBlank.textContent = "STORE THOSE UNDERSCORES HERE"
}







// This functions are used by init
// Get stored WINCOUNT value from client storage, if it exists
// UPDATE THE PAGE AFTER TAKING THE VALUE
function getWins() {
  // your code goes here
  
  //Render win count to page
  win.textContent = "VALUE TAKEN from local storage";
}






// This functions are used by init
// Get stored loseCount value from client storage, if it exists
// UPDATE THE PAGE AFTER TAKING THE VALUE
function getlosses() {
  // your code goes here

  lose.textContent = "VALUE TAKEN from local storage";
}





// This function is complete so no code in this function
function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}




// Tests if guessed letter is in word and renders it to the screen.
// if the guessed letter is in the word, then we update the page and show that letter in the right place
// if word was WATER and user entered T then we want to update the screen and show -->  _ _ T _ _
function checkLetters(letter) {
  // your code goes here

  // so in the end you will have to update this variable
  wordBlank.textContent = "REPLACE THIS WITH YOUR CALCULATIONS"
}



//------------------------------------------------------------------------------------------
//-------------------------------------STOP-------------------------------------------------
//------------------------------------------------------------------------------------------

// code below this point is complete so no need to modify that but read it so you understand what is happening.

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  // Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
