+function (global, $) {
  'use strict';

  var position = 0, zIndex = 0;

  var SlidePanel = function(element, options) {
    this.init(element, options);
  };

  SlidePanel.DEFAULTS = {
    overlayClass: 'mdm-overlay',
    bodyClass: 'mdm-body',
    dirClass: 'mdm-left-panel',
    slideInClass: 'mdm-slide-in-left',
    slideOutClass: 'mdm-slide-out',
    overlayTemplate: '<div id="overlay" class="mdm-overlay"></div>'
  };

  SlidePanel.prototype.init = function(element, options) {
    this.$element = $(element);
    this.options = options;
    this.$panel = $('#'+options.panel);
    var _this = this;

    if(position == 0) {
      $('body').prepend(this.options.overlayTemplate);
      $('#overlay').click(function() {
        _this.slide();
      });
    }

    this.$overlay = $('#overlay');

    if($('body').css('zIndex') == 'auto') {
      zIndex = 0;
    } else {
      zIndex = $('body').css('zIndex');
    }
    
    this.$element.css('zIndex', zIndex+1);
    this.$overlay.css('zIndex', zIndex+1);
    this.$panel.css('zIndex', zIndex+2);      

    this.$panel.removeClass(this.options.dirClass);
    this.$panel.addClass(this.options.dirClass);
    this.$panel.addClass(this.options.slideInClass);

    this.slide();
  };

  SlidePanel.prototype.slide = function() {
    if(position%2 == 0) {
      this.$panel.removeClass(this.options.slideOutClass);
      this.$panel.addClass(this.options.slideInClass);
      $('.wrapper').addClass(this.options.slideInClass);
      $('body').addClass('mdm-hide-overflow');
      this.$overlay.css('display', 'block');
    } else {
      this.$panel.removeClass(this.options.slideInClass);
      this.$panel.addClass('mdm-slide-out');
      $('.wrapper').removeClass(this.options.slideInClass);
      $('body').removeClass('mdm-hide-overflow');
      this.$overlay.css('display', 'none');
    }

    position++;
  };

  function Plugin() {
    return this.each(function () {
      var $this   = $(this);
      var options = $.extend({}, SlidePanel.DEFAULTS, $this.data());
      new SlidePanel(this, options);
    });
  };

  var old = $.fn.button;

  $.fn.slidepanel = Plugin;
  $.fn.slidepanel.Constructor = SlidePanel;

} (this, jQuery);