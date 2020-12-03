//getting all the ids from the HTML to be used later//
var goBack = document.getElementById("goBack");
var clearHS = document.getElementById("clearHS");
var highScores = document.querySelector("p");

goBack.addEventListener("click", function startPage (){
    location.href = "../index.html";
  }); 