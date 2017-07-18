! function(n, t) {
    var i = { init: function() { this.bindEvents() }, bindEvents: function() { t("body").on("change", ".checkbox input", this.toggleCheckbox.bind(this)) }, toggleCheckbox: function(n) { t(n.target).closest(".checkbox").toggleClass("active") } };
    i.init()
}(window, jQuery);