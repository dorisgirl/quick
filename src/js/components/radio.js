! function(i, n) {
    var t = { init: function() { this.bindEvents() }, bindEvents: function() { n("body").on("click", ".radio", this.selectRadio.bind(this)) }, selectRadio: function(i) { n(i.target).addClass("active").siblings().removeClass("active") } };
    t.init()
}(window, jQuery);