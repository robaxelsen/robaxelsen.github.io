window.pomodoroCountdownId;
window.pomodoroTime = 10;
window.pomodoroButtonPressed = false;
window.pomodoroTimeLeft = document.getElementById('timeleft');
window.pomodoroGoButton = document.getElementById('gobutton');
window.pomodoroGoButton.addEventListener('click', function() {
  window.pomodoroCountdown();
})
// TODO: Change to minutes (instead of seconds), and implement
// a dropdown to choose how many minutes before pressing 'Go!'
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
