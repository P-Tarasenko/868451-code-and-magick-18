'use strict';

(function () {
  var userName = window.wizard.setupWizard.querySelector('.setup-user-name');
  var openSetupWizard = document.querySelector('.setup-open');
  var closeSetupWizard = document.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && userName !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.wizard.setupWizard.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.wizard.setupWizard.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  openSetupWizard.addEventListener('click', function () {
    openPopup();
  });

  openSetupWizard.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  closeSetupWizard.addEventListener('click', function () {
    closePopup();
  });

  closeSetupWizard.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
