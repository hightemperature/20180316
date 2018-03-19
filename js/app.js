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
    echarts_pie: null,                                // 保存一个echarts实例


};
/**
 * 事件绑定 --- (这里面写的是点击方法等方法)
 */
var evenbind = function () {

}

/**
 * 应用初始化加载
 */
var init_application = function () {
    // 事件绑定
    evenbind();
    // 风险评估 完成率饼图
    basedata.echarts_pie = new EchartsDemo("demo", "接口描述", "接口地址");
    basedata.echarts_pie.render_echart();
    /**
     * 图表自适应
     */
    window.onresize = function () {
        basedata.echarts_pie.myChart.resize();
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
function EchartsDemo(dom_id, url_desc, url) {
    this.dom_id = dom_id;
    this.url_desc = url_desc;
    this.url = url;

    // 图表实例
    this.myChart = null;
    // 图表配置
    this.option = {};
    // 是否初始化渲染图表
    this.load_first = true;
}
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
    }
};