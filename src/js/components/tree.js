! function(t, i) {
    var n = { init: function() { this.bindEvents() }, bindEvents: function() { i("body").on("click", ".tree-parent", this.toggleTree.bind(this)) }, toggleTree: function(t) { i(t.target).closest("li").toggleClass("active") } };
    n.init()
}(window, jQuery);