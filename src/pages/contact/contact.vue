<template>
  <div class="content-box">
    <v-header></v-header>
    <div class="content">
      <div class="wrapper">
        <div class="content-title">
          <p>联系我们</p>
        </div>
        <div class="content-inner">
          <p class="address">深圳公司</p>
          <div class="text">
            <p><span>地址：</span>深圳市光明新区光明街道白花社区黄屋排三巷25号B三层</p>
            <p><span>电话：</span>13927414531</p>
            <p><span>邮箱：</span>xinma@xm658.com</p>
            <p><span>网址：</span>http://www.xm658.com</p>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/top/top'
  import footer from '@/components/footer/footer'
  export default {
    components: {
      'v-header': header,
      'v-footer': footer
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  .content
    padding 20px
    .wrapper
      width 1200px
      margin 0 auto
      padding 10px
      border 1px solid $color-solid
      .content-title
        font-size 1.2rem
        line-height 2.5rem
        color $color-theme
        text-align center
        p
          padding 10px
          border-bottom 1px solid $color-solid4
      .content-inner
        padding 30px 10px 0 10px
        min-height 500px
        .address
          font-size 0.95rem
          color $color-theme
        .text
          padding 20px
          p
            font-size 0.85rem
            line-height 2.5rem
</style>
