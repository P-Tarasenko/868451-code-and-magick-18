'use strict';

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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
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
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + FONT_GAP + SPACE * i, CLOUD_Y + BAR_GAP * 1.5);

  }

  for (i = 0; i < names.length; i++) {
    var TOTAL_BAR_HIGHT = (BAR_HEIGHT * times[i]) / maxTime;
    var randomColor = Math.round(Math.random() * 100) + '%';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'hsl(240, 91%, ' + randomColor + ')';
    }

    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + SPACE * i, CLOUD_Y + BAR_GAP * 1.6 + (BAR_HEIGHT - TOTAL_BAR_HIGHT), BAR_WIDTH, TOTAL_BAR_HIGHT);

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + SPACE * i, CLOUD_Y + BAR_HEIGHT * 1.7);
  }
};
