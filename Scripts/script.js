//getting all the ids from the HTML to be used later//
var timerEl = document.getElementById("timerEl");
var titleHeading = document.getElementById("titleHeading");
var questionHeading = document.getElementById("questionHeading");
var welcomeP = document.getElementById("welcomeP");
var textBox = document.getElementById("textBox");
var theBtn = document.getElementById("theBtn");
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var optionThree = document.getElementById("optionThree");
var optionFour = document.getElementById("optionFour");
var pEL = document.getElementById("pEL");

var highScores = [];

//creating the timer/countdown to be displayed through quiz//
var countdownTimer = 90;

function timerCountdown() {
  var timerInterval = setInterval(function() {
    countdownTimer--;
    timerEl.textContent = "Time Remaining: " + countdownTimer;

    if(countdownTimer <= 0) {
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
  textBox.setAttribute("style", "display: none");
  optionOne.setAttribute("style", "display: none")
  optionTwo.setAttribute("style", "display: none")
  optionThree.setAttribute("style", "display: none")
  optionFour.setAttribute("style", "display: none")
}

startPage()

//create the questions (5 with 4 options each)//
//each question has 4 buttons (options) - 1 correct answer, that will move on without penalty and 3 that will move on and decrease 5 seconds from the timer//
theBtn.addEventListener("click", function theQuestions() {
  titleHeading.setAttribute("style", "display: none");
  welcomeP.setAttribute("style", "display: none");
  theBtn.setAttribute("style", "display: none");
  optionOne.setAttribute("style", "display: visible")
  optionTwo.setAttribute("style", "display: visible")
  optionThree.setAttribute("style", "display: visible")
  optionFour.setAttribute("style", "display: visible")
  timerCountdown();
  question1 ();
  });


function question1 () {
  questionHeading.textContent = "1. A function is executed:";
  optionOne.textContent = "a. automatically";
  optionOne.addEventListener("click", function wrongAnswer1() {
    countdownTimer -= 5;
    question2();
  });
  optionTwo.textContent = "b. only when a button is clicked";
  optionTwo.addEventListener("click", function wrongAnswer1() {
    countdownTimer -= 5;
    question2();
  });
  optionThree.textContent = "c. when called upon";
  optionThree.addEventListener("click", function rightAnswer1() {
    question2();
  }), 
  optionFour.textContent = "d. when inside a variable";
  optionFour.addEventListener("click", function wrongAnswer1() {
    countdownTimer -= 5;
    question2();
  });
}

function question2 () {
  questionHeading.textContent = "2. An array is a special variable, which can:";
  optionOne.textContent = "a. only hold 1 value at a time";
  optionOne.addEventListener("click", function wrongAnswer2() {
    countdownTimer -= 5;
    question3();
  });
  optionTwo.textContent = "b. hold more than 1 value at a time";
  optionTwo.addEventListener("click",   function rightAnswer2() {
    question3();
  });
  optionThree.textContent = "c. only hold integers";
  optionThree.addEventListener("click", function wrongAnswer2() {
    countdownTimer -= 5;
    question3();
  }), 
  optionFour.textContent = "d. hold your hand";
  optionFour.addEventListener("click", function wrongAnswer2() {
    countdownTimer -= 5;
    question3();
  });
}

function question3 () {
  questionHeading.textContent = "3. Which of the following cannot be used for strings?";
  optionOne.textContent = "a. double quotes inside duoble quotes";
  optionOne.addEventListener("click", function rightAnswer3() {
    question4();
  });
  optionTwo.textContent = "b. double quotes";
  optionTwo.addEventListener("click", function wrongAnswer3() {
    countdownTimer -= 5;
    question4();
  });
  optionThree.textContent = "c. single quotes";
  optionThree.addEventListener("click", function wrongAnswer3() {
    countdownTimer -= 5;
    question4();
  }), 
  optionFour.textContent = 'd. single quotes inside double quotes';
  optionFour.addEventListener("click", function wrongAnswer3() {
    countdownTimer -= 5;
    question4();
  });
}

function question4 () {
  questionHeading.textContent = "4. Which of the following is not a data type?";
  optionOne.textContent = "a. numbers/integers";
  optionOne.addEventListener("click", function wrongAnswer4() {
    countdownTimer -= 5;
    question5();
  });
  optionTwo.textContent = "b. yarn";
  optionTwo.addEventListener("click", function rightAnswer4() {
    question5();
  });
  optionThree.textContent = "c. strings";
  optionThree.addEventListener("click", function wrongAnswer4() {
    countdownTimer -= 5;
    question5();
  }), 
  optionFour.textContent = "d. objects";
  optionFour.addEventListener("click", function wrongAnswer4() {
    countdownTimer -= 5;
    question5();
  });
}

function question5 () {
  questionHeading.textContent = "5. 'Var' can be used to:";
  optionOne.textContent = "a. assign a value";
  optionOne.addEventListener("click", function wrongAnswer5() {
    countdownTimer -= 1;
    resultPage();
  });
  optionTwo.textContent = "b. store data values";
  optionTwo.addEventListener("click", function wrongAnswer5() {
    countdownTimer -= 1;
    resultPage();
  });
  optionThree.textContent = "c. laugh at values";
  optionThree.addEventListener("click", function wrongAnswer5() {
    countdownTimer -= 5;
    resultPage();
  }), 
  optionFour.textContent = "d. both a and b";
  optionFour.addEventListener("click", function rightAnswer5() {
    resultPage();
  });
}

//results page that will record the time remaining as the "final score/highscore" and allow player to record their name in a text box, plus the button that leads to the highscore page//
function resultPage() {
  titleHeading.textContent = "You're Done!";
  welcomeP.textContent = "Enter your name: ";
  textBox.setAttribute("style", "display: visible");
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
    var highscoreText = textBox.value;
    // not allowing a blank answer for the name in the text box//
    if (highscoreText === "") {
      return;
    }  
    // Adding new highscore to array//
    highScores.push(highscoreText);
    storeHS();
    function storeHS() {
      localStorage.setItem("highScores", JSON.stringify(HighScores));
    };

    retrieveStoredHS ();

    // Get highscores that are stored in localStorage and update array//
    function retrieveStoredHS() {
      var storedHS = JSON.parse(localStorage.getItem("highScores"));

      if (storedHS !== null) {
        highScores = storedHS;
      }

      renderHS();
    }

    // make a new li for each highscore//
    function renderHS() {
      for (var i = 0; i < highScores.length; i++) {
        var highScore = highScores[i];

        var li = document.createElement("li");
        li.textContent = highScore;
        li.setAttribute("data-index", i);
        pEL.appendChild(li);
      }
    }
    location.href = "./highscore.html";
  })
}

