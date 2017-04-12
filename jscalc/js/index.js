window.numButtons = document.getElementsByClassName('num-button');
window.operatorButtons = document.getElementsByClassName('operator-button');
window.acButton = document.getElementById('ac-button');
window.ceButton = document.getElementById('ce-button');
window.inputField = document.getElementById('input-field');

// Adding click listener to all number buttons, which grabs the value of the clicked button, and adds it to the input field.
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function(){
    window.inputField.value += this.value;
  }, false);
};

// Adding click listeners to all operator buttons (except equal sign) and period sign. 
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function(){
    var lastChar = window.inputField.value[window.inputField.value.length - 1];
    if (window.inputField.value.length !== 0 && !lastChar.match(/x|-|\+/)) {  
      window.inputField.value += this.value;
    };
  }, false);
};

// Adding 'ac-button' click listener which resets whole input field
acButton.addEventListener('click', function(){
  window.inputField.value = '';
}, false);

// Adding 'ce-button' click listener which removed last entered number or operator
ceButton.addEventListener('click', function(){
  var lastChar = window.inputField.value[window.inputField.value.length - 1];
  var inputArray = inputField.value.split(/(\x|-|\+|\/)/);
  var newValue = lastChar.match(/x|-|\+|\//) ? inputArray.slice(0, -2).join('') : inputArray.slice(0, -1).join('');
  window.inputField.value = newValue;
}, false);

// TODO: Add function for equal button

