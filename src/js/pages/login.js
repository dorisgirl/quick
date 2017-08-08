(function(window, $) {
    var login = {
        init: function() {
            this.bindEvent();
        },
        bindEvent: function() {
            $('body').on('click', '.login-language a', this.changeLanguage.bind(this));
        },
        changeLanguage: function(e) {
            $(e.target).addClass('active').siblings().removeClass('active');
        }
    }
    login.init();
})(window, jQuery);