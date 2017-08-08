! function(i, n) {
    var t = {
        init: function() { this.bindEvents() },
        bindEvents: function() { 
            n("body").on("click", ".form li", this.hideLabel.bind(this)), 
            n("body").on("blur", ".form input", this.showLabel.bind(this)), 
            n("body").on("change", ".form select", this.showLabel.bind(this)) 
        },
        hideLabel: function(i) {
            var t = n(i.target).closest("li");
            t.find(".form-label").addClass("hide")
        },
        showLabel: function(i) {
            var t = n(i.target).closest("li");
            ("" == t.find("input").val() || "" == t.find("select").val()) && t.find(".form-label").removeClass("hide")
        }
    };
    t.init()
}(window, jQuery);