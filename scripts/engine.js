var Engine = function(canvasId) {
  this.el = document.getElementById(canvasId);
  this.ctx = this.el.getContext('2d');

  this.touchDevice = ('ontouchstart' in document);

  // take full screen
  var w = window.innerWidth;
  var h = window.innerHeight;

  this.el.style.width = w + "px";
  this.el.style.height = h + "px";
  this.el.width = w;
  this.el.height = h;

  this.width = w;
  this.height = h;

}