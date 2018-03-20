/**
 * jquery - ajax 再封装
 * @param url_desc
 * @param url
 * @param option
 * @return {ryAjax.init}
 */
(function($, undefined){

    /**
     * ajax请求结果状态配置信息
     * @type {{STATE: {NAME: string, SUCVAL: number}, MESSAGE: string, DATA: string}}
     */
    var ajax_config = {
        //  接口状态CODE
        STATE: {
            NAME: "result",
            SUCVAL: true
        },
        // 接口状态信息
        MESSAGE: "msg",
        // 接口数据
        DATA: "data",
    };

    /**
     * ajax构造函数
     * @param url_desc  接口描述
     * @param url       接口地址
     * @param options   其他配置参数
     * @return {ryAjax.init}
     */
    ryAjax = function (url_desc, url, options) {
        return new ryAjax.prototype.init(url_desc, url, options);
    }

    /**
     * ajax原型模式
     * @type {{constructor: ryAjax|*, init: ryAjax.init, ajax: ryAjax.ajax, validateToken: ryAjax.validateToken, backToLogin: ryAjax.backToLogin}}
     */
    ryAjax.prototype = {
        constructor: ryAjax,
        /**
         * 初始化
         * @param url_desc  接口描述
         * @param url       接口地址
         * @param options   其他配置参数
         */
        init: function (url_desc, url, options) {

            if(url==''||url==null||typeof url === 'undefined'||typeof url !== 'string'){
                console.error('the url is not error!');
                return;
            }
            if(url_desc==''|| url_desc==null || typeof url_desc === 'undefined'){
                url_desc = '接口';
            }

            this.url_desc = url_desc;
            this.url = url;

            // 请求接口返回数据格式配置
            this.ajaxConfig = ajax_config;

            // 默认配置
            this.options = {
                data:{},
                successfn: undefined,
                errorfn: undefined,
                completefn: undefined,
                async: true,
                type: 'GET',
                dataType: 'JSON',
                cache: false,
                contentType: "application/x-www-form-urlencoded"
            };


            // 传入配置继承默认配置
            if (options && typeof options === 'object') {
                for (var key in options) {
                    if (this.options.hasOwnProperty(key) && this.options[key] !== null) {
                        this.options[key] = options[key];
                    }
                }
            }

            // 默认调用方法
            this.ajax();
        },
        /**
         * ajax请求数据
         */
        ajax: function() {
            var _self = this;
            /**
             * 调用jquery-ajax进行数据请求
             */
            $.ajax({
                type: _self.options.type,
                async: _self.options.async,
                data: _self.options.data,
                url: _self.url,
                cache: _self.options.cache,
                dataType: _self.options.dataType,
                contentType: _self.options.contentType,
                success: function (resp) {
                    // 转换为JSON格式
                    if(typeof resp === "string"){
                        resp = JSON.parse(resp);
                    }
                    // 请求状态 [ 失败 ]  == 》 执行方法
                    if(resp[_self.ajaxConfig.STATE.NAME] !== _self.ajaxConfig.STATE.SUCVAL){
                        yer('[ ' + _self.url_desc + ' ] 接口 ' + resp[_self.ajaxConfig.MESSAGE]);
                        return;
                    }
                    // 请求状态 [ 成功 ]  == 》 执行方法
                    if(_self.options.successfn == undefined){
                        console.error('[ ' + _self.url_desc + ' ] 接口 未定义请求成功执行方法~');
                        return;
                    }
                    _self.options.successfn(resp);
                },
                complete: function(XMLHttpRequest){
                    var status = XMLHttpRequest.status;
                    switch (status) {
                        case 404: yer("[ " + _self.url_desc + " ] 接口 404~");break;
                        case 500: _self.options.errorfn!=undefined?_self.options.errorfn():yer("[ " + _self.url_desc + " ] 接口 系统异常~");break;
                        case 504: yer("[ " + _self.url_desc + " ] 接口 请求超时~");break;
                        default: _self.options.completefn!=undefined?_self.options.completefn(XMLHttpRequest):'';
                    }
                }
            });
        }
    };
    ryAjax.prototype.init.prototype = ryAjax.prototype;
})($);
