var timerEl = document.getElementById("timerEl");
var titleHeading = document.getElementById("titleHeading");
var questionHeading = document.getElementById("questionHeading");
var welcomeP = document.getElementById("welcomeP");
var startQuiz = document.getElementById("startQuiz");
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var optionThree = document.getElementById("optionThree");
var optionFour = document.getElementById("optionFour");

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

// timerCountdown()

function startPage() {
  titleHeading.textContent = "Javascript Coding Assessment";
  welcomeP.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will be penalized by deducting ten seconds from your time.";
  startQuiz.textContent = "Start Quiz";
}

startPage()