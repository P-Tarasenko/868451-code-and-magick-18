'use strict';

(function () {

  var COUNT = 4;
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardParts = {
    coat: 'input[name=coat-color]',
    eyes: 'input[name=eyes-color]',
    fireball: '[name=fireball-color]'
  };
  var userDialogElement = document.querySelector('.setup');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupWizardElement = document.querySelector('.setup');
  var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var wizardFireballElement = setupWizardElement.querySelector('.setup-fireball-wrap');

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

  window.colorize(wizardCoatElement, COAT_COLORS, wizardParts.coat);

  window.colorize(wizardEyesElement, EYES_COLORS, wizardParts.eyes);

  window.colorize(wizardFireballElement, FIREBALL_COLORS, wizardParts.fireball);

  addWizards(wizards);
  window.dialog.activateWizards();

})();
