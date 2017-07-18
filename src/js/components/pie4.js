! function() {
    var e = document.getElementById("pie4"),
        t = echarts.init(e);
    option = { title: { text: "渠道收入", left: "center", top: "center", textStyle: { fontSize: 14, fontWeight: "normal" } }, series: [{ name: "渠道收入", type: "pie", radius: ["40%", "70%"], center: ["50%", "50%"], data: [{ value: 335, name: "某种类1", itemStyle: { normal: { color: "#feb646" } } }, { value: 335, name: "某种类2", itemStyle: { normal: { color: "#158fe4" } } }, { value: 335, name: "某种类3", itemStyle: { normal: { color: "#c491f7" } } }], label: { normal: { textStyle: { color: "#333" }, formatter: "{b}\n{c}万\n{d}%" } } }] }, option && "object" == typeof option && t.setOption(option, !0)
}(window, jQuery);