(function(Engine) {
  'use strict';

  /**
   * scene is responsible for grouping and managing entieties
   * @param {String} [name] - id of the scene
   * @param {Object} [options]
   */
  var Scene = function(name, options) {
    this.name = name || "";
    this.entities = [];
    this.frameTimeLimit = 60;
  };

  /**
   * add entity to scene
   * @param {Entity} [entity] - entity object to be added to stage
   * @return {Entity} entity
   */
  Scene.prototype.add = function(entity) {
    this.entities.push(entity);
  };

  /**
   * render all entities from this scene in game loop
   */
  Scene.prototype.render = function() {
    this.gameLoop(this.renderEntities);
  };

  /**
   * just render entities
   */
  Scene.prototype.renderEntities = function(dt) {
    var i;
    var length = this.entities.length;

    this.clear();

    for (i = 0; i < length; i++) {
      if(typeof this.entities[i].collisionObj === "undefined") {
        this.entities[i].collisionObj = {};
      }
      this.entities[i].step(dt);
      this.entities[i].render(this.ctx);
    };

    this.checkCollision();
  };

  /**
   * clear canvas
   */
  Scene.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  /**
   * game loop
   * @param  {Function} [callback] - callback to be run in each loop
   */
  Scene.prototype.gameLoop = function(callback) {
    var that = this;
    this.lastGameLoopFrame = new Date().getTime();

    // Wrap the callback to save it and standardize the passed in time.
    var gameLoopCallbackWrapper = function() {
      var now = new Date().getTime();
      window.requestAnimationFrame(gameLoopCallbackWrapper);

      var dt = now - that.lastGameLoopFrame;
      if(dt > that.frameTimeLimit) { dt = that.frameTimeLimit; }
      callback.apply(that, [dt/1000]);
      that.lastGameLoopFrame = now;
    };

    window.requestAnimationFrame(gameLoopCallbackWrapper);
  };

  Scene.prototype.checkCollision = function() {
    var i, j, current, checked;
    var length = this.entities.length;

    // check combination of all entities
    for (i = 0; i < length; i++) {
      for (j = i + 1; j < length; j++) {
        current = this.entities[i];
        checked = this.entities[j];

        if(typeof current.collisionObj[checked.id] === "undefined") {
          current.collisionObj[checked.id] = {};
        }

        current.collisionObj[checked.id].collide = this.collide(current, checked);
      }
    }
  };

  Scene.prototype.collide = function(object1, object2) {
    if(object1.x < object2.x + object2.w
      && object1.x + object1.w  > object2.x
      && object1.y < object2.y + object2.h
      && object1.y + object1.h > object2.y) {
        // debugger;
        return true;
    }
    return false;
  };

  Engine.Scene = Scene;

})(Engine);