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
      this.entities[i].step(dt);
      this.entities[i].render(this.ctx);
    };
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
      callback.apply(that, [dt/1000]);
      that.lastGameLoopFrame = now;
    };

    window.requestAnimationFrame(gameLoopCallbackWrapper);
  };

  Engine.Scene = Scene;

})(Engine);