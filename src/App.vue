<template>
    <div id="app">
        <Header class="header-cont"></Header>
        <div class="cont-wrapper">
          <side-nav class="side-cont" :style="{height: sideHeight + 'px'}"></side-nav>
          <Col span="20">
            <router-view class="view-cont"></router-view>
          </Col>
        </div>

    </div>
</template>

<script>

import Header from "./components/header";
import SideNav from "./components/side-nav";
export default {
  name: "App",
  components: {SideNav, Header},
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
  .cont-wrapper {
  }
  .side-cont {
  }
  .view-cont {
  }
</style>

