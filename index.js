// For timezone support see:
// https://stackoverflow.com/questions/18292716/javascript-countdown-with-specific-timezone?lq=1

document.addEventListener('DOMContentLoaded', function() {
  //These variables support the datetime input field for the countdown timer
  let datetimeInput;
  let selectedDatetime;
  const today = new Date()
  const form = document.getElementById('form')
  const inputMessage= document.getElementById("input-message")

  form.querySelector("#datetime").value = today.toISOString().substring(0, 16)

  form.addEventListener('input', function(event) {
    datetimeInput = event.target.value
  })

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    selectedDatetime = datetimeInput
    countdown(selectedDatetime);
    form.reset()
  })

  //This is the logic for the countdown timer
  function countdown(endDate) {
    let days, hours, minutes, seconds;

    let dayTimer = document.getElementById("days")
    let hourTimer = document.getElementById("hours")
    let minuteTimer = document.getElementById("minutes")
    let secondTimer = document.getElementById("seconds")
    let titleBar= document.getElementById("title-bar")

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

        titleBar.innerHTML = "Countdown to video launch"
        dayTimer.innerHTML = parseInt(days, 10);
        hourTimer.innerHTML = ("0" + hours).slice(-2);
        minuteTimer.innerHTML = ("0" + minutes).slice(-2);
        secondTimer.innerHTML = ("0" + seconds).slice(-2);
      } else {
        //Remove countdown timer
        var countdownContainer = document.getElementById('countdown-container')
        countdownContainer.innerHTML = ""

        //Display hours, minutes and seconds into video
        titleBar.innerHTML = "Time into video play"

        return;
      }
    }
  }

});
