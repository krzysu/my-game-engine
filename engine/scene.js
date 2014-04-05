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
   * render all entities from this scene
   */
  Scene.prototype.render = function() {
    var i;
    var length = this.entities.length;

    for (i = 0; i < length; i++) {
      this.entities[i].render(this.ctx);
    };
  };

  Engine.Scene = Scene;

})(Engine);