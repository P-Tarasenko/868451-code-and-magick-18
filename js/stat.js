'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 30;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;
  var SPACE = 90;
  var DOUBLE = 2;
  var total = CLOUD_X + GAP + FONT_GAP;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

    var maxTime = getMaxElement(times);
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + (FONT_GAP + 20));

    for (var i = 0; i < times.length; i++) {
      var totalBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
      ctx.fillText(Math.round(times[i]), total + SPACE * i, CLOUD_Y + GAP + FONT_GAP * DOUBLE + (BAR_HEIGHT - totalBarHeight));

    }

    for (i = 0; i < names.length; i++) {
      totalBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
      var randomColor = Math.round(Math.random() * 100) + '%';

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'red';
      } else {
        ctx.fillStyle = 'hsl(240, 91%, ' + randomColor + ')';
      }

      ctx.fillRect(total + SPACE * i, CLOUD_Y + BAR_GAP + FONT_GAP + (BAR_HEIGHT - totalBarHeight), BAR_WIDTH, totalBarHeight);

      ctx.fillStyle = 'black';
      ctx.fillText(names[i], total + SPACE * i, CLOUD_Y + BAR_HEIGHT + CLOUD_X);
    }
  };
})();
