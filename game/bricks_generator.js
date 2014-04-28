/**
 * generated from coffeescript file, that is why not so readable
 */

(function(Game) {
  'use strict';

  var BricksGenerator = function(data) {
    this.singleHit = data.singleHit;
    this.doubleHit = data.doubleHit;
    this.unbreakable = data.unbreakable;
    this.range = data.range;
    this.canvas = data.canvas;
  };

  BricksGenerator.prototype.run = function() {
    var bricks, i, j, k, numberOfBricks, numberOfDoubleHit, numberOfSingleHit, numberOfUnbreakable, _i, _j, _k;
    numberOfBricks = this._getRandomInRange(this.range[0], this.range[1]);
    numberOfSingleHit = Math.round(numberOfBricks * this.singleHit / 100);
    numberOfDoubleHit = Math.round(numberOfBricks * this.doubleHit / 100);
    numberOfUnbreakable = Math.round(numberOfBricks * this.unbreakable / 100);
    bricks = [];

    for (i = _i = 1; 1 <= numberOfSingleHit ? _i <= numberOfSingleHit : _i >= numberOfSingleHit; i = 1 <= numberOfSingleHit ? ++_i : --_i) {
      bricks.push({
        hits: 1
      });
    }

    for (j = _j = 1; 1 <= numberOfUnbreakable ? _j <= numberOfUnbreakable : _j >= numberOfUnbreakable; j = 1 <= numberOfUnbreakable ? ++_j : --_j) {
      bricks.push({
        unbreakable: true
      });
    }

    for (k = _k = 1; 1 <= numberOfDoubleHit ? _k <= numberOfDoubleHit : _k >= numberOfDoubleHit; k = 1 <= numberOfDoubleHit ? ++_k : --_k) {
      bricks.push({
        hits: 2
      });
    }

    bricks = this._setRewards(bricks);
    bricks = this._shuffle(bricks);
    bricks = this._setPosition(bricks);
    return bricks;
  };

  BricksGenerator.prototype._getRandomInRange = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  BricksGenerator.prototype._setPosition = function(bricks) {
    var columnInP, columnWidth, columnsNo, gutterX, gutterXinP, gutterY, gutterYinP, h, item, marginX, marginXinP, marginY, marginYinP, marginYinPBottom, number, rowHeight, rowInP, rowsNo, w, x, y, _i, _len;
    marginXinP = 10;
    marginYinP = 10;
    marginYinPBottom = 50;
    gutterXinP = 2;
    gutterYinP = 2;
    columnsNo = 10;
    rowsNo = Math.ceil(bricks.length / columnsNo);
    columnInP = (100 - (marginXinP * 2) - (columnsNo - 1) * gutterXinP) / columnsNo;
    rowInP = (100 - marginYinP - marginYinPBottom - (rowsNo - 1) * gutterYinP) / rowsNo;
    marginX = this.canvas.width * marginXinP * 0.01;
    gutterX = this.canvas.width * gutterXinP * 0.01;
    columnWidth = this.canvas.width * columnInP * 0.01;
    marginY = this.canvas.height * marginYinP * 0.01;
    gutterY = this.canvas.height * gutterYinP * 0.01;
    rowHeight = this.canvas.height * rowInP * 0.01;
    x = marginX + columnWidth / 2;
    y = marginY + rowHeight / 2;
    w = columnWidth;
    h = rowHeight;
    for (number = _i = 0, _len = bricks.length; _i < _len; number = ++_i) {
      item = bricks[number];
      if (number % columnsNo === 0) {
        x = marginX + columnWidth / 2;
        if (number > 0) {
          y += rowHeight + gutterY;
        }
      }
      item.x = x;
      item.y = y;
      item.w = w;
      item.h = h;
      x += columnWidth + gutterX;
    }
    return bricks;
  };

  BricksGenerator.prototype._setRewards = function(bricks) {
    var item, number, numberOfBricksWithReward, _i, _len;
    numberOfBricksWithReward = Math.round(bricks.length * 0.05);
    for (number = _i = 0, _len = bricks.length; _i < _len; number = ++_i) {
      item = bricks[number];
      if (number < numberOfBricksWithReward) {
        item.hasReward = true;
      } else {
        break;
      }
    }
    return bricks;
  };

  BricksGenerator.prototype._shuffle = function(array) {
    var current, tmp, top;
    tmp = void 0;
    current = void 0;
    top = array.length;
    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }
    return array;
  };

  Game.BricksGenerator = BricksGenerator;

}(Game));