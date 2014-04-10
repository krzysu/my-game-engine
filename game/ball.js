(function(Game, Engine) {
  'use strict';

  var Ball = function(engine, options) {
    // this.options = options;
    this.engine = engine;
    this.x = options.x;
    this.y = options.y;
    this.radius = options.radius || 36;
    this.w = this.radius * 2;
    this.h = this.radius * 2;
    this.vx = 400;
    this.vy = 400;
  };

  // inherit from Entity class
  Ball.prototype = Object.create(Engine.Entity.prototype);

  // Ball methods
  Ball.prototype.render = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#9DE51A";
    ctx.fill();
  };

  Ball.prototype.step = function(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;

    // right border collision
    if(this.x + this.w/2 > this.engine.canvas.width) {
      this.vx = -Math.abs(this.vx);
    }
    // left border collision
    if(this.x - this.w/2 < 0) {
      this.vx = Math.abs(this.vx);
    }
    // bottom border collision
    if(this.y + this.h/2 > this.engine.canvas.height) {
      this.vy = -Math.abs(this.vy);
    }
    // top border collision
    if(this.y - this.h/2 < 0) {
      this.vy = Math.abs(this.vy);
    }
  };

  Game.Ball = Ball;

})(Game, Engine);