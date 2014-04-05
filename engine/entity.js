(function(Engine) {
  'use strict';

  /**
   * entity represents single object in a game
   * @param {Object} [options]
   */
  var Entity = function(options) {
    this.options = options;
  };

  Entity.prototype.render = function() {
    //
  };

  Entity.prototype.step = function() {
    //
  };

  Engine.Entity = Entity;

})(Engine);