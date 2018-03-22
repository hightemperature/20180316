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
    echarts_paypie: null,                               //  各渠道使用占比--插件水图（支付宝） 保存一个echarts实例
    echarts_paywpie: null,                              //  各渠道使用占比--插件水图（微信）
    echarts_paynumpie: null,                            //  各渠道使用占比--插件水图（12123）
    echarts_paycounpie: null,                           //  各渠道使用占比--插件水图（官网）
    echarts_line: null,                                 //  各渠道新增用户数量--折线图
    echarts_leftpie: null,                              //  累计业务量--饼图
    echarts_sumline: null,                              //  各渠道办理业务统计--折线图
    echarts_popuserline: null,                          //  弹框--各渠道新增用户数量--折线图
    echarts_popsumline: null,                           //  弹框--各渠道办理业务统计--折线图
    echarts_popcarbar: null,                            //  弹框--重点网上办理业务TOP 5--柱状图
    echarts_pophandline: null,                          //  弹框--业务办理时段分析--折线图

    // echarts_thenline: null,                             //  使用人数对比--折线矩形图
    // echarts_sectorpie: null,                            //  人员类型分析1--饼图
    // echarts_agepie: null,                               //  人员类型分析2--饼图
    // echarts_angleline: null,                            //  新增用户趋势分析--折线图

//    右边图表 echarts
    echarts_Bar: null,                                  //  全市保有量与注册量对比--柱状图
    echarts_circle: null,                               //  累计用户数量与实际车辆数量对比--饼图
    echarts_pie: null,                                  //  重点网上办理业务TOP 10--柱状图
    echarts_tree: null,                                 //  业务办理时段分析--折线图
    echarts_Sector: null                                //  线上线下办理业务占比--饼图

};
/**
 * 事件绑定 --- (这里面写的是点击方法等方法)
 */
var evenbind = function () {
    // // 左边用户分析&&渠道分析切换效果
    // (function(){
    //     var leftA = cutleft.getElementsByTagName("a"); //获取用户分析&&渠道分析切换文字
    //     var leftC = contleft.getElementsByClassName("public-l-cont"); //获取用户分析&&渠道分析切换内容
    //     var num = 0;
    //     //获取用户分析&&渠道分析切换效果
    //     leftA[num].className = "c-hc-write1 font-32 co-white active";
    //     for(var i = 0; i < leftA.length; i++){
    //         leftA[i].index = i;
    //         leftA[i].onclick = function(){
    //             leftA[num].className = "c-hc-write1 font-32 co-white";
    //             leftC[num].style.left = "-100%"
    //             num = this.index;
    //             this.className = "c-hc-write1 font-32 co-white active";
    //             leftC[num].style.left = "0"
    //         }
    //     }
    // })();
    // // 右边交通管理&&业务情况切换效果
    // (function(){
    //     var rightA = cutright.getElementsByTagName("a"); //获取交通管理&&业务情况切换文字
    //     var rightC = contright.getElementsByClassName("public-l-cont"); //获取交通管理&&业务情况切换内容
    //     var num = 0;
    //     //获取交通管理&&业务情况切换效果
    //     rightA[num].className = "c-hc-write1 font-32 co-white active";
    //     for(var i = 0; i < rightA.length; i++){
    //         rightA[i].index = i;
    //         rightA[i].onclick = function(){
    //             rightA[num].className = "c-hc-write1 font-32 co-white";
    //             rightC[num].style.right = "-100%";
    //             num = this.index;
    //             this.className = "c-hc-write1 font-32 co-white active";
    //             rightC[num].style.right = "0"
    //         }
    //     }
    // })();
    //用户分析日期切换数据按钮
    // (function(){
    //     var mouthA = thenmouth.getElementsByTagName("a");
    //     var num = 0;
    //     var arr = [
    //         [
    //             [123,120,130,150,160,132,90,130,160,246,186,132],
    //             [123,222,256,236,456,654,345,756,323,246,186,788]
    //         ],
    //         [
    //             [123,222,256,236,456,654,345,756,323,246,186,788],
    //             [123,120,130,150,160,132,90,130,160,246,186,132]
    //         ],
    //         [
    //             [123,222,256,236,456,654,345,90,130,160,246,186],
    //             [90,130,160,246,186,132,256,236,456,654,345,756]
    //         ]
    //     ]
    //     for(var i = 0; i < mouthA.length; i++){
    //         mouthA[i].index = i;
    //         mouthA[i].onclick = function(){
    //             mouthA[num].className = "";
    //             num = this.index;
    //             this.className = "active";
    //             basedata.echarts_thenline.option.series[0].data = arr[num][0];
    //             basedata.echarts_thenline.option.series[1].data = arr[num][1];
    //         }
    //     }
    // })();
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
    })();
    //  业务办理时段分析--日周月均值点击事件
    (function(){
        var rxA = rxfday.getElementsByTagName("a");
        var num = 0;
        console.info(rxA)
        for(var i = 0;i < rxA.length ; i++){
            rxA[i].index = i;
            rxA[i].onclick = function(){
                rxA[num].className = "";
                num = this.index;
                this.className = "active";
            }
        }
    })();
    //数字滚动效果
    (function(){
        var publicNum = document.getElementsByClassName("public-movenumber");
        var payNum = document.getElementsByClassName("pay-number");
        var _arr = [123456,123456,123456,123456];
        var arr = [471.92,1612.63,98,157,64,4];
        for(var i = 0 ; i < publicNum.length; i++){
            new NumAnimate(publicNum[i],arr[i],"",2).init();
        }
        for(var e = 0 ; e < payNum.length; e++){
            new NumAnimate(payNum[e],_arr[e],"",0).init();
        }
    })();
    //获取时间
    (function(){
        function run_time(){
            var date = new Date();
            var year = date.getFullYear();
            var mou = date.getMonth()+1;
            var day = date.getDate();
            // var week = date.getDay();
            var hous = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            localhost_time.innerHTML = year+"年"+mou+"月"+day+"日"+get_num(hous)+":"+get_num(min)+":"+get_num(sec);
        }
        setInterval(run_time,1000);
        function get_num(time){
            return time > 9?time:"0"+time;
        }
    })();
    //弹框
    (function(){
        var amp_btn = document.getElementsByClassName("public-amp");
        var narr_btn = document.getElementsByClassName("public-narrow");
        var pop_con = document.getElementsByClassName("public-popwindow");
        var num = 0;
        for(var i = 0; i < amp_btn.length; i++){
            amp_btn[i].index = i;
            amp_btn[i].onclick = function(){
                pop_con[num].style.transform = "scale(0,0)";
                num = this.index;
                pop_con[this.index].style.transform = "scale(1,1)";
                narr_btn[num].onclick = function(){
                    pop_con[num].style.transform = "scale(0,0)";
                }
            }
        }
    })();
}

