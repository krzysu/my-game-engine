(function(Engine) {
  'use strict';

  /**
   * entity represents single object in a game
   * consider this file as programming interface for game entities
   * @param {Object} [engine] reference to instance of game engine
   * @param {Object} [options] additional options, handled individually
   */
  var Entity = function(engine, options) {
    this.engine = engine;

    // width and height
    this.w = 0;
    this.h = 0;

    // left/top coordinates of entity on the screen
    this.x = 0;
    this.y = 0;

    // center of the entity on the screen
    this.cx = 0;
    this.cy = 0;

    // collision check sets collisionObject
    this.collisionObj = {};

    // id of the entity instance, should be unique to identify entity for collision
    this.id = "";

    // other options
    this.options = options;
  };

  /**
   * render method called in every game loop
   * use to render entity on the canvas
   * @param  {Object} [ctx] canvas context, used for drawing on canvas
   */
  Entity.prototype.render = function(ctx) {
    //
  };

  /**
   * render method called in every game loop
   * use to render entity on the canvas
   * @param  {Number} [dt] fraction of a second that has elapsed since the last call to the loop method
   */
  Entity.prototype.step = function(dt) {
    //
  };

  Engine.Entity = Entity;

})(Engine);