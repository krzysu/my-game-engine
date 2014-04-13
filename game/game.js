(function(window) {
  'use strict';

  window.Game = window.Game || {};

  Game.init = function() {
    // init canvas
    var engine = new Engine('game-canvas');

    // init scene and add entities
    var level1 = engine.scene('level1');

    var ball = new Game.Ball(engine);

    var ball2 = new Game.Ball(engine, {
      id: "ball2",
      vx: -400,
      vy: -400,
      color: "#FFABE3"
    });

    var ball3 = new Game.Ball(engine, {
      id: "ball3",
      vx: 600,
      vy: -600,
      color: "#FF1CBA"
    });

    var ball4 = new Game.Ball(engine, {
      id: "ball4",
      vx: -500,
      vy: 500,
      color: "#7F3469"
    });

    var paddle = new Game.Paddle(engine, {
      x: engine.canvas.width/2,
      y: engine.canvas.height - 100
    });

    level1.add(ball);
    level1.add(ball2);
    level1.add(ball3);
    level1.add(ball4);
    level1.add(paddle);
    level1.render();
  };

})(window);