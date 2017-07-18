! function() {
    var e = document.getElementById("circle5"),
        t = echarts.init(e);
    option = { title: { text: "￥12,550", subtext: "客座率,同比+12%", left: "center", top: "110", textStyle: { fontSize: 26, fontWeight: "normal", color: "#158fe4" } }, series: [{ name: "旅客量", type: "pie", radius: ["60%", "70%"], startAngle: 340, label: { normal: { show: !1 } }, labelLine: { normal: { show: !1 } }, data: [{ value: 6, itemStyle: { normal: { color: "#63d8ff" } } }, { value: 94, itemStyle: { normal: { color: "#158fe4" } } }] }] }, option && "object" == typeof option && t.setOption(option, !0)
}(window, jQuery);