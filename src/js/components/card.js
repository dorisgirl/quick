! function(t, i) {
    var a = {
        init: function() { this.bindEvents() },
        bindEvents: function() { i("body").on("click", ".card-header .card-arrow", this.toggleCard.bind(this)), i("body").on("click", ".card-main .card-arrow", this.toggleChild.bind(this)) },
        toggleCard: function(t) { i(t.target).closest(".card").toggleClass("active") },
        toggleChild: function(t) {
            var a = i(t.target)[0].dataset.child;
            console.log(a), i(t.target).toggleClass("active"), i("." + a).toggleClass("hide")
        }
    };
    a.init()
}(window, jQuery);