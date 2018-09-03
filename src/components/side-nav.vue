<template>
  <Col span="4" class="side-nav" >
    <Menu :theme="'light'" accordion width="auto">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-desktop-outline" />
          系统管理
        </template>
        <MenuItem name="1-1" @click.native="gotoAddress('/user')" :class="{on : this.$route.path==='/user'}">用户管理</MenuItem>
        <MenuItem name="1-2" @click.native="gotoAddress('/role')" :class="{on : this.$route.path==='/role'}">角色管理</MenuItem>
        <MenuItem name="1-3" @click.native="gotoAddress('/menu')" :class="{on : this.$route.path==='/menu'}">菜单管理</MenuItem>
        <MenuItem name="1-4" @click.native="gotoAddress('/request')" :class="{on : this.$route.path==='/request'}">请求管理</MenuItem>
        <MenuItem name="1-5" @click.native="gotoAddress('/task')" :class="{on : this.$route.path==='/task'}">任务调度</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-stats" />
          基础数据
        </template>
        <MenuItem name="2-1" @click.native="gotoAddress('/legal')" :class="{on : this.$route.path==='/legal'}">法人主体</MenuItem>
        <MenuItem name="2-2" @click.native="gotoAddress('/exchange')" :class="{on : this.$route.path==='/exchange'}">汇率</MenuItem>
        <MenuItem name="2-3" @click.native="gotoAddress('/financing')" :class="{on : this.$route.path==='/financing'}">金融机构</MenuItem>
        <MenuItem name="2-4" @click.native="gotoAddress('/counterparty')" :class="{on : this.$route.path==='/counterparty'}">交易方</MenuItem>
        <MenuItem name="2-5" @click.native="gotoAddress('/dictionary')" :class="{on : this.$route.path==='/dictionary'}">数据字典</MenuItem>
      </Submenu>


      <!--<Submenu name="3">-->
      <!--<template slot="title">-->
      <!--<Icon type="ios-card-outline" />-->
      <!--付款管理-->
      <!--</template>-->
      <!--<MenuGroup title="使用">-->
      <!--<MenuItem name="3-1">新增和启动</MenuItem>-->
      <!--<MenuItem name="3-2">活跃分析</MenuItem>-->
      <!--<MenuItem name="3-3">时段分析</MenuItem>-->
      <!--</MenuGroup>-->
      <!--<MenuGroup title="留存">-->
      <!--<MenuItem name="3-4">用户留存</MenuItem>-->
      <!--<MenuItem name="3-5">流失用户</MenuItem>-->
      <!--</MenuGroup>-->
      <!--</Submenu>-->
      <!--<Submenu name="4">-->
      <!--<template slot="title">-->
      <!--<Icon><img src="../assets/img/cny.svg" width="14" height="14 "></Icon>-->
      <!--<Icon custom="i-icon" size="14" />-->
      <!--收入管理-->
      <!--</template>-->
      <!--<MenuItem name="1-1" @click.native="gotoAddress('/gather')" :class="{on : this.$route.path==='/gather'}">收入管理</MenuItem>-->
      <!--</Submenu>-->

      <Submenu name="5">
        <template slot="title">
          <Icon type="ios-card" />
          收款管理
        </template>
        <MenuItem name="2-1" @click.native="gotoAddress('/gather')" :class="{on : this.$route.path==='/gather'}">收款管理</MenuItem>
      </Submenu>
      <!--<Submenu name="6">-->
      <!--<template slot="title">-->
      <!--<Icon type="ios-list-box-outline" />-->
      <!--会员管理-->
      <!--</template>-->
      <!--<MenuItem name="2-1">新增用户</MenuItem>-->
      <!--<MenuItem name="2-2">活跃用户</MenuItem>-->
      <!--</Submenu>-->
      <Submenu name="7">
        <template slot="title">
          <Icon type="ios-calculator-outline" />
          报表管理
        </template>
        <MenuItem name="7-1" @click.native="gotoAddress('/ourAgent')" :class="{on : this.$route.path==='/ourAgent'}">我方代收款明细表</MenuItem>
        <MenuItem name="7-2" @click.native="gotoAddress('/otherAgent')" :class="{on : this.$route.path==='/otherAgent'}">交易方代收款明细表</MenuItem>
        <MenuItem name="7-3" @click.native="gotoAddress('/recognition')" :class="{on : this.$route.path==='/recognition'}">认款明细表</MenuItem>
      </Submenu>
    </Menu>
  </Col>

</template>

<script>
  export default {
    name: "side-nav",
    methods: {
      gotoAddress (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang='scss'>
  .side-nav{
    border-right: 0.02rem solid #f8f8f8;
    /*Menu{*/
    /*width:2.28rem*/
    /*}*/
  }
  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    font-size:0.14rem;
    padding: 0.14rem 0.24rem;
  }
  .ivu-menu{
    font-size:0.14rem;
  }
  @font-face {
    font-family: "custom-font";
    src: url('../assets/img/cny.svg');
  }


</style>
