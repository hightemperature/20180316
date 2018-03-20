$(function () {
    init_application();
});

/**
 * 初始化参数
 */
var basedata = {
    /**
     * 容器
     */
    dom_bar: $('#demo'),                          // 获取容器节点 （看完可删）

    /**
     * echarts实例对象
     */
    echarts_pie: null,                                  // 各渠道使用情况--饼图 保存一个echarts实例
    echarts_line: null,                                 // 各渠道新增用户数量--折线图
    echarts_leftpie: null,                              // 各渠道办理业务统计--饼图
    echarts_sumline: null,                              // 各渠道办理业务统计--折线图
    echarts_thenline: null,                             // 使用人数对比--折线矩形图
    echarts_sectorpie: null,                            // 人员类型分析1--饼图
    echarts_agepie: null,                               // 人员类型分析2--饼图
    echarts_angleline: null,                            // 新增用户趋势分析--折线图
};
/**
 * 事件绑定 --- (这里面写的是点击方法等方法)
 */
var evenbind = function () {
    // 左边用户分析&&渠道分析切换效果
    (function(){
        var leftA = cutleft.getElementsByTagName("a"); //获取用户分析&&渠道分析切换文字
        var leftC = contleft.getElementsByClassName("public-l-cont"); //获取用户分析&&渠道分析切换内容
        var num = 0;
        //获取用户分析&&渠道分析切换效果
        leftA[num].className = "c-hc-write1 font-32 co-white active";
        for(var i = 0; i < leftA.length; i++){
            leftA[i].index = i;
            leftA[i].onclick = function(){
                leftA[num].className = "c-hc-write1 font-32 co-white";
                leftC[num].style.left = "-100%"
                num = this.index;
                this.className = "c-hc-write1 font-32 co-white active";
                leftC[num].style.left = "0"
            }
        }
    })();
    //用户分析日期切换数据按钮
    (function(){
        var mouthA = thenmouth.getElementsByTagName("a");
        var num = 0;
        var arr = [
            [
                [123,120,130,150,160,132,90,130,160,246,186,132],
                [123,222,256,236,456,654,345,756,323,246,186,788]
            ],
            [
                [123,222,256,236,456,654,345,756,323,246,186,788],
                [123,120,130,150,160,132,90,130,160,246,186,132]
            ],
            [
                [123,222,256,236,456,654,345,90,130,160,246,186],
                [90,130,160,246,186,132,256,236,456,654,345,756]
            ]
        ]
        for(var i = 0; i < mouthA.length; i++){
            mouthA[i].index = i;
            mouthA[i].onclick = function(){
                mouthA[num].className = "";
                num = this.index;
                this.className = "active";
                basedata.echarts_thenline.option.series[0].data = arr[num][0];
                basedata.echarts_thenline.option.series[1].data = arr[num][1];
                console.info()
            }
        }
    })();
    //各渠道办理业务统计日期切换数据按钮
    (function(){
        var mouthA = trenmouth.getElementsByTagName("a");
        var num = 0;
        var arr = [
            [
                [123,120,130,150,160,132,90,130,160,246,186,132],
                [123,222,256,236,456,654,345,756,323,246,186,788]
            ],
            [
                [123,222,256,236,456,654,345,756,323,246,186,788],
                [123,120,130,150,160,132,90,130,160,246,186,132]
            ],
            [
                [123,222,256,236,456,654,345,90,130,160,246,186],
                [90,130,160,246,186,132,256,236,456,654,345,756]
            ]
        ]
        for(var i = 0; i < mouthA.length; i++){
            mouthA[i].index = i;
            mouthA[i].onclick = function(){
                mouthA[num].className = "";
                num = this.index;
                this.className = "active";
                basedata.echarts_thenline.option.series[0].data = arr[num][0];
                basedata.echarts_thenline.option.series[1].data = arr[num][1];
                console.info()
            }
        }
    })()
}

/**
 * 应用初始化加载
 */
