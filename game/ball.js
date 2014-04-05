(function(Game, Engine) {
  'use strict';

  var Ball = function(options) {
    // this.options = options;
    this.x = options.x;
    this.y = options.y;
    this.radius = options.radius || 50;
    this.speed = 200;
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
    this.x += this.speed * dt;
    this.y += this.speed * dt;
  };

  Game.Ball = Ball;

})(Game, Engine);