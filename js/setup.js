'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupWizard = document.querySelector('.setup');
var openSetupWizard = document.querySelector('.setup-open');
var closeSetupWizard = document.querySelector('.setup-close');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');

var changeColor = function (arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setupWizard.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupWizard.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var addWizards = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }
  similarListElement.appendChild(fragment);
};
var getRandomItem = function (arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
};
var createWizards = function () {
  var wizards = [];
  for (var i = 0; i < COUNT; i++) {
    wizards[i] = {
      'name': getRandomItem(NAMES) + ' ' + getRandomItem(SURNAMES),
      'coatColor': getRandomItem(COAT_COLORS),
      'eyesColor': getRandomItem(EYES_COLORS)
    };
  }
  return wizards;
};
var wizards = createWizards();
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
addWizards(wizards);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

openSetupWizard.addEventListener('click', function () {
  openPopup();
});

openSetupWizard.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

closeSetupWizard.addEventListener('click', function () {
  closePopup();
});

closeSetupWizard.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = changeColor(COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = changeColor(EYES_COLORS);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = changeColor(FIREBALL_COLORS);
});
