# admin_template_front
admin_template_front

## 简介
后台管理前端

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)。

## 开发

```bash
# 克隆项目
git clone https://github.com/Heehes/admin_template_front.git

# 进入项目目录
cd admin_template_front

# 安装依赖
npm install

# 启动服务
npm run serve
```

## 目录

```
- assets
  - 401图片
  - 404图片
  - iconfont 图标文件
  - imgs 切图
  - style 样式
- components 组件
  - public
    - labelContent 内容盒子
    - searchBox 搜索盒子
    - menu  菜单
    - tagView 页面内标签页
- libs
  - http http封装
  - loading
  - permission 权限
  - utils 公用方法
-routes
  - routes
    - 模块路由文件
- store 状态管理
- views 所有页面
  - errorPage 错误页面
  - Home 首页
  - layout
  - login
```

## 发布

```bash
# 构建测试环境
npm run build

```