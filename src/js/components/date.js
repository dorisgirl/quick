! function(i, n) {
    var t = { init: function() { n(".input-date .input").flatpickr({ minDate: "today" }) } };
    t.init()
}(window, jQuery);