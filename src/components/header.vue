<template xmlns="">
    <div class="header">
        <img src="../assets/img/logo.png" class="logo"/>
        <div class="line">
          <Icon type="md-list" size="23" color="rgba(0,0,0,0.65)"/>
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
</template>

<script>
    export default {
        name: "Header"
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
