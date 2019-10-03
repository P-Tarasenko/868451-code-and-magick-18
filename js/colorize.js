'use strict';

(function () {

  var getRandomItem = function (arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
  };

  window.colorize = function (element, arrayColors, inputData) {
    element.addEventListener('click', function () {
      var color = getRandomItem(arrayColors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      document.querySelector(inputData).value = color;
    });
  };
})();
