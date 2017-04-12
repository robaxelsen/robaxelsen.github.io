var numButtons = document.getElementsByClassName('num-button');
var operatorButtons = document.getElementsByClassName('operator-button');
var acButton = document.getElementById('ac-button');
var ceButton = document.getElementById('ce-button');
var inputField = document.getElementById('input-field');

// TODO: 1. Create a function for all num buttons, grabbing value of clicked on DOM element.
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function(){
    inputField.value += this.value;
  }, false);
};

// TODO: 2. Create a function for all operator buttons and dot, except for equal.
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function(){
    inputField.value += this.value;
  }, false);
};

// TODO: 3. Create a function for equal button. (for now they both reset)
acButton.addEventListener('click', function(){
  inputField.value = '';
}, false);

ceButton.addEventListener('click', function(){
  inputField.value = '';
}, false);

// TODO: 4. Create functions for AC/CE buttons.

// Resource links:
// http://demos.creative-tim.com/material-kit/components-documentation.html
// https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/
