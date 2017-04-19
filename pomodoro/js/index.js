window.pomodoroCountdownId;
window.pomodoroButtonPressed = false;
window.minutesSelect = document.getElementById('minutes-select');
window.pomodoroTime = 25;
window.pomodoroTimeLeft = document.getElementById('timeleft');
window.pomodoroGoButton = document.getElementById('gobutton');
window.minutesSelect.addEventListener('change', function(event) {
  window.pomodoroTime = event.target.value;
})
window.pomodoroGoButton.addEventListener('click', function() {
  console.log(window.pomodoroTime);
  window.pomodoroCountdown();
})
// TODO: Change to minutes (instead of seconds), by implementing
// a countdown of minutes and seconds
// TODO: Decide on some css to animate depending on seconds and/or minutes,
// for example a hourglass, circle being filled with color, or filling a
// circle gradually like a piechart
window.pomodoroShowNextSecond = function() {
  if (window.pomodoroTime > 0) {
    window.pomodoroTime --;
    window.pomodoroTimeLeft.innerHTML = window.pomodoroTime;
  } else if (window.pomodoroButtonPressed && window.pomodoroTime === 0) {
    window.pomodoroButtonPressed = false;
    alert('time is up');
  }
}
window.pomodoroCountdown = function() {
  if (window.pomodoroButtonPressed === false) {
    window.pomodoroButtonPressed = true;
    window.pomodoroCountdownId = setInterval(window.pomodoroShowNextSecond, 1000);
  }
}
// TODO: Make a sound play when time is up, and make sure it
// goes off also when in other tab

// TODO: Check the other user stories, and plan them out here
