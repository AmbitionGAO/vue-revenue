<template>
  <div class="layout">
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar" ref="side1">
        <div class="header">
          <img v-show="isCollapsed" src="../assets/img/logo-min.png" key="min-logo" class="logomin"/>
          <img v-show="!isCollapsed" src="../assets/img/logo.png" key="max-logo" class="logo"/>
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
      </Header>
      <Layout :style="{'margin-top': '0.07rem'}">
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" accordion>
          <Menu theme="light" width="auto" :class="menuitemClasses" :style="{height: sideHeight + 'px'}" accordion v-show=" isCollapsed">
            <MenuItem v-for="item in menuData" :name="item.name">
              <Dropdown>
                <a href="javascript:void(0)">
                  <Icon :type="item.icon" />
                  <span>{{item.label}}</span>
                </a>
                <DropdownMenu slot="list" class="dropdown">
                  <DropdownItem v-for="mi in item.menuitems" :name="mi.name" @click.native="changetab(mi.url,mi)">{{mi.label}}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
          </Menu>
          <Menu theme="light" width="auto" :class="menuitemClasses" :style="{height: sideHeight + 'px'}" accordion v-show="!isCollapsed">
            <Submenu v-for="item in menuData" :name="item.name">
              <template slot="title">
                <Icon :type="item.icon"></Icon><span>{{item.label}}</span>
              </template>
              <menu-item v-for="mi in item.menuitems" :name="mi.name" @click.native="changetab(mi.url,mi,mi.name)">{{mi.label}}</menu-item>
            </Submenu>
          </Menu>
        </Sider>
        <Content :style="{margin: '0.1rem', background: '#fff', minHeight: '2.60rem'}">
          <!--<div class="layout-content-main" >-->
            <!--<Tabs type="card" @on-tab-remove="removeTab" @on-click="clickTab" :animated="false" :value="activeTab">-->
              <!--<template v-for="item in mainTabs">-->
                <!--<tab-pane :label="item.label" closable :name="item.name" v-if="item.show">-->
                  <!--<iframe frameborder="0" width="100%" :height="frameHeight" marginheight="0" scrolling="auto" marginwidth="0" :src="item.url"></iframe>-->
                <!--</tab-pane>-->
              <!--</template>-->
            <!--</Tabs>-->
          <!--</div>-->
          <Tabs type="card" closable :animated="false" :value="activeTab">
            <template v-for="tab in tabss">
            <TabPane :label="tab.label" :name="tab.name" @click.native="gotoAddress(tab.url)">
              <router-view></router-view>
            </TabPane>
            </template>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    name:'test',
    data () {
      return {
        menuData:[
          {   label:'系统管理',name:"m1",icon:"ios-desktop-outline",
            menuitems:[
              {name:'m1-1',label:'用户管理',url:'/user'},
              {name:'m1-2',label:'角色管理',url:'/role'},
              {name:'m1-3',label:'菜单管理',url:'/menu'},
              {name:'m1-4',label:'请求管理',url:'/request'},
              {name:'m1-5',label:'任务调度',url:'/task'},
            ]
          },
          {   label:'基础数据',name:"m2",icon:'ios-stats',
            menuitems:[
              {name:'m2-1',label:'法人主体',url:'/law'},
              {name:'m2-2',label:'汇率',url:'/exchange'},
              {name:'m2-3',label:'金融机构',url:'/financing'},
              {name:'m2-4',label:'交易方',url:'/counterparty'},
              {name:'m2-5',label:'数据字典',url:'/task'},
            ]
          },
          {   label:'收款管理',name:"m3",icon:'ios-card',
            menuitems:[
              {name:'m3-1',label:'收款管理',url:'/gather'},
            ]
          },
          {   label:'报表管理',name:"m4",icon:'ios-calculator-outline',
            menuitems:[
              {name:'m4-1',label:'我方代收款明细表',url:'/ourAgent'},
              {name:'m4-2',label:'交易方代收款明细表',url:'/otherAgent'},
              {name:'m4-3',label:'认款明细表',url:'/recognition'},
            ]
          }
        ],
        activeTab:null,
        mainHeight: 0,
        frameHeight: 0,
        tabs:[],
        tabss:[],
        mainTabs:[],
        i1:false,
        isCollapsed: false,
      sideHeight: document.documentElement.clientHeight - 64,
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    mounted:function(){
      this.setFrameHeight();
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      gotoAddress (path) {
        this.$router.push(path);
      },
      changetab(path,active,iname){
        this.gotoAddress(path);
        this.tabs.push(active);
        this.tabss = [... new Set(this.tabs)];
        this.activeTab=iname;
      },

    }
  }
</script>
<style scoped >
  .dropdown{
    position: absolute;
    left:0.35rem;
    top:-0.4rem;
    background: white;
    z-index: 100;
  }
  .layout{
    border: 0.01rem solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 0.04rem;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 0.01rem 0.01rem rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 0.3rem;
    background: #5b6270;
    border-radius: 0.03rem;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 0.69rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0rem);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 0.14rem;
  }
  .collapsed-menu span{
    width: 0rem;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 0.22rem;
  }


  .header{
    width: 14.4rem;
    height:0.64rem;
    background:#fff;
    position: relative;
    border-bottom: 0.02rem solid #f8f8f8;
  }
  .logo{
    width:1.06rem;
    height: 0.27rem;
    position: absolute;
    left:0.28rem;
    top:0.15rem;
  }
  .logomin{
    /*width:1.06rem;*/
    height: 0.27rem;
    width:auto;
    position: absolute;
    left:0.22rem;
    top:0.15rem;
  }
  .line{
    position: absolute;
    left:1.87rem;
    top:0.05rem;
  }
  .font {
    position: absolute;
    left: 2.57rem;
    top: 0.05rem;
    color: #000;
    letter-spacing: 0;
    font-size: 0.14rem;
    text-align: left;
    opacity: 0.65;
  }
  .font span:first-child{
    font-size: 0.14rem;
    font-family: "PingFang SC",sans-serif;
    }
  .font span:last-child{
    font-size: 0.14rem;
    margin-left: 0.1rem;
    font-family: Arial,sans-serif;
    }

  .pull-down-list{
    position: absolute;
    right:0.91rem;
    top:0.06rem;
    opacity:0.65;
    font-size: 0.14rem;
  }
  .esc{
    position: absolute;
    right:0.31rem;
    top:0.15rem;
    opacity:0.65;
    font-size: 0.14rem;
  }

  .user .head-icon{
    position: absolute;
    right:2.17rem;
    top:0.18rem;
    width: 0.24rem;
    height:0.24rem;
    border-radius: 0.12rem;
    }
  .user span{
    position: absolute;
    right:1.79rem;
    top:0.05rem;
    font-size: 0.14rem;
    opacity:0.65;
    }
  .ivu-menu{
    font-size:0.14rem;
  }
  .ivu-menu-item{
    font-size: 0.12rem;
  }
  .ivu-dropdown-item{
    font-size: 0.13rem;
  }
  .layout-logo{
    width: 100px;
    height: 40px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-content{
    position:absolute;
    right:0;
    left:0;
    top:90px;
    bottom:90px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    min-height: 400px;
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 5px 0 10px;
    color: #9ea7b4;
    position:absolute;
    bottom:0;
    right:0;
    left:0;
    width:100%;
    height:90px;
  }
  .layout-top{
    position:absolute;
    top:0;
    right:0;
    left:0;
    width:100%;
    height:90px;
  }

</style>
