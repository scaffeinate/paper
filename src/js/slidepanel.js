+function (global, $) {
  'use strict';

  var position = 0, zIndex = 0;

  var SlidePanel = function(element, options) {
    this.init(element, options);
  };

  SlidePanel.DEFAULTS = {
    overlayClass: 'overlay',
    bodyClass: 'body',
    dirClass: 'left-panel',
    wrapperClass: 'wrapper',
    slideInClass: 'slide-in-left',
    slideOutClass: 'slide-out',
    overlayTemplate: '<div class="overlay"></div>'
  };

  SlidePanel.prototype.init = function(element, options) {
    this.$element = $(element);
    this.options = options;
    this.$panel = $('#'+options.panel);
    this.$wrapper = $('.' + options.wrapperClass);
    var _this = this;

    if(position == 0) {
      $('body').prepend(this.options.overlayTemplate);
      $('.overlay').click(function() {
        _this.slide();
      });
    }

    this.$overlay = $('.overlay');

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
      this.$wrapper.addClass(this.options.slideInClass);
      this.$overlay.css('display', 'block');
    } else {
      this.$panel.removeClass(this.options.slideInClass);
      this.$panel.addClass('slide-out');
      this.$wrapper.removeClass(this.options.slideInClass);
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

  $(window).on('load', function () {
    $('body').find('[data-panel]').each(function () {
      var $this = $(this);
      $this.click(function(e){
        e.preventDefault();
        Plugin.call($this);
      });
    });
  });

} (this, jQuery);