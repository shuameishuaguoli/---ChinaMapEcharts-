// 引入echarts
import echarts from "echarts"
const install = function(Vue){
    // 将自定义的变量挂载到vue中 $charts
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get() {
                return{
                    // 编写自己的echarts
                    line:function(id){
                        // 初始化echarts
                        this.chart = echarts.init(document.querySelector(`#${id}`))
                        // 清理一下
                        this.chart.clear()
                        // 设置配置项
                        var option = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line'
                            }]
                        };
                        this.chart.setOption(option)
                    },
                    bing:function(id){
                        // 初始化echarts
                        this.chart = echarts.init(document.querySelector(`#${id}`))
                        // 清理一下
                        this.chart.clear()
                        var option = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line',
                                smooth: true
                            }]
                        }
                        this.chart.setOption(option)
                    },
                    chinaMap:function(id){
                        // 初始化
                        this.chart = echarts.init(document.querySelector(`#${id}`))
                        // 清除一下
                        this.chart.clear()
                        // 参数配置
                        var option = {
                            tooltip:{
                                formatter(data){
                                    // console.log(data);
                                    return "<div><p>"+data.seriesName+":"+data.name+"</p><p>现存确诊数："+data.value+"</p><a>详情</a></div>"
                                }
                            },
                            series: [{
                                name: '省',
                                type: 'map',
                                map: 'china',
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                label: {
                                    normal: {
                                        show: true,
                                        fontSize:9,
                                        textStyle: {
                                            color: 'rgba(0,0,0,0.4)'
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0, 0, 0, 0.2)',
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
                                data:[
                                    {
                                        name: "北京",
                                        value: 124,
                                        itemStyle: {
                                            normal: { areaColor: "#E55A4E", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "内蒙古",
                                        value: 21,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "新疆",
                                        value: 9,
                                        itemStyle: {
                                            normal: { areaColor: "#FDFDCF", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "西藏",
                                        value: 0,
                                        itemStyle: {
                                            normal: { areaColor: "#fff", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "青海",
                                        value: 0,
                                        itemStyle: {
                                            normal: { areaColor: "#fff", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "甘肃",
                                        value: 5,
                                        itemStyle: {
                                            normal: { areaColor: "#FDFDCF", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "宁夏",
                                        value: 5,
                                        itemStyle: {
                                            normal: { areaColor: "#FDFDCF", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "四川",
                                        value: 154,
                                        itemStyle: {
                                            normal: { areaColor: "#E55A4E", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "云南",
                                        value: 4,
                                        itemStyle: {
                                            normal: { areaColor: "#FDFDCF", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "陕西",
                                        value: 28,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "重庆",
                                        value: 120,
                                        itemStyle: {
                                            normal: { areaColor: "#E55A4E", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "湖北",
                                        value: 30538,
                                        label: {
                                            show: false,
                                            normal: { textStyle: { color: "#ff0" } }
                                        },
                                        itemStyle: { normal: { areaColor: "#4F070D" } }
                                    },
                                    {
                                        name: "贵州",
                                        value: 30,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "广西",
                                        value: 59,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "湖南",
                                        value: 132,
                                        itemStyle: {
                                            normal: { areaColor: "#E55A4E", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "河南",
                                        value: 44,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "山西",
                                        value: 17,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "河北",
                                        value: 16,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "天津",
                                        value: 22,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "辽宁",
                                        value: 18,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "吉林",
                                        value: 13,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "黑龙江",
                                        value: 114,
                                        itemStyle: {
                                            normal: { areaColor: "#E55A4E", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "山东",
                                        value: 292,
                                        itemStyle: {
                                            normal: { areaColor: "#E55A4E", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "江苏",
                                        value: 93,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "安徽",
                                        value: 95,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "上海",
                                        value: 42,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "浙江",
                                        value: 137,
                                        itemStyle: {
                                            normal: { areaColor: "#E55A4E", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "江西",
                                        value: 84,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "福建",
                                        value: 48,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "台湾",
                                        value: 28,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "广东",
                                        value: 292,
                                        itemStyle: {
                                            normal: { areaColor: "#E55A4E", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "香港",
                                        value: 11,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "澳门",
                                        value: 11,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    },
                                    {
                                        name: "海南",
                                        value: 12,
                                        itemStyle: {
                                            normal: { areaColor: "#FE9E83", label: { show: false } }
                                        }
                                    }
                                ]
                            }]
                        }
                        this.chart.setOption(option)
                    }
                }
            }
        }
    })
}
export default install