(function(Game, Engine) {
  'use strict';

  var Ball = function(engine, options) {
    // this.options = options;
    this.engine = engine;
    this.id = options.id || "ball";
    this.cx = options.x;
    this.cy = options.y;
    this.radius = options.radius || 36;
    this.w = this.radius * 2;
    this.h = this.radius * 2;
    this.vx = options.vx || 400;
    this.vy = options.vy || 400;
    this.color = options.color || "#9DE51A";
    this.initialColor = this.color;

    this.updateCoordinates();
  };

  // inherit from Entity class
  Ball.prototype = Object.create(Engine.Entity.prototype);

  // Ball methods
  Ball.prototype.render = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x + this.w/2, this.y + this.h/2, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  Ball.prototype.updateCoordinates = function() {
    this.x = Math.floor(this.cx - this.w/2);
    this.y = Math.floor(this.cy - this.h/2);
  };

  Ball.prototype.step = function(dt) {
    if(typeof this.collisionObj['paddle'] !== "undefined" && this.collisionObj['paddle'].collide === true) {
      this.color = "#ffffff";
    }
    else {
      this.color = this.initialColor;
    }

    this.cx += this.vx * dt;
    this.cy += this.vy * dt;

    // right border collision
    if(this.cx + this.w/2 > this.engine.canvas.width) {
      this.vx = -Math.abs(this.vx);
    }
    // left border collision
    if(this.cx - this.w/2 < 0) {
      this.vx = Math.abs(this.vx);
    }
    // bottom border collision
    if(this.cy + this.h/2 > this.engine.canvas.height) {
      this.vy = -Math.abs(this.vy);
    }
    // top border collision
    if(this.cy - this.h/2 < 0) {
      this.vy = Math.abs(this.vy);
    }

    this.updateCoordinates();
  };

  Game.Ball = Ball;

})(Game, Engine);