var init_application = function () {
    //  事件绑定
    evenbind();
    //  各渠道使用情况 完成率饼图
    basedata.echarts_pie = new EchartsDemo("zhifubaolist", "接口描述", config.inter_inter);
    basedata.echarts_pie.render_echart();
    //  各渠道累计办理业务占比 完成率饼图
    basedata.echarts_leftpie = new EchartsTrenpie("trenchlit","接口描述",config.inter_inter);
    basedata.echarts_leftpie.tren_echart();
    //  各渠道新增用户数量 完成折线图
    basedata.echarts_line = new EchartsUserLine("userlist","接口描述",config.inter_inter);
    basedata.echarts_line.user_echart();
    //  各渠道办理业务统计--折线图
    basedata.echarts_sumline = new EchartsSumLine("trench-sumlist","接口描述",config.inter_inter);
    basedata.echarts_sumline.sum_echart();
    /**
     * 用户分析图表
     */
    //  使用人数对比
    basedata.echarts_thenline = new EchartsThenLine("thenlist","接口描述",config.inter_inter);
    basedata.echarts_thenline.then_echart();
    //  人员类型分析1--饼图
    basedata.echarts_sectorpie = new EchartsSecPie("sector-dia","接口描述",config.inter_inter);
    basedata.echarts_sectorpie.Sec_echart();
    //  人员类型分析2--饼图
    basedata.echarts_agepie = new EchartsAgePie("agelist","接口描述",config.inter_inter);
    basedata.echarts_agepie.age_echart();
    //  新增用户趋势分析--折线图
    basedata.echarts_angleline = new EchartsAngleLine("anglelist","接口描述",config.inter_inter);
    basedata.echarts_angleline.angle_echart();
    /**
     * 图表自适应
     */
    window.onresize = function () {
        basedata.echarts_pie.myChart.resize();  // 各渠道使用情况 完成率饼图
        basedata.echarts_line.myChart.resize(); // 各渠道新增用户数量 完成折线图
        basedata.echarts_leftpie.myChart.resize(); // 各渠道累计办理业务占比 完成率饼图
        basedata.echarts_sumline.myChart.resize(); // 各渠道办理业务统计--折线图

        basedata.echarts_sumline.myChart.resize();  // 使用人数对比 完成折线图
        basedata.echarts_sectorpie.myChart.resize(); // 人员类型分析1--饼图
        basedata.echarts_agepie.myChart.resize(); // 人员类型分析2--饼图
        basedata.echarts_angleline.myChart.resize(); // 新增用户趋势分析--折线图
    }
}

/******************************************************* 函数区 ********************************************************/



/******************************************************* 组件区域 ******************************************************/

/**
 *  示例
 * @param dom_id        节点ID
 * @param url_desc      接口描述
 * @param url           接口地址
 * @constructor
 */
