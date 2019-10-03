'use strict';

(function () {

  var setupDialogElement = document.querySelector('.setup');
  var userNameElement = setupDialogElement.querySelector('.setup-user-name');
  var openSetupDialogElement = document.querySelector('.setup-open');
  var closeSetupDialogElement = document.querySelector('.setup-close');
  var dialogHandler = setupDialogElement.querySelector('.upload');
  var coordinateForRestore;

  var activateWizards = function () {
    setupDialogElement.querySelector('.setup-similar').classList.remove('hidden');
  };

  var restoreCoordinate = function () {
    setupDialogElement.style.top = coordinateForRestore.y + 'px';
    setupDialogElement.style.left = (coordinateForRestore.x + coordinateForRestore.width / 2) + 'px';
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && userNameElement !== document.activeElement) {
      closePopup();
    }
  };

  var openPopup = function () {
    setupDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    coordinateForRestore = setupDialogElement.getBoundingClientRect();
  };

  var closePopup = function () {
    setupDialogElement.classList.add('hidden');
    restoreCoordinate();
    document.removeEventListener('keydown', onPopupEscPress);
  };

  openSetupDialogElement.addEventListener('click', function () {
    openPopup();
  });

  openSetupDialogElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  closeSetupDialogElement.addEventListener('click', function () {
    closePopup();
  });

  closeSetupDialogElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });

  dialogHandler.addEventListener('mousedown', function (mouseDownEvt) {
    mouseDownEvt.preventDefault();

    var startCoords = {
      x: mouseDownEvt.clientX,
      y: mouseDownEvt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.dialog = {
    activateWizards: activateWizards
  };

})();
