! function(t, i) {
    var s = {
        init: function() { this.bindEvents() },
        bindEvents: function() { i("body").on("click", ".chart-toggle", this.toggle.bind(this)) },
        toggle: function(t) {
            var s = i(t.target).closest(".chart-toggle"),
                e = i(t.target).closest("a");
            s.toggleClass("active").prev().toggleClass("hide"), e.html(s.hasClass("active") ? '展开更多<div class="chart-toggle-icon"></div>' : '收起<div class="chart-toggle-icon"></div>')
        }
    };
    s.init()
}(window, jQuery);