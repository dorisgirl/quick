! function(i, $) {
    var n = {
        init: function() { this.bindEvents() },
        bindEvents: function() {
            $("body").on("click", ".tab li", this.switch.bind(this))
        },
        switch: function(e) {
            var $li = $(e.target).closest("li");
            var index = $li.index();
            $li.addClass("active").siblings().removeClass("active");
            $('.tab-panel').addClass('hide');
            $('.tab-panel').eq(index).removeClass("hide");
        }
    };
    n.init()
}(window, jQuery);