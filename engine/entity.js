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
    console.log('entity', this.options);
  };

  Engine.Entity = Entity;

})(Engine);