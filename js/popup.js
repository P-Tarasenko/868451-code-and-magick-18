'use strict';

(function () {
  var userNameElement = window.wizard.setupWizardElement.querySelector('.setup-user-name');
  var openSetupWizardElement = document.querySelector('.setup-open');
  var closeSetupWizardElement = document.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && userNameElement !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.wizard.setupWizardElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.wizard.setupWizardElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  openSetupWizardElement.addEventListener('click', function () {
    openPopup();
  });

  openSetupWizardElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  closeSetupWizardElement.addEventListener('click', function () {
    closePopup();
  });

  closeSetupWizardElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
