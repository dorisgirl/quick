! function(i, n) {
    var t = {
        init: function() {
            n(".input-date .input").flatpickr({
                minDate: "today",
                disableMobile: "true"
            })
        }
    };
    t.init()
}(window, jQuery);