//  各渠道使用情况--饼图
function EchartsDemo(dom_id, url_desc, url) {
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;

    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {

    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  各渠道新增用户数量--折线图
function EchartsUserLine(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一","周二","周三","周四","周五","周六","周日"],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                    width: 2,
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#659bea"
                }
            },
        },
        yAxis: {
            type: "value",
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                    width: 2
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#659bea",
                }
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            top: '15%',
            bottom: '2%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: "axis",
        },
        series: [
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [123,120,130,150,160,132,90],
                lineStyle: {
                    width: 1,
                },
                color: "#dc68c7"
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [220,320,130,150,180,150,60],
                lineStyle: {
                    width: 1,
                },
                color: "#00b3ff"
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [150,180,320,190,250,265,140],
                lineStyle: {
                    width: 1,
                },
                color: "#b67fe8"
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [283,325,245,253,130,160,170],
                lineStyle: {
                    width: 1,
                },
                color: "#55e1e2"
            },
        ],
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  各渠道累计办理业务占比--饼图
function EchartsTrenpie(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        tooltip: {
            trigger: "item",
            formatter: "{a}<br />{b}:{c}({d}%)",
            confine: true
        },
        grid: {
            left: "100%",
            right: "30%",
            top: "30%",
            bottom: "30%"
        },
        color: ["#008efe","#01fff1","#ffcb5a","#9cd961"],
        series:[
            {
                name: "",
                type: "pie",
                radius: [5,30],
                center: ["50%","50%"],
                roseType: "radius",
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {value:10, name:'支付宝', color: "#fff"},
                    {value:5, name:'微信', color: "#fff"},
                    {value:15, name:'12123', color: "#fff"},
                    {value:25, name:'官网', color: "#fff"}
                ]
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  各渠道办理业务统计--折线图
function EchartsSumLine(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["2018/2/4","2018/2/9","2018/2/14","2018/2/19","2018/2/24","2018/3/1","2018/ 3/6"],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                    width: 2,
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#659bea"
                }
            },
        },
        yAxis: {
            type: "value",
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                    width: 2
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#659bea",
                }
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            top: '15%',
            bottom: '2%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: "axis",
        },
        series: [
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [123,120,130,150,160,132,90],
                color: "#00b3ff",
                lineStyle: {
                    width: 1,
                }
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [220,320,130,150,180,150,60],
                color: "#3fdc77",
                lineStyle: {
                    width: 1,
                }
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [150,180,320,190,250,265,140],
                color: "#e9494b",
                lineStyle: {
                    width: 1,
                }
            },
        ],
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  人数使用对比--折线图
function EchartsThenLine(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                    width: 2,
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#659bea"
                }
            },
        },
        color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#009aff'
            }, {
                offset: 1,
                color: '#8ecfff'
            }])
        ],
        yAxis: {
            type: "value",
            axisLine: {
                show: true,
                lineStyle: {
                    show: false,
                    color: "#659bea",
                    width: 0
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#659bea",
                }
            }
        },
        legend: {
            right: "0",
            data:[
                {
                    name: "上月",
                    icon: "image://images/yellow-icon.jpg",
                    textStyle: {
                        color: "#fff",
                    },
                },
                {
                    name: "本月",
                    icon: "image://images/rect-icon.jpg",
                    textStyle: {
                        color: "#fff",
                    },
                }
            ]
        },
        grid: {
            left: '3%',
            right: '5%',
            top: '15%',
            bottom: '2%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: "axis",
        },
        series: [
            {
                name: "上月",
                type: "line",
                stack: "总量",
                data: [123,120,130,150,160,132,90,130,160,246,186,132],
                lineStyle: {
                    color: "#fbf207",
                    width: 3,
                }
            },
            {
                name: "本月",
                type: "bar",
                stack: "总量",
                data: [123,222,256,236,456,654,345,756,323,246,186,788],
            },
        ],
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  人员类型分析1--饼图
function EchartsSecPie(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            confine: true
        },
        gird:{
            left: "60%",
            right: "60%"
        },
        color: ["#b5c8e1","#008efe"],
        series: [
            {
                name:'',
                type:'pie',
                radius: ['30%', '60%'],
                startAngle: 45,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    show: true,
                    length: 0,
                },
                data:[
                    {value:335, name:'使用'},
                    {value:310, name:'未使用'},
                ]
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  人员类型分析2--饼图
function EchartsAgePie(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        tooltip: {
            trigger: "item",
            formatter: "{a}<br />{b}:{c}({d}%)",
            confine: true
        },
        grid: {
            left: "100%",
            right: "30%",
            top: "30%",
            bottom: "30%"
        },
        color: ["#6bc528","#42dba3","#b174c3","#008efe","#f2b91f","#cc4f72","#797eb7","#d7f21f"],
        series:[
            {
                name: "",
                type: "pie",
                radius: [5,30],
                center: ["50%","50%"],
                roseType: "radius",
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {value:10, name:'20岁以下'},
                    {value:5, name:'20-30岁'},
                    {value:15, name:'30-40岁'},
                    {value:25, name:'40-50岁'},
                    {value:12, name:'50岁以上'},
                    {value:13, name:'40-50岁'},
                    {value:16, name:'50岁以上'}
                ]
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  新增用户趋势分析--折线图
function EchartsAngleLine(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                    width: 2,
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#659bea"
                }
            },
        },
        yAxis: {
            type: "value",
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                    width: 2
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#659bea",
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#659bea",
                }
            }
        },
        grid: {
            left: '3%',
            right: '5%',
            top: '15%',
            bottom: '2%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: "axis",
        },
        series: [
            {
                name: "",
                type: "line",
                data: [123,120,130,150,160,132,90,352,663,333,222,150],
                color: "#c5af42",
                lineStyle: {
                    width: 1,
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#9ed606' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255,203,90,.1)' // 100% 处的颜色
                        }],
                    }
                }
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}


