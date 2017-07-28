(function(window, $) {
    var togglePercent = {
        init: function() {
            this.bindEvent();
        },
        bindEvent: function() {
            $('body').on('click', '.table-percent-show', this.show.bind(this));
            $('body').on('click', '.table-percent-hide', this.hide.bind(this));
        },
        show: function() {
            $('.table-percent').show();
        },
        hide: function() {
            $('.table-percent').hide();
        }
    }
    togglePercent.init();
})(window, jQuery);