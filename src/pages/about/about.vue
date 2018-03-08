<template>
  <div class="content-box">
    <v-header></v-header>
    <div class="content">
      <div class="wrapper">
        <div class="content-title">
          <p>公司简介</p>
        </div>
        <div class="content-inner">
          <p class="name">深圳市鑫马精工科技有限公司</p>
          <div class="text">
            <div >
            深圳市鑫马精工科技有限公司是一家以工业配件为主，研发及销售各类高精品牌配件、
            进口工具、订制非标件以及油品的科技企业，主要涉及机械、电力、制药、模具加工、
            市政工程等行业领域，其主要成员均来自世界500强企业的技术人才,
            是一支从事自动化及设备开发的高素质技术团队，并拥有稳定的合作伙伴。
            </div>
            <div> 公司一直秉承着“诚信立足、服务为本”以市场需求为导向，
              以客户需求为中心”的企业宗旨，坚持“以勤奋创新为立足之本、
              以管理创新为发展之道、以服务创新为制胜之宝”的方向，不断开拓进取。
            </div>
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
        padding 30px 0 0 0
        min-height 500px
        .name
          text-align center
          font-size 1.2rem
          font-weight 600
        .text
         padding 20px 0
         div
          text-indent 32px
          font-size 1rem
          line-height 2.5rem
</style>
