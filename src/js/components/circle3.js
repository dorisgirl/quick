! function() {
    var t = document.getElementById("circle3"),
        e = echarts.init(t);
    option = { title: { text: "￥12,550", subtext: "航段均价,同比+12%", left: "center", top: "110", textStyle: { fontSize: 26, fontWeight: "normal", color: "#39c940" } }, series: [{ name: "旅客量", type: "pie", radius: ["60%", "70%"], startAngle: 340, label: { normal: { show: !1 } }, labelLine: { normal: { show: !1 } }, data: [{ value: 6, itemStyle: { normal: { color: "#94f150" } } }, { value: 94, itemStyle: { normal: { color: "#39c940" } } }] }] }, option && "object" == typeof option && e.setOption(option, !0)
}(window, jQuery);