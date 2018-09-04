<template>
  <!--<Layout>-->
        <!--<Header class="header-cont"></Header>-->
    <!--<Layout>-->
      <!--<side-nav class="side-cont" :style="{height: sideHeight + 'px'}" hide-trigger span="4"></side-nav>-->
      <!--<Content span="20"><router-view class="view-cont"></router-view></Content>-->
    <!--</Layout>-->
  <!--</Layout>-->
<test></test>
</template>
<script>

import Header from "./components/header";
import SideNav from "./components/side-nav";
import Test from "./components/test";
export default {
  name: "App",
  components: {Test, SideNav, Header},
  data() {
    return {
      sideHeight: document.documentElement.clientHeight - 64,
    };
  }
};
(function () {
  let winW = document.documentElement.clientWidth, desW = 1440, htmlFont = winW / desW * 100;
  window.htmlFont = htmlFont;
  document.documentElement.style.fontSize = htmlFont + "px";
})();
</script>

<style scoped lang='scss'>
  body{
    background: #f8f8f8;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>

