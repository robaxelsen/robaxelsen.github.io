// Attach variables to window global object, to prevent issues with
// this/self.
window.jsCalcNumButtons = document.getElementsByClassName('num-button');
window.jsCalcOperatorButtons = document.getElementsByClassName('operator-button');
window.jsCalcAcButton = document.getElementById('ac-button');
window.jsCalcCeButton = document.getElementById('ce-button');
window.jsCalcEqualButton = document.getElementById('equal-button');
window.jsCalcInputField = document.getElementById('input-field');

// DISABLE MOBILE SCROLLING:
document.body.addEventListener("touchmove", function(event) {
    event.preventDefault();
    event.stopPropagation();
}, false);

// NUMBER BUTTONS: Adding click listener to all number buttons, which grabs the value of the clicked button, and adds it to the input field.
for (var i = 0; i < jsCalcNumButtons.length; i++) {
  jsCalcNumButtons[i].addEventListener('click', function(){
    window.jsCalcInputField.value += this.value;
  }, false);
};

// OPERATOR BUTTONS: Adding click listeners to all operator buttons
// (except equal sign) and period sign. 
for (var i = 0; i < jsCalcOperatorButtons.length; i++) {
  jsCalcOperatorButtons[i].addEventListener('click', function(){
    var lastChar = window.jsCalcInputField.value[window.jsCalcInputField.value.length - 1];
    if (window.jsCalcInputField.value.length !== 0 && !lastChar.match(/x|-|\+|\//)) {  
      window.jsCalcInputField.value += this.value;
    };
  }, false);
};

// AC BUTTON: Adding 'ac-button' click listener which resets whole
// input field.
jsCalcAcButton.addEventListener('click', function(){
  window.jsCalcInputField.value = '';
}, false);

// CE BUTTON: Adding 'ce-button' click listener which removed last
// entered number or operator.
jsCalcCeButton.addEventListener('click', function(){
  var lastChar = window.jsCalcInputField.value[window.jsCalcInputField.value.length - 1];
  var inputArray = jsCalcInputField.value.split(/(\x|-|\+|\/)/);
  var newValue = lastChar.match(/x|-|\+|\//) ? inputArray.slice(0, -2).join('') : inputArray.slice(0, -1).join('');
  window.jsCalcInputField.value = newValue;
}, false);

// EQUAL BUTTON: Turn input field values into an array, operate on
// them, and output result to input field.
jsCalcEqualButton.addEventListener('click', function(){
  var lastChar = window.jsCalcInputField.value[window.jsCalcInputField.value.length - 1];
  var inputArray = jsCalcInputField.value.split(/(\x|-|\+|\/)/);
  var total = 0;
  if (lastChar.match(/x|-|\+|\//)) {
    inputArray.pop();
    inputArray.pop();
  }
  if (inputArray.length >= 3) {
    // Operate on first three indexes in array, operate with index 2
    // on index 0 and 1, then remove them from array.
    switch (inputArray[1]) {
      case 'x':
        total = Number(inputArray[0]) * Number(inputArray[2]);
        break;
      case '-':
        total = Number(inputArray[0]) - Number(inputArray[2]);
        break;
      case '+':
        total = Number(inputArray[0]) + Number(inputArray[2]);
        break;
      case '/':
        total = Number(inputArray[0]) / Number(inputArray[2]);
        break;
    };
    inputArray = inputArray.slice(3, inputArray.length);
    for (i = 0; i <= inputArray.length/2; i++) {
      var newInputArray = inputArray;
      // We then iterate over the remaining (if any) values in the
      // array, and operate depending on value in index 0, and remove
      // them fro array.
      switch (newInputArray[0]) {
        case 'x':
          total *= Number(newInputArray[1]);
          break;
        case '-':
          total -= Number(newInputArray[1]);
          break;
        case '+':
          total += Number(newInputArray[1]);
          break;
        case '/':
          total /= Number(newInputArray[1]);
          break;
      };
      newInputArray.shift();
      newInputArray.shift();
    }
    jsCalcInputField.value = total;
  }
})
