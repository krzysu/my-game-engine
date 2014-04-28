
(function(window, Engine) {
  'use strict';

  var Game = window.Game || {};

  Game.init = function() {
    // init canvas
    var engine = new Engine('game-canvas');
    this.engine = engine;

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
      x: engine.canvas.width / 2,
      y: engine.canvas.height - 50
    });

    level1.add(ball);
    level1.add(ball2);
    level1.add(ball3);
    level1.add(ball4);
    level1.add(paddle);

    this.addBricks(level1);

    // render all level entities in the game loop
    level1.render();
  };

  Game.addBricks = function(scene) {

    // set up bricks generator
    var generator = new Game.BricksGenerator({
      singleHit: 70, // in %
      doubleHit: 20,
      unbreakable: 10,
      range: [50, 65], // amount of bricks
      canvas: this.engine.canvas
    });

    // generate bricks and add them to the scene
    var bricks = generator.run();
    var i, brickLength = bricks.length;
    var brick = {};

    for(i = 0; i < brickLength; i++) {
      brick = new Game.Brick(this.engine, bricks[i]);
      scene.add(brick);
    }
  };

  window.Game = Game;

}(window, Engine));