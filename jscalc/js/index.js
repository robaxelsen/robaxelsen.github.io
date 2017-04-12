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
  var lastIndex = inputFieldValue.length - 1;
  var lastChar = inputFieldValue[lastIndex];
  var inputArray = inputFieldValue.split(/(\x|-|\+|\/)/);
  // returns an array where if last char was an operator, it has two more values in array
  console.log(inputArray);
  // TODO: If lastChar is x, -, + or /, remove two last indexes of array, otherwise remove 1.
  var newArray = lastChar.match(/x|-|\+/) ? inputArray.slice(0, lastIndex-1) : inputArray.slice(0, lastIndex-2);
  console.log(newArray);
}, false);

// TODO: 1. Create functions for AC/CE buttons.

// Resource links:
// http://demos.creative-tim.com/material-kit/components-documentation.html
// https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/
