<template xmlns="">
  <Layout>

    <div class="header">
        <img src="../assets/img/logo.png" class="logo"/>
        <div class="line">
          <Icon type="md-list" size="23" color="rgba(0,0,0,0.65)" @click.native="collapsedSider" :class="rotateIcon"/>
        </div>
        <div class="font">
          <span>营收中心</span><span>Revenue Center</span>
        </div>
        <div class="user">
          <img src="../assets/img/headIcon.jpg" class="head-icon"/>
          <span>木杉</span>
        </div>
        <Dropdown class="pull-down-list">
          <a href="javascript:void(0)">
            角色
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list" >
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button type="text" class="esc">退出</Button>
    </div>
  </Layout>
</template>

<script>
    export default {
      name: "Header",
      methods: {
        collapsedSider () {
          this.$refs.side1.toggleCollapse();
        }
      }
    }
</script>

<style scoped lang='scss'>
  .header{
      width:14.40rem;
      height:0.64rem;
      background:#fff;
      border-bottom: 0.02rem solid #f8f8f8;
  }
  .logo{
    width:1.06rem;
    height: 0.27rem;
    position: absolute;
    left:0.31rem;
    top:0.18rem;
  }
  .line{
    position: absolute;
    left:1.87rem;
    top:0.25rem;
  }
  .font{
    position: absolute;
    left:2.57rem;
    top:0.25rem;
    color:#000;
    letter-spacing:0;
    font-size:0.14rem;
    text-align:left;
    opacity:0.65;
    span:first-child{
      font-family: "PingFang SC",sans-serif;
    }
    span:last-child{
      margin-left: 0.1rem;
      font-family: Arial,sans-serif;
    }
  }
  .pull-down-list{
    position: absolute;
    right:0.91rem;
    top:0.21rem;
    opacity:0.65;
    font-size: 0.14rem;
  }
  .esc{
    position: absolute;
    right:0.31rem;
    top:0.12rem;
    opacity:0.65;
    font-size: 0.14rem;
  }
  .user{
    .head-icon{
      position: absolute;
      right:2.17rem;
      top:0.18rem;
      width: 0.24rem;
      height:0.24rem;
      border-radius: 0.12rem;
    }
    span{
      position: absolute;
      right:1.79rem;
      top:0.21rem;
      font-size: 0.14rem;
      opacity:0.65;
    }
  }






</style>
<!--<Submenu name="1" >-->
<!--<template slot="title">-->
<!--<Icon type="ios-desktop-outline" />-->
<!--<span>系统管理</span>-->
<!--</template>-->
<!--<MenuItem name="1-1" @click.native="gotoAddress('/user')">用户管理</MenuItem>-->
<!--<MenuItem name="1-2" @click.native="gotoAddress('/role')">角色管理</MenuItem>-->
<!--<MenuItem name="1-3" @click.native="gotoAddress('/menu')">菜单管理</MenuItem>-->
<!--<MenuItem name="1-4" @click.native="gotoAddress('/request')">请求管理</MenuItem>-->
<!--<MenuItem name="1-5" @click.native="gotoAddress('/task')">任务调度</MenuItem>-->
<!--</Submenu>-->
<!--<Submenu name="2">-->
<!--<template slot="title">-->
<!--<Icon type="ios-stats" />-->
<!--<span>基础数据</span>-->
<!--</template>-->
<!--<MenuItem name="2-1" @click.native="gotoAddress('/legal')">法人主体</MenuItem>-->
<!--<MenuItem name="2-2" @click.native="gotoAddress('/exchange')">汇率</MenuItem>-->
<!--<MenuItem name="2-3" @click.native="gotoAddress('/financing')">金融机构</MenuItem>-->
<!--<MenuItem name="2-4" @click.native="gotoAddress('/counterparty')">交易方</MenuItem>-->
<!--<MenuItem name="2-5" @click.native="gotoAddress('/dictionary')">数据字典</MenuItem>-->
<!--</Submenu>-->
<!--<Submenu name="3">-->
<!--<template slot="title">-->
<!--<Icon type="ios-card" />-->
<!--<span>收款管理</span>-->
<!--</template>-->
<!--<MenuItem name="3-1" @click.native="gotoAddress('/gather')">收款管理</MenuItem>-->
<!--</Submenu>-->
<!--<Submenu name="4">-->
<!--<template slot="title">-->
<!--<Icon type="ios-calculator-outline" />-->
<!--<span>报表管理</span>-->
<!--</template>-->
<!--<MenuItem name="4-1" @click.native="gotoAddress('/ourAgent')">我方代收款明细表</MenuItem>-->
<!--<MenuItem name="4-2" @click.native="gotoAddress('/otherAgent')">交易方代收款明细表</MenuItem>-->
<!--<MenuItem name="4-3" @click.native="gotoAddress('/recognition')">认款明细表</MenuItem>-->
<!--</Submenu>-->


<!--<MenuItem name="1-1" >-->
  <!--<Dropdown>-->
    <!--<a href="javascript:void(0)">-->
      <!--<Icon type="ios-desktop-outline" />-->
      <!--<span>系统管理</span>-->
    <!--</a>-->
    <!--<DropdownMenu slot="list" class="dropdown">-->
      <!--<DropdownItem @click.native="gotoAddress('/user')">用户管理</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/role')">角色管理</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/menu')">菜单管理</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/request')">请求管理</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/task')">任务调度</DropdownItem>-->
    <!--</DropdownMenu>-->
  <!--</Dropdown>-->
<!--</MenuItem>-->
<!--<MenuItem name="1-2">-->
  <!--<Dropdown >-->
    <!--<a href="javascript:void(0)">-->
      <!--<Icon type="ios-stats" />-->
      <!--<span>基础数据</span>-->
    <!--</a>-->
    <!--<DropdownMenu slot="list" class="dropdown">-->
      <!--<DropdownItem @click.native="gotoAddress('/legal')">法人主体</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/exchange')">汇率</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/financing')">金融机构</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/counterparty')">交易方</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/dictionary')">数据字典</DropdownItem>-->
    <!--</DropdownMenu>-->
  <!--</Dropdown>-->
<!--</MenuItem>-->
<!--<MenuItem name="1-3">-->
  <!--<Dropdown >-->
    <!--<a href="javascript:void(0)">-->
      <!--<Icon type="ios-card" />-->
      <!--<span>收款管理</span>-->
    <!--</a>-->
    <!--<DropdownMenu slot="list" class="dropdown">-->
      <!--<DropdownItem @click.native="gotoAddress('/gather')">收款管理</DropdownItem>-->
    <!--</DropdownMenu>-->
  <!--</Dropdown>-->
<!--</MenuItem>-->
<!--<MenuItem name="1-4">-->
  <!--<Dropdown >-->
    <!--<a href="javascript:void(0)">-->
      <!--<Icon type="ios-calculator-outline" />-->
      <!--<span>报表管理</span>-->
    <!--</a>-->
    <!--<DropdownMenu slot="list" class="dropdown" :style="{'font-size':'0.13rem'}">-->
      <!--<DropdownItem @click.native="gotoAddress('/ourAgent')">我方代收款明细表</DropdownItem >-->
      <!--<DropdownItem @click.native="gotoAddress('/otherAgent')">交易方代收款明细表</DropdownItem>-->
      <!--<DropdownItem @click.native="gotoAddress('/recognition')">认款明细表</DropdownItem>-->
    <!--</DropdownMenu>-->
  <!--</Dropdown>-->
<!--</MenuItem>-->
