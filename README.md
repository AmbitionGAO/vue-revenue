# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies( 通过淘宝镜像下载依赖)
npm run i  

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 文件夹结构化规范
``` bash
   ├── index.html                      入口页面
   ├── build                           构建脚本目录
   │   ├── build-server.js                 运行本地构建服务器，可以访问构后的页面
   │   ├── build.js                        生产环境构建脚本
   │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
   │   ├── dev-server.js                   运行本地开发服务器
   │   ├── utils.js                        构建相关工具方法
   │   ├── webpack.base.conf.js            wabpack基础配置
   │   ├── webpack.dev.conf.js             wabpack开发环境配置
   │   └── webpack.prod.conf.js            wabpack生产环境配置
   ├── config                          项目配置
   │   ├── dev.env.js                      开发环境变量
   │   ├── index.js                        项目配置文件
   │   ├── prod.env.js                     生产环境变量
   │   └── test.env.js                     测试环境变量
   ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
   ├── src                             项目源码目录    
   │   ├── main.js                         入口js文件
   │   ├── App.vue                         根组件
   │   ├── components                      公共组件目录
   │   │   └── title.vue
   │   ├── assets                          资源目录，这里的资源会被wabpack构建
   │   │   ├── style                         公共样式文件目录
   │   │   ├── js                          公共js文件目录
   │   │   └── img                      图片存放目录
   │   ├── routes                          前端路由
   │   │   └── index.js
   │   ├── store                           应用级数据（state）
   │   │   └── ...
   │   ├── api                           接口管理
   │   │   └── index.js
   │   └── views                           页面目录
   │       └── hello.vue
   ├── static                          纯静态资源，不会被wabpack构建。
   
   ```