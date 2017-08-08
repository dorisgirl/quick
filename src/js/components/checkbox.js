! function(t, $) {
    var e = {
        init: function() {
            this.bindEvents()
        },
        bindEvents: function() {
            $("body").on("change", ".checkbox input", this.toggleCheckbox.bind(this))
        },
        toggleCheckbox: function(t) {
            var $this = $(t.target).closest(".checkbox");
            if (!$this.hasClass('disabled')) {
                $this.toggleClass("active");
                $(t.target).closest("tr").toggleClass("active")
            }
        }
    };
    e.init()
}(window, jQuery);