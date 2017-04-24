var alertSound = new Audio('./audio/ship_bell.mp3');
alertSound.loop = false;
var pomodoroCountdownId;
var pomodoroButtonPressed = false;
var pomodoroResetButton = document.getElementById('resetbutton');
var resetCheck = pomodoroResetButton.value;
var minutesSelect = document.getElementById('minutes-select');
var pomodoroTime = 25 * 60;
var pomodoroTimeLeft = document.getElementById('timeleft');
var pomodoroGoButton = document.getElementById('gobutton');
var minute = 0;
var seconds = 0;
pomodoroResetButton.addEventListener('click', function() {
  resetCheck = true;
})
minutesSelect.addEventListener('change', function(event) {
  pomodoroTime = event.target.value * 60;
})
pomodoroGoButton.addEventListener('click', function() {
  pomodoroCountdown();
})

// TODO: 1. Style and complete. Maybe overlay timer over a grey bell

pomodoroShowNextSecond = function() {
  if (resetCheck === true || pomodoroButtonPressed === false) {
    pomodoroTimeLeft.innerHTML = '0:00';
    pomodoroButtonPressed = false;
    resetCheck = false;
    clearInterval(pomodoroCountdownId);
    pomodoroTime = minutesSelect.value * 60;
    return;
  };
  if (pomodoroTime > 0) {
    minutes = Math.floor(pomodoroTime / 60);
    secondsInitial = pomodoroTime % 60;
    seconds = secondsInitial <= 9 ? '0' + secondsInitial : secondsInitial;
    pomodoroTime --;
    pomodoroTimeLeft.innerHTML = minutes + ':' + seconds;
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
