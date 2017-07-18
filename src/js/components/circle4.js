! function() {
    var t = document.getElementById("circle4"),
        e = echarts.init(t);
    option = { title: { text: "￥12,550", subtext: "客座率,同比+12%", left: "center", top: "110", textStyle: { fontSize: 26, fontWeight: "normal", color: "#f57d25" } }, series: [{ name: "旅客量", type: "pie", radius: ["60%", "70%"], startAngle: 340, label: { normal: { show: !1 } }, labelLine: { normal: { show: !1 } }, data: [{ value: 6, itemStyle: { normal: { color: "#ffc148" } } }, { value: 94, itemStyle: { normal: { color: "#f57d25" } } }] }] }, option && "object" == typeof option && e.setOption(option, !0)
}(window, jQuery);