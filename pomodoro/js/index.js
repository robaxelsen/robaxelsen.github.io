window.pomodoroCountdownId;
window.pomodoroTime = 60;
window.pomodoroButtonPressed = false;
window.pomodoroTimeLeft = document.getElementById('timeleft');
window.pomodoroGoButton = document.getElementById('gobutton');
window.pomodoroGoButton.addEventListener('click', function() {
  window.pomodoroCountdown();
})
window.pomodoroShowNextSecond = function() {
  if (window.pomodoroTime > 0) {
    window.pomodoroTime --;
    window.pomodoroTimeLeft.innerHTML = window.pomodoroTime;
  }
}
window.pomodoroCountdown = function() {
  if (window.pomodoroButtonPressed === false) {
    window.pomodoroButtonPressed = true;
    window.pomodoroCountdownId = setInterval(window.pomodoroShowNextSecond, 1000);
  }
}
