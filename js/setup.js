'use strict';

var COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var myArray = [];
var fragment = document.createDocumentFragment();
var getRandomItem = function (arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
};
var createObject = function () {
  for (var i = 0; i < COUNT; i++) {
    myArray[i] = {
      'name': getRandomItem(NAMES) + ' ' + getRandomItem(SURNAMES),
      'coatColor': getRandomItem(COAT_COLORS),
      'eyesColor': getRandomItem(EYES_COLORS)
    };
  }
  return myArray;
};
createObject();
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
for (var i = 0; i < myArray.length; i++) {
  fragment.appendChild(renderWizard(myArray[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
