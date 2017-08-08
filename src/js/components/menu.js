! function(i, t) {
    var n = {
        init: function() {
            this.index = 0;
            this.position = 0;
            this.menuWidth = [];
            this.totleWidth = 0;
            this.remainingWidth = 0;
            this.initMenuWitdh();
            this.bindEvents()
        },
        bindEvents: function() {
            t("body").on("click", ".menu-switch", this.toggleSidebar.bind(this));
            t("body").on("click", this.hideSidebar.bind(this));
            t("body").on("click", ".menu-close", this.removeMenu.bind(this));
            t("body").on("click", ".menu li", this.switchMenu.bind(this));
            t("body").on("click", ".menu-prev", this.prevMenu.bind(this));
            t("body").on("click", ".menu-next", this.nextMenu.bind(this));
            t(window).on("scroll", this.fixedMenu.bind(this));
        },
        initMenuWitdh: function() {
            var i = this;
            t(".menu li").each(function() {
                i.menuWidth.push(t(this).width());
                i.totleWidth += t(this).width() + 22;
            });
            i.remainingWidth = i.totleWidth;
            console.log(this.totleWidth);
            this.totleWidth > 1055 && t(".menu-next").addClass("active");
        },
        toggleSidebar: function(e) {
            e.stopPropagation();
            t(".layout-r1c1").toggleClass("hide")
        },
        hideSidebar: function() { t(".layout-r1c1").addClass("hide") },
        removeMenu: function(i) {
            i.stopPropagation();
            var n = t(i.target).closest("li"),
                e = n.index();
            n.remove();
            this.prevMenu();
            this.menuWidth.splice(e, 1);
        },
        switchMenu: function(i) {
            t(i.target).closest("li").addClass("active").siblings("li").removeClass("active")
        },
        prevMenu: function() {
            var i = this;
            if (i.remainingWidth <= i.totleWidth) {
                this.position = this.position + i.menuWidth[this.index - 1] + 22;
                t(".menu ul").animate({
                    left: this.position
                });
                console.log(this.index, i.menuWidth[this.index]);
                i.remainingWidth += (i.menuWidth[this.index] + 22);
                this.index--;
                t(".menu-next").addClass("active");
                if (this.index === 0) {
                    t(".menu-prev").removeClass("active")
                }
            }
        },
        nextMenu: function() {
            var i = this;
            if (i.remainingWidth > 1055) {
                this.position = this.position - (i.menuWidth[this.index] + 22);
                t(".menu ul").animate({
                    left: this.position
                });
                console.log(this.index, i.menuWidth[this.index]);
                i.remainingWidth -= (i.menuWidth[this.index] + 22);
                this.index++;
                t(".menu-prev").addClass("active");
            } else {
                t(".menu-next").removeClass("active")
            }
        },
        fixedMenu: function() {
            if (t(window).scrollTop() > 90) {
                $('.menu').addClass('menu-fixed');
            } else {
                $('.menu').removeClass('menu-fixed');
            }
        }
    };
    n.init()
}(window, jQuery);