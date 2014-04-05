(function(window) {
  'use strict';

  /**
   * main class for game engine
   * @param {String} [canvasId] - id of DOM canvas element
   */
  window.Engine = function(canvasId) {
    this.touchDevice = ('ontouchstart' in document);
    this.createCanvas(canvasId);
  };

  /**
   * create canvas and context for drawing
   * @param {String} [canvasId] - id of DOM canvas element
   */
  Engine.prototype.createCanvas = function(canvasId) {
    this.el = document.getElementById(canvasId);
    this.ctx = this.el.getContext('2d');

    // take full screen
    var w = window.innerWidth;
    var h = window.innerHeight;

    this.el.style.width = w + "px";
    this.el.style.height = h + "px";
    this.el.width = w;
    this.el.height = h;

    this.canvas = {
      width: w,
      height: h
    };
  };

  /**
   * create new scene
   * @return {Scene} scene object
   */
  Engine.prototype.scene = function() {
    var scene = new Engine.Scene();
    scene.ctx = this.ctx;
    scene.canvas = this.canvas;
    return scene;
  };

})(window);