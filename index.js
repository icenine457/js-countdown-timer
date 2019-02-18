// For timezone support see:
// https://stackoverflow.com/questions/18292716/javascript-countdown-with-specific-timezone?lq=1

document.addEventListener('DOMContentLoaded', function() {
  //These variables support the datetime input field for the countdown timer
  let datetimeInput;
  let selectedDatetime;
  const today = new Date()
  const form = document.getElementById('form')

  document.querySelector("#datetime").value = today.toISOString().substring(0, 16)

  form.addEventListener('input', function(event) {
    datetimeInput = event.target.value
  })

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    selectedDatetime = datetimeInput
    form.reset()
    countdown(selectedDatetime);
  })

  //This is the logic for the countdown timer
  function countdown(endDate) {
    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
  	return;
    }

    setInterval(calculate, 1000);

    function calculate() {
      // Determine current time for countdown
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
        //Find the element to be removed if countdown is over
        var countdownContainer = document.getElementById('countdown-container')
        countdownContainer.innerHTML = ""
        return;
      }
    }
  }


});
