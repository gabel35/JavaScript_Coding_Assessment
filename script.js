var timerEl = document.getElementById("#timerEl");

var countdownTimer = 90;

function timerCountdown() {
  var timerInterval = setInterval(function() {
    countdownTimer--;
    timerEl.textContent = "Time: " + countdownTimer;

    if(countdownTimer === 0) {
      clearInterval(timerInterval);
      resultPage();
    }

  }, 1000);
}

timerCountdown()