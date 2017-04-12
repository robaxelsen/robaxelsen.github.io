var numButtons = document.getElementsByClassName('num-button');
var operatorButtons = document.getElementsByClassName('operator-button');
var acButton = document.getElementById('ac-button');
var ceButton = document.getElementById('ce-button');
var inputField = document.getElementById('input-field');

// Adding click listener to all number buttons, which grabs the value of the clicked button, and adds it to the input field.
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function(){
    inputField.value += this.value;
  }, false);
};

// Adding click listeners to all operator buttons (except equal sign) and period sign. 
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function(){
    inputField.value += this.value;
  }, false);
};

// Adding 'ac-button' click listener which resets whole input field
acButton.addEventListener('click', function(){
  inputField.value = '';
}, false);

// Adding 'ce-button' click listener which removed last entered number
ceButton.addEventListener('click', function(){
  var inputFieldValue = inputField.value;
  var inputFieldLastIndex = inputFieldValue.length - 1;
  var lastInputChar = inputFieldValue[inputFieldLastIndex];
  // TODO: Can not return +|/|x as lastInputChar. Investigate and fix
  var inputArray = lastInputChar == ('x'|'-'|'+') ? 'it is' : 'it is not';
  //var inputArray = inputFieldValue.split(/\x|\-|\+/);
  if (Number(lastInputChar)) {
    console.log(lastInputChar);
    console.log(inputArray);
    //inputField.value = inputField.value.substring(0, inputFieldLastIndex);
  } else {
    //inputField.value = inputField.value.substring(0, inputFieldLastIndex-2);
  }
}, false);

// TODO: 1. Create functions for AC/CE buttons.

// Resource links:
// http://demos.creative-tim.com/material-kit/components-documentation.html
// https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/
