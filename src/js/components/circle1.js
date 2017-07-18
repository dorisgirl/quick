! function() {
    var t = document.getElementById("circle1"),
        e = echarts.init(t);
    option = { title: { text: "￥12,550", subtext: "航段均价,同比+12%", left: "center", top: "110", textStyle: { fontSize: 26, fontWeight: "normal", color: "#f99a29" } }, series: [{ name: "航段均价", type: "pie", radius: ["60%", "70%"], startAngle: 340, label: { normal: { show: !1 } }, labelLine: { normal: { show: !1 } }, data: [{ value: 6, itemStyle: { normal: { color: "#ffd800" } } }, { value: 94, itemStyle: { normal: { color: "#f1a837" } } }] }] }, option && "object" == typeof option && e.setOption(option, !0)
}(window, jQuery);