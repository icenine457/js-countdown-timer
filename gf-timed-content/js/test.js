function CountdownTimer(endDate) {
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
      inputMessage.innerHTML = ""

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

console.log(CountdownTimer)

function gf_timed_content_init (json_arg) {
	const args = JSON.parse(json_arg);
	// alert ('inside init with a target date: ' + args['target_date']);
}

function gf_timed_content_countdown(json_arg) {
	const args = JSON.parse(json_arg);
	const the_div = args['div_id']

	//Remove day of week and timezone
	const date = args.to_date.substr(4, 21)
	const dateObj = new Date(date)

	console.log(date)
	console.log(dateObj)
	console.log(the_div)

	debugger;

	setTimeout(function() {
		document.getElementById(the_div).innerHTML='imagine this is a countdown timer!';
	}, 3000)
}
