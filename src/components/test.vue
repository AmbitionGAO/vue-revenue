<template>
  <div class="layout">
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar" ref="side1">
        <div class="header">
          <!--<img src="../assets/img/logo.png" class="logo"/>-->
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
            <MenuItem name="1-1" >
              <Dropdown >
              <a href="javascript:void(0)">
              <Icon type="ios-desktop-outline" />
              <span>系统管理</span>
              </a>
              <DropdownMenu slot="list" class="dropdown">
                  <DropdownItem @click.native="gotoAddress('/user')">用户管理</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/role')">角色管理</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/menu')">菜单管理</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/request')">请求管理</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/task')">任务调度</DropdownItem>
              </DropdownMenu>
              </Dropdown>
            </MenuItem>
            <MenuItem name="1-2">
              <Dropdown >
                <a href="javascript:void(0)">
                  <Icon type="ios-stats" />
                  <span>基础数据</span>
                </a>
                <DropdownMenu slot="list" class="dropdown">
                  <DropdownItem @click.native="gotoAddress('/legal')">法人主体</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/exchange')">汇率</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/financing')">金融机构</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/counterparty')">交易方</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/dictionary')">数据字典</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
            <MenuItem name="1-3">
              <Dropdown >
                <a href="javascript:void(0)">
                  <Icon type="ios-card" />
                  <span>收款管理</span>
                </a>
                <DropdownMenu slot="list" class="dropdown">
                  <DropdownItem @click.native="gotoAddress('/gather')">收款管理</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
            <MenuItem name="1-4">
              <Dropdown >
                <a href="javascript:void(0)">
                  <Icon type="ios-calculator-outline" />
                  <span>报表管理</span>
                </a>
                <DropdownMenu slot="list" class="dropdown" :style="{'font-size':'0.13rem'}">
                  <DropdownItem @click.native="gotoAddress('/ourAgent')">我方代收款明细表</DropdownItem >
                  <DropdownItem @click.native="gotoAddress('/otherAgent')">交易方代收款明细表</DropdownItem>
                  <DropdownItem @click.native="gotoAddress('/recognition')">认款明细表</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </MenuItem>
          </Menu>
          <Menu theme="light" width="auto" :class="menuitemClasses" :style="{height: sideHeight + 'px'}" accordion v-show="!isCollapsed">
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
            <Submenu v-for="item in menuData" :name="item.name">
              <template slot="title">
                <Icon :type="item.icon"></Icon><span>{{item.label}}</span>
              </template>
              <menu-item v-for="mi in item.menuitems" :name="mi.name" @click.native="gotoAddress(mi.url)">{{mi.label}}</menu-item>
            </Submenu>
          </Menu>
        </Sider>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <div class="layout-content-main" >
            <Tabs type="card" @on-tab-remove="removeTab" @on-click="clickTab" :animated="false" :value="activeTab">
              <template v-for="(item,index) in mainTabs">
                <tab-pane :label="item.label" closable :name="item.name" v-if="item.show">
                  <iframe frameborder="0" width="100%" :height="frameHeight" marginheight="0" scrolling="auto" marginwidth="0" :src="item.url"></iframe>
                </tab-pane>
              </template>
            </Tabs>
          </div>
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
              {name:'m2-1',label:'法人主体',url:'/legal'},
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
      clickTab:function(name){
        var vm=this;
        vm.frameHeight -= 1;
        //解决chrome浏览器中tab切换滚动条消失的问题。
        window.setTimeout(function(){
          vmvm.frameHeight=vm.frameHeight+1;
        },100);
      },
      //根据名称来查找对应的菜单条目
      getMenuItem:function(name){
        for(var sm=0; sm<this.menuData.length; sm++){
          for(var mi=0; mi<this.menuData[sm].menuitems.length; mi++){
            if(this.menuData[sm].menuitems[mi].name===name)return this.menuData[sm].menuitems[mi];
          }
        }
        return {};//这个应该不可能发生
      },
      //根据名称查找对应的Tab页。
      getTab:function(name){
        for(let i=0; i<this.mainTabs.length; i++){
          if(this.mainTabs[i].name===name)return this.mainTabs[i];
        }
        return null;//没有找到
      },
      //设置Tab页不可见。
      removeTab:function (name) {
        var tab = this.getTab(name);
        if(tab!=null)tab.show=false;
        console.log("mainTabRemove, name=",name,", label=",tab.label,", url=",tab.url);
      },
      setFrameHeight:function(){
        //调整掉一些补白的值
        this.mainHeight = (document.documentElement.scrollHeight || document.body.scrollHeight)-90-90;
        this.frameHeight = this.mainHeight-90;
      },
      //菜单点击
      menuSelect:function(name){
        this.$Message.info(name);
        var tab = this.getTab(name);
        if(tab==null){
          var mi = this.getMenuItem(name);
          var mi = $.extend({},mi,{show:true});
          this.mainTabs.push(mi);
        }
        else{
          tab.show=true;
        }
        this.activeTab=name;
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

</style>
