//getting all the ids from the HTML to be used later//
var pEL = document.getElementById("pEL");
var goBack = document.getElementById("goBack");
var clearHS = document.getElementById("clearHS");
var hsPlace = document.querySelector("p");

var highScores = [];

retrieveStoredHS ();

function retrieveStoredHS() {
  // Get highscores that are stored in localStorage
  // Parsing the JSON string to an object
  var storedHS = JSON.parse(localStorage.getItem("highScores"));

  // If highscores were retrieved from localStorage, update the highScores array to it
  if (storedHS !== null) {
    highScores = storedHS;
  }

  // Render highScores to the DOM
  renderHS();
}

function renderHS() {
  // Clear pEL element
  pEL.innerHTML = "";

  // Render a new li for each highscore
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