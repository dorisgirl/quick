! function(i, t) {
    var n = { init: function() { this.bindEvents() }, bindEvents: function() { t("body").on("click", ".product-header-toggle", this.switch.bind(this)) }, "switch": function(i) { t(i.target).closest(".product-header").toggleClass("active").siblings().toggleClass("hide") } };
    n.init()
}(window, jQuery);