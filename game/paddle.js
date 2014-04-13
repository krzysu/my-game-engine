(function(Game, Engine) {
  'use strict';

  var __bind = function(fn, me) {
    return function() {
      return fn.apply(me, arguments);
    };
  };

  var Paddle = function(engine, options) {
    this.engine = engine;
    this.id = "paddle";
    this.cx = options.x;
    this.cy = options.y;
    this.w = this.engine.canvas.width/3;
    this.h = 50;
    this.speed = 800;
    this.newX = null;

    this.updateCoordinates();

    this.onMouseClick = __bind(this.onMouseClick, this);
    this.engine.el.addEventListener('click', this.onMouseClick, false);
    this.engine.el.addEventListener('touchstart', this.onMouseClick, false);
  };

  // inherit from Entity class
  Paddle.prototype = Object.create(Engine.Entity.prototype);

  // Paddle methods
  Paddle.prototype.render = function(ctx) {
    ctx.fillStyle = "#7F3469";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  Paddle.prototype.step = function(dt) {

    // check range around destination point
    if(this.newX - this.speed * dt < this.cx && this.newX + this.speed * dt > this.cx) {
      this.newX = null
    };

    // check if we should move to newX
    if(this.newX !== null && this.newX !== this.cx && this.newX > this.cx) {
      this.cx += this.speed * dt;
    }
    else if(this.newX !== null && this.newX !== this.cx && this.newX < this.cx) {
      this.cx -= this.speed * dt;
    }

    if(this.newX === this.cx) {
      this.newX = null;
    }

    // do not go out of game borders
    if(this.cx + this.w/2 > this.engine.canvas.width) {
      this.cx = this.engine.canvas.width - this.w/2;
    }

    if(this.cx - this.w/2 < 0) {
      this.cx = this.w/2;
    }

    this.updateCoordinates();
  }

  Paddle.prototype.updateCoordinates = function() {
    this.x = Math.floor(this.cx - this.w/2);
    this.y = Math.floor(this.cy - this.h/2);
  };

  Paddle.prototype.onMouseClick = function(e) {
    var event = e.touches ? e.touches[0] : e;

    if(event.pageY > this.engine.canvas.height/2) {
      this.newX = event.pageX;
    }
  };

  Game.Paddle = Paddle;

})(Game, Engine);