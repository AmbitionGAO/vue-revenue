<template>
    <div id="app">
      <Header></Header>
      <side-nav></side-nav>
      <router-view/>
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

