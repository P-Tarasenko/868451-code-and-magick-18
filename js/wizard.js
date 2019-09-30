'use strict';

(function () {
  var COUNT = 4;
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupWizard = document.querySelector('.setup');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupWizard.querySelector('.setup-fireball-wrap');

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

  wizardCoat.addEventListener('click', function () {
    var color = getRandomItem(COAT_COLORS);
    wizardCoat.style.fill = color;
    setupWizard.querySelector('input[name=coat-color]').value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = getRandomItem(EYES_COLORS);
    wizardEyes.style.fill = color;
    setupWizard.querySelector('input[name=eyes-color]').value = color;
  });

  wizardFireball.addEventListener('click', function () {
    var color = getRandomItem(FIREBALL_COLORS);
    wizardFireball.style.backgroundColor = color;
    wizardFireball.querySelector('input[name=fireball-color]').value = color;
  });

  addWizards(wizards);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.wizard = {
    setupWizard: setupWizard
  };
})();
