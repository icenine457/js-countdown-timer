// For timezone support see:
// https://stackoverflow.com/questions/18292716/javascript-countdown-with-specific-timezone?lq=1
var inputDatetime;

function renderCountdown(endDate) {
  var currDate = new Date()
  var endTimer = new Date(endDate)

  //Find the element to be removed if countdown is over
  var countdownContainer = document.getElementById('countdown-container')

  if (endTimer>currDate) {
    countdown(endDate);
  } else {
    //Clear timer if countdown is over
    countdownContainer.innerHTML = ""
  }
}

function countdown(endDate) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
	return;
  }

  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('form').addEventListener('submit', function() {

  })

  renderCountdown('04/01/2019 05:00:00 PM PST');
});
