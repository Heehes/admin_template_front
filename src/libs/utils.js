var utils = {};
//公共处理方法
utils.install = function(Vue, option) {
  //localStorage Set
  Vue.prototype.lsSet = function(name, data) {
    if (name && data) {
      if (typeof name != "string") {
        console.error("lsSet Error: name type error");
      } else {
        localStorage.setItem(name, JSON.stringify(data));
      }
    } else {
      console.error("lsSet Error:name or data undefined");
    }
  };
  //localStorage Get
  Vue.prototype.lsGet = function(name) {
    if (typeof name != "string") {
      console.error("lsSet Error: name type error");
    } else {
      if(localStorage.getItem(name))
        return JSON.parse(localStorage.getItem(name));
      return null
    }
  };
  // 获取当前时间
  Vue.prototype.getDateTime = function(fmt) {
    if(!fmt) fmt = 'yyyy-MM-dd hh:mm:ss'
    let data = new Date();
    var o = {
      "M+": data.getMonth() + 1, // 月份
      "d+": data.getDate(), // 日
      "h+": data.getHours(), // 小时
      "m+": data.getMinutes(), // 分
      "s+": data.getSeconds(), // 秒
      "q+": Math.floor((data.getMonth() + 3) / 3), // 季度
      S: data.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (data.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
    return fmt;
  };
  //页面跳转
  Vue.prototype.jump = function(path) {
    if (path == "back") {
      this.$router.go(-1);
    } else {
      this.$router.push({ path: path });
    }
  };
};

export default utils;
