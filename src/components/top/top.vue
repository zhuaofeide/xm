<template>
  <div class="v-header">
    <div class="content">
      <div class="logo">
        <span>&nbsp;</span>
        <div class="logo-i">
          <p>
            <b class="com">鑫马精工</b>
            <span class="com-e">Simmar</span>
          </p>
          <p class="title">全球工业配件供应管家</p>
        </div>
        <span>&nbsp;</span>
      </div>
      <div class="right">
        <div class="search">
          <span>&nbsp;</span>
          <Input v-model="value1" placeholder="请输入搜索内容" size="large" icon="ios-search"/>
         <p class="lip-content">
           <span class="lip">西图</span>
           <span class="lip">兰库</span>
           <span class="lip">班赛</span>
           <span class="lip">西图</span>
           <span class="lip">兰库</span>
           <span class="lip">班赛</span>
           <span class="lip">西图</span>
           <span class="lip">兰库</span>
           <span class="lip">班赛</span>
           <span class="lip">西图</span>
           <span class="lip">兰库</span>
           <span class="lip">班赛</span>
         </p>
        </div>
        <div class="tip">
          <span>&nbsp;</span>
          <span class="tip-img"></span>
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
    <div class="header-bar">
        <div class="header-content">
          <div class="content-left">
            <p class="content-text">
              <Icon type="navicon-round"></Icon>
              <span class="all-type">全部分类</span>
            </p>

          </div>
          <div class="content-right">
            <router-link to="index" class="item">首页</router-link>
            <router-link to="product" class="item">产品中心</router-link>
            <router-link to="about" class="item">关于我们</router-link>
            <router-link to="contact" class="item">联系我们</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  components: {
  },
  data () {
    return {
      value1: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  .content
    width 1200px
    margin 0 auto
    display flex
    justify-content space-between
    padding 1rem 0
    .logo
      display flex
      flex-direction column
      justify-content space-between
      .logo-i
      .com
        font-size 1.5rem
        line-height 1.8rem
        letter-spacing 2px
      .com-e
        font-size 1.2rem
        line-height 1.2rem
        color $color-dialog-background
      .title
        font-size 1rem
        line-height 1.6rem
        letter-spacing 3px
        color $color-dialog-background
    .right
     display flex
     .search
      width 450px
      margin-right 1rem
      display flex
      flex-direction column
      justify-content space-between
      .lip-content
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        padding 0 10px
        .lip
          font-size 0.8rem
          line-height 1rem
          color $color-text5
          margin-right 10px
     .tip
       display flex
       flex-direction column
       justify-content space-between
      .tip-img
         width: 200px
         height: 35px
         display inline-block
         background url("./images/wister.png") 0 -146px no-repeat
  .header-bar
    width 100%
    height 45px
    background $color-theme
    .header-content
      width 1200px
      margin 0 auto
      display flex
      .content-left
        width 250px
        .content-text
          color $color-text3
          padding-left 10px
          font-size 1rem
          line-height 45px
          .all-type
            margin-left 10px
      .content-right
        flex 1 0 auto
        display flex
        .item
          color $color-text3
          display block
          font-size 1rem
          line-height 45px
          width 25%
          text-align center
        .item:hover
          background $color-theme2
  .router-link-active
    background $color-theme2!important
</style>
