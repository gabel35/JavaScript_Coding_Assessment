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
  optionOne.addEventListener("click", function wrongAnswer1() {
    countdownTimer = countdownTimer-10;
    question2();
  });
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", function wrongAnswer1() {
    countdownTimer = countdownTimer-10;
    question2();
  });
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", function rightAnswer1() {
    question2();
  }), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", function wrongAnswer1() {
    countdownTimer = countdownTimer-10;
    question2();
  });
}

function question2 () {
  questionHeading.textContent = "2. An array is a special variable, which can:";
  optionOne.textContent = "a. only hold 1 value at a time";
  optionOne.addEventListener("click", function wrongAnswer2() {
    countdownTimer = countdownTimer-10;
    question3();
  });
  optionTwo.textContent = "b. hold more than 1 value at a time";
  optionTwo.addEventListener("click",   function rightAnswer2() {
    question3();
  });
  optionThree.textContent = "c. only hold integers";
  optionThree.addEventListener("click", function wrongAnswer2() {
    countdownTimer = countdownTimer-10;
    question3();
  }), 
  optionFour.textContent = "d. hold your hand";
  optionFour.addEventListener("click", function wrongAnswer2() {
    countdownTimer = countdownTimer-10;
    question3();
  });
}

function question3 () {
  questionHeading.textContent = "3. Here will go a question";
  optionOne.textContent = "Option 1";
  optionOne.addEventListener("click", function rightAnswer3() {
    question4();
  });
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", function wrongAnswer3() {
    countdownTimer = countdownTimer-10;
    question4();
  });
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", function wrongAnswer3() {
    countdownTimer = countdownTimer-10;
    question4();
  }), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", function wrongAnswer3() {
    countdownTimer = countdownTimer-10;
    question4();
  });
}

function question4 () {
  questionHeading.textContent = "4. Here will go a question";
  optionOne.textContent = "Option 1";
  optionOne.addEventListener("click", function wrongAnswer4() {
    countdownTimer = countdownTimer-10;
    question5();
  });
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", function rightAnswer4() {
    question5();
  });
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", function wrongAnswer4() {
    countdownTimer = countdownTimer-10;
    question5();
  }), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", function wrongAnswer4() {
    countdownTimer = countdownTimer-10;
    question5();
  });
}

function question5 () {
  questionHeading.textContent = "5. Here will go a question";
  optionOne.textContent = "Option 1";
  optionOne.addEventListener("click", function wrongAnswer5() {
    countdownTimer = countdownTimer-10;
    resultPage();
  });
  optionTwo.textContent = "Option 2";
  optionTwo.addEventListener("click", function wrongAnswer5() {
    countdownTimer = countdownTimer-10;
    resultPage();
  });
  optionThree.textContent = "Option 3";
  optionThree.addEventListener("click", function wrongAnswer5() {
    countdownTimer = countdownTimer-10;
    resultPage();
  }), 
  optionFour.textContent = "Option 4";
  optionFour.addEventListener("click", function rightAnswer5() {
    resultPage();
  });
}

//results page that will record the time remaining as the "final score/highscore" and allow player to record their name in a text box, plus the button that leads to the highscore page//
function resultPage() {
  titleHeading.textContent = "You're Done!";
  welcomeP.textContent = "Enter your name: ";
  theBtn.textContent = "Submit Score";
  questionHeading.setAttribute("style", "display: none");
  optionOne.setAttribute("style", "display: none");
  optionTwo.setAttribute("style", "display: none");
  optionThree.setAttribute("style", "display: none");
  optionFour.setAttribute("style", "display: none");
  titleHeading.setAttribute("style", "display: visible");
  welcomeP.setAttribute("style", "display: visible");
  theBtn.setAttribute("style", "display: visible");
  theBtn.addEventListener("click", function hsPage (){
    location.href = "./highscore.html";
  }); 
  
}
