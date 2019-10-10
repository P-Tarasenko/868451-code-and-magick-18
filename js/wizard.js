'use strict';

(function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var coatColor;
  var eyesColor;
  var wizards = [];
  var userDialogElement = document.querySelector('.setup');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupWizardElement = document.querySelector('.setup');
  var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var wizardFireballElement = setupWizardElement.querySelector('.setup-fireball-wrap');

  var getRandomItem = function (arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    addWizards(wizards.slice().
      sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
        }
        return rankDiff;
      }));
  };

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
  };

  var addWizards = function (arr) {
    var fragment = document.createDocumentFragment();
    similarListElement.innerHTML = '';
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  wizardCoatElement.addEventListener('click', function () {
    var color = getRandomItem(COAT_COLORS);
    wizardCoatElement.style.fill = color;
    coatColor = color;
    updateWizards();
  });

  wizardEyesElement.addEventListener('click', function () {
    var color = getRandomItem(EYES_COLORS);
    wizardEyesElement.style.fill = color;
    eyesColor = color;
    updateWizards();
  });

  wizardFireballElement.addEventListener('click', function () {
    var color = getRandomItem(FIREBALL_COLORS);
    wizardFireballElement.style.backgroundColor = color;
  });

  window.dialog.activateWizards();

  window.backend.load(onLoad, window.util.errorHandler);

})();
