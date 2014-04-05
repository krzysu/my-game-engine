(function(window) {
  'use strict';

  window.Game = window.Game || {};

  Game.init = function() {
    // init canvas
    var engine = new Engine('game-canvas');

    // init scene and add entities
    var level1 = engine.scene('level1');

    var ball = new Game.Ball({
      x: engine.canvas.width/2,
      y: engine.canvas.height/2
    });

    var paddle = new Game.Paddle({
      x: engine.canvas.width/2,
      y: engine.canvas.height - 100
    });

    level1.add(ball);
    level1.add(paddle);
    level1.render();
  };

})(window);