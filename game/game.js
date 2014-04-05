(function(window) {
  'use strict';

  window.Game = window.Game || {};

  Game.init = function() {
    // init canvas
    var engine = new Engine('game-canvas');

    // init scene and add entities
    var level1 = engine.scene('level1');

    var paddle = engine.entity({
      id: 'paddle',
      x: engine.canvas.width/2,
      y: engine.canvas.height - 50
    });

    var ball = new Game.Ball({
      id: 'ball',
      x: engine.canvas.width/2,
      y: engine.canvas.height/2
    });

    level1.add(ball);
    level1.add(paddle);
    level1.render();
  };

})(window);