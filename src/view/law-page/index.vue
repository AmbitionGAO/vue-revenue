<template>
  <div class="index-main">
    <div>
      <Tabs :animated="false" style="padding: 32px" >
        <!--<Tab-pane label="营收业务期间">erhtdfbvxh</Tab-pane>-->
        <!--<Tab-pane label="法人主体">-->
          <LawPerson></LawPerson>
        <!--</Tab-pane>-->
        <!--<Tab-pane label="收入管理新增"></Tab-pane>-->
        <!--<Tab-pane label="付款管理"></Tab-pane>-->
        <!--<Tab-pane label="付款管理新增"></Tab-pane>-->
      </Tabs>
    </div>


  </div>
</template>

<script>
  import Header from "../../components/header";
  import SideNav from "../../components/side-nav";
  import LawPerson from "./components/lawperson"

  export default {
    name: "Index",
    components: {
      SideNav,
      Header,
      LawPerson
    },
    data() {
      return {

      };
    },
  };
</script>
<style scoped lang='scss'>
  .index-main{
    background: #f8f8f0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

  }


</style>
