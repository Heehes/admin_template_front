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
      return JSON.parse(localStorage.getItem(name));
    }
  };
  Vue.prototype.getDateTime = function(type) {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    var h = date.getHours();
    h = h < 10 ? "0" + h : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  };
  //页面跳转
  Vue.prototype.jump = function(pagename) {
    if (pagename == "back") {
      this.$router.go(-1);
    } else {
      this.$router.push({ name: pagename });
    }
  };
  //页面权限验证
  Vue.prototype.authPower = function(code) {
    if(code){
      
    }
    return true
  };
};

export default utils;
