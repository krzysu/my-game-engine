(function() {
  /**
   * scene is responsible for grouping and managing entieties
   * @param {String} [name] - id of the scene
   * @param {Object} [options]
   */
  var Scene = function(name, options) {
    this.name = name || "";
  };

  /**
   * add entity to scene
   * @param {Entity} [entity] - entity object to be added to stage
   * @return {Entity} entity
   */
  Scene.prototype.add = function(entity) {
    // body...
  };

  /**
   * render scene and all entitites
   */
  Scene.prototype.render = function() {
    // body...
  };

  Engine.Scene = Scene;

})();