+function (global, $) {
  'use strict';

  var position = 0, z_index = 0;

  var SlidePanel = function(element, options) {
    this.init(element, options);
  };

  SlidePanel.DEFAULTS = {
    overlayClass: 'mdm-overlay',
    bodyClass: 'mdm-body',
    overlayTemplate: '<div id="overlay" class="mdm-overlay"></div>'
  };

  SlidePanel.prototype.init = function(element, options) {
    this.$element = $(element);
    this.options = options;
    var _this = this;
    
    if(position == 0) {
      $('body').append(this.options.overlayTemplate);
      this.$overlay = $('#overlay');
      this.$overlay.click(function() {
        _this.slide();
      });
      
      if($('body').css('zIndex') == 'auto') {
        z_index = 0;
      } else {
        z_index = $('body').css('zIndex');
      }
      
      this.$element.css('zIndex', z_index+1);
      this.$overlay.css('zIndex', z_index+1);
    }
  };

  SlidePanel.prototype.slide = function() {
    
  };

  function Plugin() {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('panel');
      var options = $.extend({}, SlidePanel.DEFAULTS, $this.data());

      if(data) {
        new SlidePanel(this, options);
      }
    });
  };

  var old = $.fn.button;

  $.fn.slidepanel = Plugin;
  $.fn.slidepanel.Constructor = SlidePanel;

} (this, jQuery);