/**
 * Created by King on 2017/12/6.
 */
(function () {
  yer = function (text, type, timer) {
    return new yer.prototype.init(text, type, timer);
  }
  yer.prototype = {
    // 记录生成的yer个数
    yer_index: 0,
    init: function (text, type, timer) {
      if (timer == undefined) {
        this.timer = 2000;
      } else {
        this.timer = timer < 1000 ? 1000 : timer;
      }
      this.text = text;
      this.type = type;
      this.show();
    },
    show: function () {
      var _self = this;
      var body = document.getElementsByTagName('body')[0];
      var yer_number = document.getElementsByClassName('yer-bar').length;
      _self.yer_index = yer_number;
      var color_ = "";
      switch (this.type) {
          case  0: color_ = "";break;
          case 1: color_ = "yer-con-normal";break;
          default: color_ = "";
      }
      if (_self.yer_index == 0) {
        body.insertAdjacentHTML('afterbegin', '<svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;"><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M146.967838 157.760047C222.689427 82.038458 320.328188 32.9259 428.20308 17.433044c131.865283-18.929118 263.271102 14.666024 369.912911 94.541213C904.781336 191.878099 973.955812 308.526819 992.899256 440.416662c39.10974 272.356015-150.686954 525.654998-422.903799 564.788274-114.145713 16.378016-231.194546-7.538697-329.593624-67.281359-16.830317-10.234085-22.174022-32.156374-11.967566-48.964178 10.301623-16.70138 32.124651-22.198581 48.959062-11.966543 84.287685 51.229778 184.604438 71.714322 282.476513 57.653071 233.284137-33.462113 395.96117-250.623038 362.476545-484.09751C906.113681 337.50685 846.824343 237.540068 755.379655 169.075767c-91.419106-68.492954-204.033953-97.243765-317.046866-80.993662C204.797941 121.552403 42.190493 338.737888 75.733447 572.161195c8.789177 61.107753 30.007431 118.210285 63.145156 169.685657 10.631128 16.588817 5.79703 38.71065-10.658757 49.266054-16.555048 10.658757-38.629809 5.865591-49.25889-10.659781C40.272817 720.254068 15.477085 653.630694 5.174438 582.290903-13.750587 450.41948 19.816926 318.981938 99.773979 212.31557 114.310044 192.840006 130.085332 174.642552 146.967838 157.760047L146.967838 157.760047 146.967838 157.760047zM146.967838 157.760047"></path><path d="M552.831542 505.922584l154.088424-152.418388c14.004969-13.82282 14.108323-36.383652 0.285502-50.387597-13.82896-14.009062-36.421514-14.113439-50.392714-0.289596L502.51046 455.429587 350.564839 303.007105c-13.939477-13.927197-36.4604-14.009062-50.392714-0.065492-13.933337 13.894452-13.9712 36.450167-0.067538 50.387597l151.732773 152.203494L298.84899 656.879692c-14.000875 13.865799-14.109346 36.384675-0.281409 50.392714 6.980995 7.05672 16.145725 10.583033 25.339108 10.583033 9.051143 0 18.10024-3.454682 25.048489-10.29753l153.203264-151.525042 154.445558 154.946978c6.947226 6.985088 16.068977 10.477632 25.228591 10.477632 9.122775 0 18.210757-3.492544 25.159006-10.407024 13.932314-13.894452 13.96506-36.421514 0.070608-50.386574L552.831542 505.922584 552.831542 505.922584 552.831542 505.922584zM552.831542 505.922584"></path></symbol></svg>');
      }
      body.insertAdjacentHTML('beforeend', "" +
        "<div class='yer-bar' id='yer_bar" + _self.yer_index + "' style='top: " + (240 + _self.yer_index * 44) + "px;' >" +
        "<div class='yer-con " + color_ + "'>" +
        _self.text +
        "<span class='close'>" +
        "<svg class='icon' aria-hidden='true'>" +
        "<use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#icon-close'></use>" +
        "</svg>" +
        "</span>" +
        "</div>" +
        "</div>");
      var new_yer_bar = document.getElementById("yer_bar" + _self.yer_index + "");

      setTimeout(function () {
        new_yer_bar.style.opacity = 1;
      }, 200);
      var inter = setTimeout(function () {
        new_yer_bar.style.opacity = 0;
        setTimeout(function () {
          if (new_yer_bar.parentNode != null) {
            new_yer_bar.parentNode.removeChild(new_yer_bar);
          }
        }, 500);
      }, _self.timer);
      var span_close = (new_yer_bar.children)[0].children[0];
      span_close.addEventListener('click', function () {
        new_yer_bar.style.opacity = 0;
        setTimeout(function () {
          if (new_yer_bar.parentNode != null) {
            new_yer_bar.parentNode.removeChild(new_yer_bar);
          }
        }, 500);
      });
    }
  };
  yer.prototype.init.prototype = yer.prototype;
})();
