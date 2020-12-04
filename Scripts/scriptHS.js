//getting all the ids from the HTML to be used later//
var pEL = document.getElementById("pEL");
var goBack = document.getElementById("goBack");
var clearHS = document.getElementById("clearHS");
var hsPlace = document.querySelector("p");

var highScores = [];

retrieveStoredHS ();

// Get highscores that are stored in localStorage and update array//
function retrieveStoredHS() {
  var storedHS = JSON.parse(localStorage.getItem("highScores"));

  if (storedHS !== null) {
    highScores = storedHS;
  }

  renderHS();
}

// Stringify and set "highscores" key in localStorage to highScores array//
function storeHS() {
  localStorage.setItem("highscores", JSON.stringify(highScores));
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


goBack.addEventListener("click", function startPage (){
    location.href = "../index.html";
  }); 