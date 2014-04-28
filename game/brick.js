(function(Game, Engine) {
  'use strict';

  var Brick = function(engine, options) {
    this.engine = engine;
    this.id = "brick";
    this.cx = options.x;
    this.cy = options.y;
    this.w = options.w || 50;
    this.h = options.h || 50;
    this.hits = options.hits || 1;
    this.unbreakable = options.unbreakable || false;
    this.hasReward = options.hasReward || false;

    this.updateCoordinates();
  };

  // inherit from Entity class
  Brick.prototype = Object.create(Engine.Entity.prototype);

  // Brick methods
  Brick.prototype.render = function(ctx) {
    this.setColor();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  Brick.prototype.setColor = function() {
    if(this.hits === 2) {
      this.color = "#FF1CBA";
    }

    if(this.hits === 1) {
      this.color = "#FFABE3";
    }

    if(this.unbreakable === true) {
      this.color = "#7F3469";
    }
  };

  Brick.prototype.updateCoordinates = function() {
    this.x = Math.floor(this.cx - this.w/2);
    this.y = Math.floor(this.cy - this.h/2);
  };

  Game.Brick = Brick;

}(Game, Engine));