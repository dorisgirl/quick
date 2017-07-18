! function(i, t) {
    var n = {
        init: function() { this.index = 0, this.position = 0, this.menuWidth = [], this.totleWidth = 0, this.initMenuWitdh(), this.bindEvents() },
        bindEvents: function() { t("body").on("click", ".menu-switch", this.toggleSidebar.bind(this)), t("body").on("click", ".menu-close", this.removeMenu.bind(this)), t("body").on("click", ".menu li", this.switchMenu.bind(this)), t("body").on("click", ".menu-prev", this.prevMenu.bind(this)), t("body").on("click", ".menu-next", this.nextMenu.bind(this)) },
        initMenuWitdh: function() {
            var i = this;
            t(".menu li").each(function() { i.menuWidth.push(t(this).width()), i.totleWidth += t(this).width() + 22 }), console.log(this.totleWidth), this.totleWidth > 1055 && t(".menu-next").addClass("active")
        },
        toggleSidebar: function() { t(".layout-r1c1").toggleClass("hide") },
        removeMenu: function(i) {
            i.stopPropagation();
            var n = t(i.target).closest("li"),
                e = n.index();
            n.remove(), this.menuWidth.splice(e, 1), console.log(this.menuWidth)
        },
        switchMenu: function(i) { t(i.target).closest("li").addClass("active").siblings("li").removeClass("active") },
        prevMenu: function() {
            var i = this;
            this.index > 0 && (this.position = this.position + (i.menuWidth[this.index - 1] + 22), t(".menu ul").animate({ left: this.position }), console.log(this.index, i.menuWidth[this.index]), this.index--, t(".menu-next").addClass("active"), 0 == this.index && t(".menu-prev").removeClass("active"))
        },
        nextMenu: function() {
            var i = this;
            this.index < this.menuWidth.length - 1 && (this.position = this.position - (i.menuWidth[this.index] + 22), t(".menu ul").animate({ left: this.position }), console.log(this.index, i.menuWidth[this.index]), this.index++, t(".menu-prev").addClass("active"), this.index == this.menuWidth.length - 1 && t(".menu-next").removeClass("active"))
        }
    };
    n.init()
}(window, jQuery);