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

//creating the starter page//
function startPage() {
  titleHeading.textContent = "Javascript Coding Assessment";
  welcomeP.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will be penalized by deducting ten seconds from your time.";
  theBtn.textContent = "Start Quiz";
}

startPage()

//create the questions (maybe 5 with 4 options each)//
//each question will have 4 buttons (options) - 1 correct answer, that will move on without penalty and 3 that will move on and decrease 10 seconds from the timer//
theBtn.addEventListener("click", function theQuestions() {
  titleHeading.setAttribute("style", "display: none");
  welcomeP.setAttribute("style", "display: none");
  theBtn.setAttribute("style", "display: none");
  timerCountdown();
  question1 ();
  });


function question1 () {
  questionHeading.textContent = "1. Here will go a question";
  optionOne.textContent = "Option 1";
  optionOne.addEventListener("click", wrongAnswer1());
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", wrongAnswer1());
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", rightAnswer1()), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", wrongAnswer1());
  function wrongAnswer1() {
    countdownTimer -10;
    question2();
  }
  function rightAnswer1() {
    question2();
  }
}

function question2 () {
  questionHeading.textContent = "2. Here will go a question";
  optionOne.textContent = "Option 1";
  optionOne.addEventListener("click", wrongAnswer2());
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", wrongAnswer2());
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", rightAnswer2()), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", wrongAnswer2());
  function wrongAnswer2() {
    countdownTimer -10;
    question3();
  }
  function rightAnswer2() {
    question3();
  }
}

function question3 () {
  questionHeading.textContent = "3. Here will go a question";
  optionOne.textContent = "Option 1";
  optionOne.addEventListener("click", wrongAnswer3());
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", wrongAnswer3());
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", rightAnswer3()), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", wrongAnswer3());
  function wrongAnswer3() {
    countdownTimer -10;
    question4();
  }
  function rightAnswer3() {
    question4();
  }
}

function question4 () {
  questionHeading.textContent = "4. Here will go a question";
  optionOne.textContent = "Option 1";
  optionOne.addEventListener("click", wrongAnswer4());
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", wrongAnswer4());
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", rightAnswer4()), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", wrongAnswer4());
  function wrongAnswer4() {
    countdownTimer -10;
    question5();
  }
  function rightAnswer4() {
    question5();
  }
}

function question5 () {
  questionHeading.textContent = "5. Here will go a question";
  optionOne.textContent = "Option 1";
  optionOne.addEventListener("click", wrongAnswer5());
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", wrongAnswer5());
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", rightAnswer5()), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", wrongAnswer5());
  function wrongAnswer5() {
    countdownTimer -10;
    resultPage();
  }
  function rightAnswer5() {
    resultPage();
  }
}

function resultPage() {
  titleHeading.textContent = "You're Done!";
  welcomeP.textContent = "Enter your name: ";
  theBtn.textContent = "Submit Score";
}


//results page that will record the time remaining as the "final score/highscore" and allow player to record their name in a text box, plus the button that leads to the highscore page//