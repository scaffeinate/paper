+function (global, $) {
  'use strict';

  var position = 0;

  var SlidePanel = function(element, options) {
    this.init();
  };

  SlidePanel.DEFAULTS = {
    overlayClassName: 'mdm-overlay',
  };

  SlidePanel.prototype.init = function() {
    if(position == 0) {
      
    }
  };

  SlidePanel.prototype.slide = function() {

  };

  var Plugin = function(){
    var slide = new SlidePanel();
  };

  var old = $.fn.button;

  $.fn.slidepanel = Plugin;
  $.fn.slidepanel.Constructor = SlidePanel;

} (this, jQuery);