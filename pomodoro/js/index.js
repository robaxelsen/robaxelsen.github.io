var alertSound = new Audio('./audio/ship_bell.mp3');
alertSound.loop = false;
var pomodoroCountdownId;
var pomodoroButtonPressed = false;
var pomodoroResetButton = document.getElementById('resetbutton');
var resetCheck = pomodoroResetButton.value;
var minutesSelect = document.getElementById('minutes-select');
var pomodoroTime = 25;
var pomodoroTimeLeft = document.getElementById('timeleft');
var pomodoroGoButton = document.getElementById('gobutton');
pomodoroResetButton.addEventListener('click', function() {
  resetCheck = true;
})
minutesSelect.addEventListener('change', function(event) {
  pomodoroTime = event.target.value;
})
pomodoroGoButton.addEventListener('click', function() {
  console.log(pomodoroTime);
  pomodoroCountdown();
})
// TODO: Change to minutes (instead of seconds), by implementing
// a countdown of minutes and seconds
// TODO: Decide on some css to animate depending on seconds and/or minutes,
// for example a hourglass, circle being filled with color, or filling a
// circle gradually like a piechart

// TODO: Issue with function "speeding up" after reset. Check if we
// can return differentlym use switch/case, or kill interval/function
pomodoroShowNextSecond = function() {
  if (resetCheck === true || pomodoroButtonPressed === false) {
    pomodoroTimeLeft.innerHTML = '0, reset.';
    pomodoroButtonPressed = false;
    resetCheck = false;
    return;
  };
  if (pomodoroTime > 0) {
    pomodoroTime --;
    pomodoroTimeLeft.innerHTML = pomodoroTime;
  } else if (pomodoroButtonPressed && pomodoroTime === 0) {
    pomodoroButtonPressed = false;
    alertSound.play();
  }
}
pomodoroCountdown = function() {
  if (pomodoroButtonPressed === false) {
    pomodoroButtonPressed = true;
    pomodoroCountdownId = setInterval(pomodoroShowNextSecond, 1000);
  }
}
