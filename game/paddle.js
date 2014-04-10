(function(Game, Engine) {
  'use strict';

  var Paddle = function(engine, options) {
    this.engine = engine;
    this.cx = options.x;
    this.cy = options.y;
    this.w = 200;
    this.h = 50;
    this.x = this.cx - this.w/2;
    this.y = this.cy - this.h/2;
  };

  // inherit from Entity class
  Paddle.prototype = Object.create(Engine.Entity.prototype);

  // Paddle methods
  Paddle.prototype.render = function(ctx) {
    ctx.fillStyle = "#9DE51A";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  Game.Paddle = Paddle;

})(Game, Engine);