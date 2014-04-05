(function(Game, Engine) {
  'use strict';

  var Ball = function(options) {
    this.options = options;
  };

  // inherit from Entity class
  Ball.prototype = Object.create(Engine.Entity.prototype);

  // Ball methods
  Ball.prototype.xx = function() {
    console.log('xx');
  };

  Game.Ball = Ball;

})(Game, Engine);