/**
 * 应用初始化加载
 */
var init_application = function () {
    //  事件绑定
    evenbind();
    /**
     * 左边渠道&&用户分析图表
     */
    //  各渠道使用占比 完成率饼图(支付宝)
    basedata.echarts_paypie = new EchartsPaypie("zhifubaolist", "接口描述", config.inter_inter);
    basedata.echarts_paypie.render_echart();
    //  各渠道使用占比 完成率饼图(wechat)
    basedata.echarts_paywpie = new EchartsWechatpie("wechatlist","接口描述", config.inter_inter);
    basedata.echarts_paywpie.wechat_echart();
    //  各渠道使用占比 完成率饼图(12123)
    basedata.echarts_paynumpie = new EchartsNumpie("numberlist","接口描述", config.inter_inter);
    basedata.echarts_paynumpie.num_echart();
    //  各渠道使用占比 完成率饼图(官网)
    basedata.echarts_paycounpie = new EchartsAuthpie("authlist","接口描述", config.inter_inter);
    basedata.echarts_paycounpie.auth_echart();
    //  各渠道累计办理业务占比 完成率饼图
    basedata.echarts_leftpie = new EchartsTrenpie("trenchlit","接口描述",config.inter_inter);
    basedata.echarts_leftpie.tren_echart();
    //  各渠道新增用户数量 完成折线图
    basedata.echarts_userline = new EchartsUserLine("userlist","接口描述",config.inter_inter);
    basedata.echarts_userline.user_echart();
    //  各渠道办理业务统计--折线图
    basedata.echarts_sumline = new EchartsSumLine("trench-sumlist","接口描述",config.inter_inter);
    basedata.echarts_sumline.sum_echart();

    //  pop--各渠道新增用户数量--折线图
    basedata.echarts_popuserline = new EchartsPopuserLine("popuserlist","接口描述",config.inter_inter);
    basedata.echarts_popuserline.popuser_echart();
    //  pop--各渠道办理业务统计--折线图
    basedata.echarts_popsumline = new EchartsPopsumLine("popusumlist","接口描述",config.inter_inter);
    basedata.echarts_popsumline.popsum_echart();
    //  pop--重点网上办理业务TOP 5--柱状图
    basedata.echarts_popcarbar = new EchartsPopcarLine("popucarlist","接口描述",config.inter_inter);
    basedata.echarts_popcarbar.popcar_echart();
    //  pop--业务办理时段分析--折线图
    basedata.echarts_pophandline = new EchartsPophandLine("popuhandlist","接口描述",config.inter_inter);
    basedata.echarts_pophandline.pophand_echart();
    /**
     * 用户分析图表
     */
    // //  使用人数对比
    // basedata.echarts_thenline = new EchartsThenLine("thenlist","接口描述",config.inter_inter);
    // basedata.echarts_thenline.then_echart();
    // //  人员类型分析1--饼图
    // basedata.echarts_sectorpie = new EchartsSecPie("sector-dia","接口描述",config.inter_inter);
    // basedata.echarts_sectorpie.Sec_echart();
    // //  人员类型分析2--饼图
    // basedata.echarts_agepie = new EchartsAgePie("agelist","接口描述",config.inter_inter);
    // basedata.echarts_agepie.age_echart();
    // //  新增用户趋势分析--折线图
    // basedata.echarts_angleline = new EchartsAngleLine("anglelist","接口描述",config.inter_inter);
    // basedata.echarts_angleline.angle_echart();
    /**
     * 右边交通&&业务情况图表
     */
    /*全市保有量与注册量对比--柱状图*/
    basedata.echarts_Bar = new EchartsBar('rmvlist', '接口描述',config.inter_inter);
    basedata.echarts_Bar.bar_echart();
    /*累计用户数量与实际车辆数量对比饼图*/
    basedata.echarts_circle = new EchartsCircle('reallist', '接口描述',config.inter_inter);
    basedata.echarts_circle.circle_echart();
    /*重点网上办理业务TOP 10--柱状图*/
    basedata.echarts_pie = new EchartsDemo("rywlist", "接口描述",config.inter_inter);
    basedata.echarts_pie.pie_echart();
    /*业务办理时段分析--折线图*/
    basedata.echarts_tree = new EchartsTree("rfxlist", "接口描述",config.inter_inter);
    basedata.echarts_tree.tree_echart();
    /*线上线下办理业务占比--饼图*/
    basedata.echarts_Sector = new EchartsSector('reflist', '接口描述',config.inter_inter);
    basedata.echarts_Sector.Sector_echart();
    /**
     * 图表自适应
     */
    window.onresize = function () {
        //  左边图表
        basedata.echarts_paypie.myChart.resize();       //  各渠道使用占比 完成率饼图(支付宝)
        basedata.echarts_paywpie.myChart.resize();      //  各渠道使用占比 完成率饼图(微信)
        basedata.echarts_paynumpie.myChart.resize();    //  各渠道使用占比 完成率饼图(12123)
        basedata.echarts_paycounpie.myChart.resize();   //  各渠道使用占比 完成率饼图(官网)
        basedata.echarts_userline.myChart.resize();     //  各渠道新增用户数量 完成折线图
        basedata.echarts_leftpie.myChart.resize();      //  各渠道累计办理业务占比 完成率饼图
        basedata.echarts_sumline.myChart.resize();      //  各渠道办理业务统计--折线图

        basedata.echarts_popuserline.myChart.resize();  //  弹框--各渠道新增用户数量--折线图
        basedata.echarts_popsumline.myChart.resize();   //  弹框--各渠道办理业务统计--折线图
        basedata.echarts_popcarbar.myChart.resize();    //  弹框--重点网上办理业务TOP 5--柱状图
        basedata.echarts_pophandline.myChart.resize();  //  弹框--业务办理时段分析--折线图
        // basedata.echarts_thenline.myChart.resize();      // 使用人数对比 完成折线图
        // basedata.echarts_sectorpie.myChart.resize();    // 人员类型分析1--饼图
        // basedata.echarts_agepie.myChart.resize();       // 人员类型分析2--饼图
        // basedata.echarts_angleline.myChart.resize();    // 新增用户趋势分析--折线图
    //    右边图表
        basedata.echarts_Bar.myChart.resize();          //  全市保有量与注册量对比--柱状图
        basedata.echarts_circle.myChart.resize();       //  累计用户数量与实际车辆数量对比--饼图
        basedata.echarts_pie.myChart.resize();          //  重点网上办理业务TOP 10--柱状图
        basedata.echarts_tree.myChart.resize();         //  业务办理时段分析--折线图
        basedata.echarts_Sector.myChart.resize();       //  线上线下办理业务占比--饼图
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
//  各渠道使用占比--饼图(支付宝)
function EchartsPaypie(dom_id, url_desc, url) {
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;

    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        series: [{
            type: 'liquidFill',
            data: [{
                value: .44,
                itemStyle: {
                    color: "rgba(0,142,254,1)"
                }
            }],
            center: ["50%","45%"],
            amplitude: 0,
            waveAnimation: false,
            radius: "70%",
            backgroundStyle: {
                color: "rgba(0,142,254,.3)"
            },
            outline: {
                borderDistance: 6,
                itemStyle: {
                    borderColor: "rgba(0,142,254,1)",
                    borderWidth: 2
                },
            },
            label: {
                show: true,
                color: "rgba(0,142,254,1)",
                fontSize: 12,
                verticalAlign: "center"
            },
            labelStyle: {
                show: false
            },
            itemStyle: {
                borderWidth: 10
            }
        }]

    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  各渠道使用占比--饼图(wechat)
function EchartsWechatpie(dom_id, url_desc, url) {
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;

    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        series: [{
            type: 'liquidFill',
            data: [{
                value: .35,
                itemStyle: {
                    color: "rgba(156,217,97,1)",
                }
            }],
            center: ["50%","45%"],
            amplitude: 0,
            waveAnimation: false,
            radius: "70%",
            backgroundStyle: {
                color: "rgba(156,217,97,.3)"
            },
            outline: {
                borderDistance: 6,
                itemStyle: {
                    borderColor: "rgba(156,217,97,1)",
                    borderWidth: 2
                },
            },
            label: {
                show: true,
                color: "rgba(156,217,97,1)",
                fontSize: 12,
                verticalAlign: "center"
            },
            labelStyle: {
                show: false
            },
            itemStyle: {
                borderWidth: 10
            }
        }]

    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  各渠道使用占比--饼图(12123)
function EchartsNumpie(dom_id, url_desc, url) {
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;

    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        series: [{
            type: 'liquidFill',
            data: [{
                value: .22,
                itemStyle: {
                    color: "rgba(1,255,241,1)"
                }
            }],
            center: ["50%","45%"],
            amplitude: 0,
            waveAnimation: false,
            radius: "70%",
            backgroundStyle: {
                color: "rgba(1,255,241,.3)"
            },
            outline: {
                borderDistance: 6,
                itemStyle: {
                    borderColor: "rgba(1,255,241,1)",
                    borderWidth: 2
                },
            },
            label: {
                show: true,
                color: "rgba(1,255,241,1)",
                fontSize: 12,
                verticalAlign: "center"
            },
            labelStyle: {
                show: false
            },
            itemStyle: {
                borderWidth: 10
            }
        }]

    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  各渠道使用占比--饼图(官网)
function EchartsAuthpie(dom_id, url_desc, url) {
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;

    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        series: [{
            type: 'liquidFill',
            data: [{
                value: .3,
                itemStyle: {
                    color: "rgba(255,203,90,1)"
                }
            }],
            center: ["50%","45%"],
            amplitude: 0,
            waveAnimation: false,
            radius: "70%",
            backgroundStyle: {
                color: "rgba(255,203,90,.3)"
            },
            outline: {
                borderDistance: 6,
                itemStyle: {
                    borderColor: "rgba(255,203,90,1)",
                    borderWidth: 2
                },
            },
            label: {
                show: true,
                color: "rgba(255,203,90,1)",
                fontSize: 12,
                verticalAlign: "center"
            },
            labelStyle: {
                show: false
            },
            itemStyle: {
                borderWidth: 10
            }
        }]

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
            formatter: "{b}: <br>{c0}个<br>{c1}个<br>{c2}个<br>{c3}个"
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
            formatter: "{b}:<br/>{c}({d}%)",
            confine: true,
            fontSize: 14,
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
                labelLine: {
                    show: false
                },
                label: {
                    show: false
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
                    width: 2
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
                    color: "#659bea"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#659bea"
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
            formatter: "{b}: <br>{c0}次<br>{c1}次<br>{c2}次"
        },
        series: [
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [123,120,130,150,160,132,90],
                color: "#00b3ff"
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [220,320,130,150,180,150,60],
                color: "#3fdc77"
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [150,180,320,190,250,265,140],
                color: "#e9494b"
            },
        ],
    };
    // 是否初始化渲染图表
    this.load_first = true;
}

//  弹框--各渠道新增用户数量--折线图
function EchartsPopuserLine(dom_id, url_desc, url){
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
            formatter: "{b}: <br>{c0}个<br>{c1}个<br>{c2}个<br>{c3}个"
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
//  弹框--各渠道办理业务统计--折线图
function EchartsPopsumLine(dom_id, url_desc, url){
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
                    width: 2
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
                    color: "#659bea"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "#659bea"
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
            formatter: "{b}: <br>{c0}次<br>{c1}次<br>{c2}次"
        },
        series: [
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [123,120,130,150,160,132,90],
                color: "#00b3ff"
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [220,320,130,150,180,150,60],
                color: "#3fdc77"
            },
            {
                name: "",
                type: "line",
                stack: "总量",
                data: [150,180,320,190,250,265,140],
                color: "#e9494b"
            },
        ],
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  弹框--重点网上办理业务TOP 5--柱状图
function EchartsPopcarLine(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        tooltip : {
            trigger: 'axis',
            confine: true,
            formatter: "{b} : <br>支付宝:{c0}次<br>微信:{c1}次<br>12123:{c2}次<br>官网:{c3}次",
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid:{
            left: "20%",
            top: "5%",
            right: "20%",
            bottom: "12%"
        },
        center: ['50%', '50%'],
        legend: {
            data:['支付宝', '微信','12312','官网'],
            right: -12,
            bottom: 0,
            itemGap: 2,
            itemWidth: 15,
            itemHeight: 10,
            orient: "vertical",
            icon: "rect",
            textStyle:{
                color:'#7bfffc',
                fontSize:'9'
            }
        },
        calculable : true,
        xAxis : [
            {
                show:false,
                type : 'value'
            }
        ],
        yAxis : [
            {
                splitLine: {
                    show: false // 网格线是否显示
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                type : 'category',
                data : ['业务一','业务一','业务一','业务一','业务一']
            }
        ],
        color: ["#0092ff","#9cd961","#01fff1","#ffcb5a"],
        series : [
            {
                name:'支付宝',
                type:'bar',
                stack: '总量',
                // itemStyle : { normal:{ color:'#6e7cff'}},
                data:[320, 302, 301, 334, 390],
            },
            {
                name:'微信',
                type:'bar',
                stack: '总量',
                // itemStyle : { normal: { color:'#ffac64'}},
                data:[120, 132, 101, 134, 90]
            },
            {
                name:'12312',
                type:'bar',
                stack: '总量',
                // itemStyle : { normal:  {color:"#56ffe6"}},
                data:[220, 182, 191, 234, 290]
            },
            {
                name:'官网',
                type:'bar',
                stack: '总量',
                // itemStyle : { normal: {color:"#f1ff6e"}},
                data:[150, 212, 201, 154, 190],
                label: {
                    show: true,
                    position: "right",
                    color: "#01fff1",
                },
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//  弹框--业务办理时段分析--折线图
function EchartsPophandLine(dom_id, url_desc, url){
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
            data: ["0:00","5:00","10:00","15:00","20:00","25:00","30:00"],
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
                    color: "rgba(101,155,234,1)",
                    width: 2
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "rgba(101,155,234,1)",
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(101,155,234,.25)",
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
            formatter: "{b}:<br>{c0}次<br>{c1}次"
        },
        series: [
            {
                name: "",
                type: "line",
                data: [123,120,130,150,160,132,90],
                color: "#e74647",
                lineStyle: {
                    width: 1,
                },
                // areaStyle: {
                //     color: {
                //         type: 'linear',
                //         x: 0,
                //         y: 0,
                //         x2: 0,
                //         y2: 1,
                //         colorStops: [{
                //             offset: 0, color: '#9ed606' // 0% 处的颜色
                //         }, {
                //             offset: 1, color: 'rgba(255,203,90,.1)' // 100% 处的颜色
                //         }],
                //     }
                // }
            },
            {
                name: "",
                type: "line",
                data: [145,154,165,182,46,100,90],
                color: "#00b3ff",
                lineStyle: {
                    width: 1,
                }
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
// //  人数使用对比--折线图
// function EchartsThenLine(dom_id, url_desc, url){
//     this.dom_id = dom_id;
//     this.url_desc = url_desc;
//     this.url = url;
//     // 图表实例
//     this.myChart = null;
//     // 图表配置
//     this.option = {
//         xAxis: {
//             type: "category",
//             boundaryGap: false,
//             data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
//             axisLine: {
//                 show: true,
//                 lineStyle: {
//                     color: "#659bea",
//                     width: 2,
//                 }
//             },
//             axisTick: {
//                 show: true,
//                 lineStyle: {
//                     color: "#659bea"
//                 }
//             },
//         },
//         color: [
//             new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                 offset: 0,
//                 color: '#009aff'
//             }, {
//                 offset: 1,
//                 color: '#8ecfff'
//             }])
//         ],
//         yAxis: {
//             type: "value",
//             axisLine: {
//                 show: true,
//                 lineStyle: {
//                     show: false,
//                     color: "#659bea",
//                     width: 0
//                 }
//             },
//             axisTick: {
//                 show: true,
//                 lineStyle: {
//                     color: "#659bea",
//                 }
//             },
//             splitLine: {
//                 lineStyle: {
//                     color: "#659bea",
//                 }
//             }
//         },
//         legend: {
//             right: "0",
//             data:[
//                 {
//                     name: "上月",
//                     icon: "image://images/yellow-icon.jpg",
//                     textStyle: {
//                         color: "#fff",
//                     },
//                 },
//                 {
//                     name: "本月",
//                     icon: "image://images/rect-icon.jpg",
//                     textStyle: {
//                         color: "#fff",
//                     },
//                 }
//             ]
//         },
//         grid: {
//             left: '3%',
//             right: '5%',
//             top: '15%',
//             bottom: '2%',
//             containLabel: true
//         },
//         tooltip: {
//             show: true,
//             trigger: "axis",
//             formatter: "{b}月:<br>{c0}人次<br>{c1}人次"
//         },
//         series: [
//             {
//                 name: "上月",
//                 type: "line",
//                 stack: "总量",
//                 data: [123,120,130,150,160,132,90,130,160,246,186,132],
//                 lineStyle: {
//                     color: "#fbf207",
//                     width: 3,
//                 }
//             },
//             {
//                 name: "本月",
//                 type: "bar",
//                 stack: "总量",
//                 data: [123,222,256,236,456,654,345,756,323,246,186,788],
//             },
//         ],
//     };
//     // 是否初始化渲染图表
//     this.load_first = true;
// }
// //  人员类型分析1--饼图
// function EchartsSecPie(dom_id, url_desc, url){
//     this.dom_id = dom_id;
//     this.url_desc = url_desc;
//     this.url = url;
//     // 图表实例
//     this.myChart = null;
//     // 图表配置
//     this.option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: "{b}: {c} ({d}%)",
//             confine: true
//         },
//         gird:{
//             left: "60%",
//             right: "60%"
//         },
//         color: ["#b5c8e1","#008efe"],
//         series: [
//             {
//                 name:'',
//                 type:'pie',
//                 radius: ['30%', '60%'],
//                 startAngle: 45,
//                 avoidLabelOverlap: false,
//                 label: {
//                     normal: {
//                         show: true,
//                     },
//                     emphasis: {
//                         show: true
//                     }
//                 },
//                 labelLine: {
//                     show: true,
//                     length: 0,
//                 },
//                 data:[
//                     {value:335, name:'使用'},
//                     {value:310, name:'未使用'},
//                 ]
//             }
//         ]
//     };
//     // 是否初始化渲染图表
//     this.load_first = true;
// }
// //  人员类型分析2--饼图
// function EchartsAgePie(dom_id, url_desc, url){
//     this.dom_id = dom_id;
//     this.url_desc = url_desc;
//     this.url = url;
//     // 图表实例
//     this.myChart = null;
//     // 图表配置
//     this.option = {
//         tooltip: {
//             trigger: "item",
//             formatter: "{b}:<br>{c}({d}%)",
//             confine: true
//         },
//         grid: {
//             left: "100%",
//             right: "30%",
//             top: "30%",
//             bottom: "30%"
//         },
//         color: ["#6bc528","#42dba3","#b174c3","#008efe","#f2b91f","#cc4f72","#797eb7","#d7f21f"],
//         series:[
//             {
//                 name: "",
//                 type: "pie",
//                 radius: [5,30],
//                 center: ["50%","50%"],
//                 roseType: "radius",
//                 labelLine: {
//                     show: false
//                 },
//                 label: {
//                     show: false
//                 },
//                 data:[
//                     {value:10, name:'20岁以下'},
//                     {value:5, name:'20-30岁'},
//                     {value:15, name:'30-40岁'},
//                     {value:25, name:'40-50岁'},
//                     {value:12, name:'50岁以上'},
//                     {value:13, name:'40-50岁'},
//                     {value:16, name:'50岁以上'}
//                 ]
//             }
//         ]
//     };
//     // 是否初始化渲染图表
//     this.load_first = true;
// }
// //  新增用户趋势分析--折线图
// function EchartsAngleLine(dom_id, url_desc, url){
//     this.dom_id = dom_id;
//     this.url_desc = url_desc;
//     this.url = url;
//     // 图表实例
//     this.myChart = null;
//     // 图表配置
//     this.option = {
//         xAxis: {
//             type: "category",
//             boundaryGap: false,
//             data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
//             axisLine: {
//                 show: true,
//                 lineStyle: {
//                     color: "#659bea",
//                     width: 2,
//                 }
//             },
//             axisTick: {
//                 show: true,
//                 lineStyle: {
//                     color: "#659bea"
//                 }
//             },
//         },
//         yAxis: {
//             type: "value",
//             axisLine: {
//                 show: true,
//                 lineStyle: {
//                     color: "#659bea",
//                     width: 2
//                 }
//             },
//             axisTick: {
//                 show: true,
//                 lineStyle: {
//                     color: "#659bea",
//                 }
//             },
//             splitLine: {
//                 lineStyle: {
//                     color: "#659bea",
//                 }
//             }
//         },
//         grid: {
//             left: '3%',
//             right: '5%',
//             top: '15%',
//             bottom: '2%',
//             containLabel: true
//         },
//         tooltip: {
//             show: true,
//             trigger: "axis",
//             formatter: "{b}:<br>新增{c0}次"
//         },
//         series: [
//             {
//                 name: "",
//                 type: "line",
//                 data: [123,120,130,150,160,132,90,352,663,333,222,150],
//                 color: "#c5af42",
//                 lineStyle: {
//                     width: 1,
//                 },
//                 areaStyle: {
//                     color: {
//                         type: 'linear',
//                         x: 0,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [{
//                             offset: 0, color: '#9ed606' // 0% 处的颜色
//                         }, {
//                             offset: 1, color: 'rgba(255,203,90,.1)' // 100% 处的颜色
//                         }],
//                     }
//                 }
//             }
//         ]
//     };
//     // 是否初始化渲染图表
//     this.load_first = true;
// }

// 右边图表
//全市保有量与注册量对比--柱状图
function EchartsBar(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        tooltip: {
            show: true,
            trigger: "axis",
            confine: true,
            formatter: "{b}: {c0} {c1}"
        },
        xAxis: {
            // 每一项也可以是具体的配置项，此时取配置项中的 `value` 为类目名
            data: [
                {
                    value: "注册驾驶员",
                    textStyle: {
                        color: "#fff",
                        fontSize: 4
                    }
                },
                {
                    value: "注册车辆 ",
                    textStyle: {
                        color: "#fff",
                        fontSize: 8
                    }
                }
                ],
            axisLine: {
                lineStyle: {
                    color: "#41a4ff"
                }
            },
            axisLabel: {
                color: "#fff",
            }
        },
        color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#3edfe5'
            }, {
                offset: 1,
                color: '#8ce88c'
            }]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#ea5c24'
            }, {
                offset: 1,
                color: '#e7dc7e'
            }])
        ],
        yAxis: {
            type: '',
            show: true,
            axisLine:{
                lineStyle:{
                    color:"#41a4ff"
                }
            },
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel: {
                show: false
            }
        },
        gird:{
            left: "3%",
            right: "5%",
            bottom: "5%"
        },
        series: [
            {
                name: "注册驾驶员",
                type: 'bar',
                legendHoverLink: false,
                data:[123452,""],
                label: {
                    show: true,
                    position: "top",
                    color: "#01fff1",
                },
                barWidth: "40%",
                barGap: "-100%",
            },
            {
                name: "注册车辆",
                type: 'bar',
                legendHoverLink: false,
                data:["",154564],
                label: {
                    show: true,
                    position: "top",
                    color: "#01fff1",
                },
                barWidth: "40%",
                barGap: "-100%",
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//累计用户数量与实际车辆数量对比--饼图
function EchartsCircle(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        tooltip : {
            show: true,
            formatter: "{b} : {c} ({d}%)",
            confine: true
        },
        center: ["10%","50%"],
        legend: {
            orient : 'vertical',
            x : "40%",
            y : "35%",
            itemGap:12,
            data:['累计用户数量1227562人次','实际车辆数量67893辆'],
            textStyle: {
                color: "#fff"
            }
        },
        series : [
            {
                name:'1',
                type:'pie',
                clockWise:false,
                radius : [55, 70],
                label: {
                    show:false
                },
                labelLine: {
                    show: false
                },
                data:[
                    {
                        value:68,
                        name:'累计用户数量1227562人次',
                        itemStyle: {
                            color: "#0092ff"
                        }
                    },
                    {
                        value:32,
                        name:'invisible',
                        itemStyle : {
                            color: "rgba(2,2,2,0)"
                        },
                    }
                ]
            },
            {
                name:'',
                type:'pie',
                clockWise:false,
                radius : [40, 55],
                label: {
                    show:false
                },
                labelLine: {
                  show: false
                },
                data:[
                    {
                        value:29,
                        name:'实际车辆数量67893辆',
                        itemStyle: {
                            color: "#01fff1"
                        }
                    },
                    {
                        value:71,
                        name:'invisible',
                        itemStyle: {
                            color: "rgba(2,2,2,0)"
                        },
                    }
                ]
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//重点网上办理业务TOP 5--柱状图
function EchartsDemo(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        tooltip : {
            trigger: 'axis',
            confine: true,
            formatter: "{b} : <br>支付宝:{c0}次<br>微信:{c1}次<br>12123:{c2}次<br>官网:{c3}次",
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid:{
            left: "20%",
            top: "5%",
            right: "20%",
            bottom: "12%"
        },
        center: ['50%', '50%'],
        legend: {
            data:['支付宝', '微信','12312','官网'],
            right: -12,
            bottom: 0,
            itemGap: 2,
            itemWidth: 15,
            itemHeight: 10,
            orient: "vertical",
            icon: "rect",
            textStyle:{
                color:'#7bfffc',
                fontSize:'9'
            }
        },
        calculable : true,
        xAxis : [
            {
                show:false,
                type : 'value'
            }
        ],
        yAxis : [
            {
                splitLine: {
                    show: false // 网格线是否显示
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                  show: false,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                type : 'category',
                data : ['业务一','业务一','业务一','业务一','业务一']
            }
        ],
        color: ["#0092ff","#9cd961","#01fff1","#ffcb5a"],
        series : [
            {
                name:'支付宝',
                type:'bar',
                stack: '总量',
                // itemStyle : { normal:{ color:'#6e7cff'}},
                data:[320, 302, 301, 334, 390],
            },
            {
                name:'微信',
                type:'bar',
                stack: '总量',
                // itemStyle : { normal: { color:'#ffac64'}},
                data:[120, 132, 101, 134, 90]
            },
            {
                name:'12312',
                type:'bar',
                stack: '总量',
                // itemStyle : { normal:  {color:"#56ffe6"}},
                data:[220, 182, 191, 234, 290]
            },
            {
                name:'官网',
                type:'bar',
                stack: '总量',
                // itemStyle : { normal: {color:"#f1ff6e"}},
                data:[150, 212, 201, 154, 190],
                label: {
                    show: true,
                    position: "right",
                    color: "#01fff1",
                },
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//业务办理时段分析--折线图
function EchartsTree(dom_id, url_desc, url){
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
            data: ["0:00","5:00","10:00","15:00","20:00","25:00","30:00"],
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
                    color: "rgba(101,155,234,1)",
                    width: 2
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "rgba(101,155,234,1)",
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(101,155,234,.25)",
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
            formatter: "{b}:<br>{c0}次<br>{c1}次"
        },
        series: [
            {
                name: "",
                type: "line",
                data: [123,120,130,150,160,132,90],
                color: "#e74647",
                lineStyle: {
                    width: 1,
                },
                // areaStyle: {
                //     color: {
                //         type: 'linear',
                //         x: 0,
                //         y: 0,
                //         x2: 0,
                //         y2: 1,
                //         colorStops: [{
                //             offset: 0, color: '#9ed606' // 0% 处的颜色
                //         }, {
                //             offset: 1, color: 'rgba(255,203,90,.1)' // 100% 处的颜色
                //         }],
                //     }
                // }
            },
            {
                name: "",
                type: "line",
                data: [145,154,165,182,46,100,90],
                color: "#00b3ff",
                lineStyle: {
                    width: 1,
                }
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}
//线上线下办理业务占比--饼图
function EchartsSector(dom_id, url_desc, url){
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;
    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            confine: true
        },
        center: ["50%","50%"],
        color: ["#008efe","#b5c8e1","#01fff1"],
        series: [
            {
                name:'',
                type:'pie',
                radius: ['20%', '60%'],
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
                    {value:50, name:''}
                ]
            }
        ]
    };
    // 是否初始化渲染图表
    this.load_first = true;
}


//各渠道使用占比--饼图(支付宝)
EchartsPaypie.prototype = {
    constructor: EchartsPaypie,
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
//各渠道使用占比--饼图(WeChat)
EchartsWechatpie.prototype = {
    constructor: EchartsWechatpie,
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
    wechat_echart: function () {
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
//各渠道使用占比--饼图(12123)
EchartsNumpie.prototype = {
    constructor: EchartsNumpie,
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
    num_echart: function () {
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
//各渠道使用占比--饼图(官网)
EchartsAuthpie.prototype = {
    constructor: EchartsAuthpie,
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
    auth_echart: function () {
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
    constructor: EchartsTrenpie,
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
                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
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
    constructor: EchartsSumLine,

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
                // 是否已经初始化echarts实例
                if(_self.load_first){
                    _self.myChart = echarts.init(document.getElementById(_self.dom_id));
                    _self.load_first = false;
                }
                // 渲染图表
                _self.myChart.setOption(_self.option);
            }
        });
    }
};

//  弹框--各渠道新增用户数量--折线图
EchartsPopuserLine.prototype = {
    constructor: EchartsPopuserLine,

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
    popuser_echart: function() {
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
    }
};
//  弹框--各渠道办理业务统计--折线图
EchartsPopsumLine.prototype = {
    constructor: EchartsPopsumLine,

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
    popsum_echart: function() {
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
    }
};
//  弹框--重点网上办理业务TOP 5--柱状图
EchartsPopcarLine.prototype = {
    constructor: EchartsPopcarLine,
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
    popcar_echart: function () {
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
//  弹框--业务办理时段分析--折线图
EchartsPophandLine.prototype = {
    constructor: EchartsPophandLine,
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
    pophand_echart: function () {
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
// //  人数使用对比
// EchartsThenLine.prototype = {
//     constructor: EchartsThenLine,
//
//     /**
//      * 初始化
//      * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
//      */
//     init: function () {
//
//     },
//     /**
//      * 渲染图表
//      * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
//      */
//     //各渠道新增用户数量  折线图
//     then_echart: function() {
//         var _self = this;
//         ryAjax(_self.url_desc, _self.url, {
//             successfn: function (resp) {
//                 // 业务逻辑处理
//                 // 是否已经初始化echarts实例
//                 if(_self.load_first){
//                     _self.myChart = echarts.init(document.getElementById(_self.dom_id));
//                     _self.load_first = false;
//                 }
//                 // 渲染图表
//                 _self.myChart.setOption(_self.option);
//             }
//         });
//     }
// };
// //  人员类型分析1--饼图
// EchartsSecPie.prototype = {
//     constructor: EchartsSecPie,
//     /**
//      * 初始化
//      * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
//      */
//     init: function () {
//
//     },
//     /**
//      * 渲染图表
//      * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
//      */
//     Sec_echart: function () {
//         var _self = this;
//         ryAjax(_self.url_desc, _self.url, {
//             successfn: function (resp) {
//
//                 // 业务逻辑处理
//
//                 // 是否已经初始化echarts实例
//                 if(_self.load_first){
//                     _self.myChart = echarts.init(document.getElementById(_self.dom_id));
//                     _self.load_first = false;
//                 }
//                 // 渲染图表
//                 _self.myChart.setOption(_self.option);
//             }
//         });
//     },
//
// };
// //  人员类型分析2--饼图
// EchartsAgePie.prototype = {
//     constructor: EchartsAgePie,
//     /**
//      * 初始化
//      * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
//      */
//     init: function () {
//
//     },
//     /**
//      * 渲染图表
//      * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
//      */
//     age_echart: function () {
//         var _self = this;
//         ryAjax(_self.url_desc, _self.url, {
//             successfn: function (resp) {
//
//                 // 业务逻辑处理
//
//                 // 是否已经初始化echarts实例
//                 if(_self.load_first){
//                     _self.myChart = echarts.init(document.getElementById(_self.dom_id));
//                     _self.load_first = false;
//                 }
//                 // 渲染图表
//                 _self.myChart.setOption(_self.option);
//             }
//         });
//     },
//
// };
// //  新增用户趋势分析--折线图
// EchartsAngleLine.prototype = {
//     constructor: EchartsAngleLine,
//     /**
//      * 初始化
//      * ps: 这个函数为预留函数里面可以不做任何操作，主要用于扩展
//      */
//     init: function () {
//
//     },
//     /**
//      * 渲染图表
//      * ps: 此函数用于根据构造函数中的url接口地址获取相应的数据并配置到option中去，然后渲染图表
//      */
//     angle_echart: function () {
//         var _self = this;
//         ryAjax(_self.url_desc, _self.url, {
//             successfn: function (resp) {
//
//                 // 业务逻辑处理
//
//                 // 是否已经初始化echarts实例
//                 if(_self.load_first){
//                     _self.myChart = echarts.init(document.getElementById(_self.dom_id));
//                     _self.load_first = false;
//                 }
//                 // 渲染图表
//                 _self.myChart.setOption(_self.option);
//             }
//         });
//     },
//
// };

//右边图表
//全市保有量与注册量对比--柱状图
EchartsBar.prototype = {
    constructor: EchartsBar,
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
    bar_echart: function () {
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
//累计用户数量与实际车辆数量对比--饼图
EchartsCircle.prototype = {
    constructor: EchartsCircle,
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
    circle_echart: function () {
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
//重点网上办理业务TOP 5--柱状图
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
    pie_echart: function () {
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
//业务办理时段分析--折线图
EchartsTree.prototype = {
    constructor: EchartsTree,
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
    tree_echart: function () {
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
//线上线下办理业务占比--饼图
EchartsSector.prototype = {
    constructor: EchartsSector,
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
    Sector_echart: function () {
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