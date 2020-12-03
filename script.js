//getting all the ids from the HTML to be used later//
var timerEl = document.getElementById("timerEl");
var titleHeading = document.getElementById("titleHeading");
var questionHeading = document.getElementById("questionHeading");
var welcomeP = document.getElementById("welcomeP");
var theBtn = document.getElementById("theBtn");
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var optionThree = document.getElementById("optionThree");
var optionFour = document.getElementById("optionFour");

//creating the timer/countdown to be displayed through quiz//
var countdownTimer = 90;

function timerCountdown() {
  var timerInterval = setInterval(function() {
    countdownTimer--;
    timerEl.textContent = "Time Remaining: " + countdownTimer;

    if(countdownTimer === 0) {
      clearInterval(timerInterval);
      resultPage();
    }

  }, 1000);
}

// timerCountdown() <-- will use this later -->

//creating the starter page//
function startPage() {
  titleHeading.textContent = "Javascript Coding Assessment";
  welcomeP.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will be penalized by deducting ten seconds from your time.";
  theBtn.textContent = "Start Quiz";
}

startPage()

//create the questions (maybe 5 with 4 options each)//
//each question will have 4 buttons (options) - 1 correct answer, that will move on without penalty and 3 that will move on and decrease 10 seconds from the timer//
//results page that will record the time remaining as the "final score/highscore" and allow player to record their name in a text box, plus the button that leads to the highscore page//