//各渠道使用情况--饼图
EchartsDemo.prototype = {
    constructor: EchartsDemo,
    /**
     * 初始化
     * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
     */
    init: function () {

    },
    /**
     * 渲染图表
     * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
     */
    render_echart: function () {
        var _self = this;
        ryAjax(_self.url_desc, _self.url, {
            successfn: function (resp) {

                // 业务逻辑处理

                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    },

};
//各渠道累计办理业务占比--饼图
EchartsTrenpie.prototype = {
    constructor: EchartsDemo,
    /**
     * 初始化
     * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
     */
    init: function () {

    },
    /**
     * 渲染图表
     * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
     */
    tren_echart: function () {
        var _self = this;
        ryAjax(_self.url_desc, _self.url, {
            successfn: function (resp) {

                // 业务逻辑处理

                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    },

};
//各渠道新增用户数量--折线图
EchartsUserLine.prototype = {
    constructor: EchartsUserLine,

    /**
     * 初始化
     * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
     */
    init: function () {

    },
    /**
     * 渲染图表
     * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
     */
    //各渠道新增用户数量  折线图
    user_echart: function() {
        var _self = this;
        ryAjax(_self.url_desc, _self.url, {
            successfn: function (resp) {

                // 业务逻辑处理
                console.info("line")
                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    console.info( _self.myChart)
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    }
};
// 各渠道办理业务统计--折线图
EchartsSumLine.prototype = {
    constructor: EchartsUserLine,

    /**
     * 初始化
     * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
     */
    init: function () {

    },
    /**
     * 渲染图表
     * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
     */
    //各渠道新增用户数量  折线图
    sum_echart: function() {
        var _self = this;
        ryAjax(_self.url_desc, _self.url, {
            successfn: function (resp) {

                // 业务逻辑处理
                console.info("line")
                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    console.info( _self.myChart)
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    }
};
//  人数使用对比
EchartsThenLine.prototype = {
    constructor: EchartsUserLine,

    /**
     * 初始化
     * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
     */
    init: function () {

    },
    /**
     * 渲染图表
     * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
     */
    //各渠道新增用户数量  折线图
    then_echart: function() {
        var _self = this;
        ryAjax(_self.url_desc, _self.url, {
            successfn: function (resp) {
                console.info(resp)
                // 业务逻辑处理
                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    console.info( _self.myChart)
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    }
};
//  人员类型分析1--饼图
EchartsSecPie.prototype = {
    constructor: EchartsDemo,
    /**
     * 初始化
     * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
     */
    init: function () {

    },
    /**
     * 渲染图表
     * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
     */
    Sec_echart: function () {
        var _self = this;
        ryAjax(_self.url_desc, _self.url, {
            successfn: function (resp) {

                // 业务逻辑处理

                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    },

};
//  人员类型分析2--饼图
EchartsAgePie.prototype = {
    constructor: EchartsDemo,
    /**
     * 初始化
     * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
     */
    init: function () {

    },
    /**
     * 渲染图表
     * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
     */
    age_echart: function () {
        var _self = this;
        ryAjax(_self.url_desc, _self.url, {
            successfn: function (resp) {

                // 业务逻辑处理

                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    },

};
//  新增用户趋势分析--折线图
EchartsAngleLine.prototype = {
    constructor: EchartsDemo,
    /**
     * 初始化
     * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
     */
    init: function () {

    },
    /**
     * 渲染图表
     * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
     */
    angle_echart: function () {
        var _self = this;
        ryAjax(_self.url_desc, _self.url, {
            successfn: function (resp) {

                // 业务逻辑处理

                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    },

};