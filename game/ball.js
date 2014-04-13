(function(Game, Engine) {
  'use strict';

  var Ball = function(engine, options) {
    if (typeof options === "undefined") {
      options = {};
    }

    this.engine = engine;
    this.id = options.id || "ball";
    this.cx = options.x || this.engine.canvas.width/2;
    this.cy = options.y || this.engine.canvas.height/2;
    this.radius = options.radius || 36;
    this.w = this.radius * 2;
    this.h = this.radius * 2;
    this.vx = options.vx || 400;
    this.vy = options.vy || 400;
    this.color = options.color || "yellow";
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
    var colPaddle = this.collisionObj['paddle'];
    if(typeof colPaddle !== "undefined" && colPaddle.collide === true) {
      this.color = "#ffffff";

      this.vy = -this.vy;
      // this.vx = -this.vx;
    }
    else {
      this.color = this.initialColor;

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
    }

    this.cx += this.vx * dt;
    this.cy += this.vy * dt;

    this.updateCoordinates();
  };

  Game.Ball = Ball;

})(Game, Engine);