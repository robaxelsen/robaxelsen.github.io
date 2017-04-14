window.jsCalcNumButtons = document.getElementsByClassName('num-button');
window.jsCalcOperatorButtons = document.getElementsByClassName('operator-button');
window.jsCalcAcButton = document.getElementById('ac-button');
window.jsCalcCeButton = document.getElementById('ce-button');
window.jsCalcEqualButton = document.getElementById('equal-button');
window.jsCalcInputField = document.getElementById('input-field');

// Adding click listener to all number buttons, which grabs the value of the clicked button, and adds it to the input field.
for (var i = 0; i < jsCalcNumButtons.length; i++) {
  jsCalcNumButtons[i].addEventListener('click', function(){
    window.jsCalcInputField.value += this.value;
  }, false);
};

// Adding click listeners to all operator buttons (except equal sign) and period sign. 
for (var i = 0; i < jsCalcOperatorButtons.length; i++) {
  jsCalcOperatorButtons[i].addEventListener('click', function(){
    var lastChar = window.jsCalcInputField.value[window.jsCalcInputField.value.length - 1];
    if (window.jsCalcInputField.value.length !== 0 && !lastChar.match(/x|-|\+|\//)) {  
      window.jsCalcInputField.value += this.value;
    };
  }, false);
};

// Adding 'ac-button' click listener which resets whole input field
jsCalcAcButton.addEventListener('click', function(){
  window.jsCalcInputField.value = '';
}, false);

// Adding 'ce-button' click listener which removed last entered number or operator
jsCalcCeButton.addEventListener('click', function(){
  var lastChar = window.jsCalcInputField.value[window.jsCalcInputField.value.length - 1];
  var inputArray = jsCalcInputField.value.split(/(\x|-|\+|\/)/);
  var newValue = lastChar.match(/x|-|\+|\//) ? inputArray.slice(0, -2).join('') : inputArray.slice(0, -1).join('');
  window.jsCalcInputField.value = newValue;
}, false);

// TODO: Add function for equal button
jsCalcEqualButton.addEventListener('click', function(){
  var lastChar = window.jsCalcInputField.value[window.jsCalcInputField.value.length - 1];
  var inputArray = jsCalcInputField.value.split(/(\x|-|\+|\/)/);
  var total = 0;
  //var newValue = lastChar.match(/x|-|\+|\//) ? inputArray.slice(0, -2).join('') : inputArray.slice(0, -1).join('');
  console.log('inputArray before operations', inputArray);
  if (lastChar.match(/x|-|\+|\//)) {
    inputArray.pop();
    inputArray.pop();
  }
  if (inputArray.length >= 3) {
    // TODO: a. Operate on first three indexes in array, operate with index 2 on index 0 and 1, then remove them from array (with shift or slice).
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
    //inputArray = inputArray.slice(3, -1);
    console.log('inputArray after first operations', inputArray);
    for (i = 0;i < inputArray.length/2;i++) {
    // TODO: b. The remaining (if any) should then be in pairs of number and operator. We should be able to make a for loop that iterates over the length/2
      switch (inputArray[0]) {
        case 'x':
          total *= Number(inputArray[1]);
          break;
        case '-':
          total -= Number(inputArray[1]);
          break;
        case '+':
          total += Number(inputArray[1]);
          break;
        case '/':
          total /= Number(inputArray[1]);
          break;
      }; 
    }
    jsCalcInputField.value = total;
  }
})
