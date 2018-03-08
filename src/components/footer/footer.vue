<template>
    <div class="footer">
      <div>
        <div class="mod_service">
          <ul>
            <li><Icon type="android-walk"></Icon> <div>原厂货源，正品保证</div></li>
            <li><Icon type="android-contact"></Icon> <div>立足欧美，品牌众多</div></li>
            <li><Icon type="android-stopwatch"></Icon> <div>机打发票，随箱附送</div></li>
            <li><Icon type="ios-flower"></Icon> <div>国内仓库，极速发货</div></li>
          </ul>
        </div>
        <div class="foot_ensure">
          <ul class=" block foot_ensure_list ">
            <li class="nt"></li>
            <li class="na2">
              <dl>
                <dt> <a href="/products.php" title="产品中心">产品中心</a></dt>
                <dd> <a href="/catalog.html" title="全部分类">全部分类</a> </dd>
                <dd> <a href="stock.php" title="现货专区">现货专区</a> </dd>
              </dl>
            </li>
            <li class="na2">
              <dl>
                <dt> <a href="/article_cat-4.html" title="关于我们">关于我们</a></dt>
                <dd> <a href="/article-5.html" title="公司简介">公司简介</a> </dd>
                <dd> <a href="/article-27.html" title="上海公司">上海公司</a> </dd>
                <dd> <a href="/article-28.html" title="东莞公司">东莞公司</a> </dd>
              </dl>
            </li>
            <li class="na2">
              <dl>
                <dt> <a href="/article_cat-6.html" title="联系我们">联系我们</a></dt>
                <dd> <a href="/article-7.html" title="联系方式">联系方式</a> </dd>
                <dd> <a href="/article-29.html" title="上海公司地址">上海公司地址</a> </dd>
              </dl>
            </li>
            <li class="na2">
              <dl>
                <dt> <a href="/article_cat-1.html" title="使用指南">使用指南</a></dt>
                <dd> <a href="/article-26.html" title="询价">询价</a> </dd>
              </dl>
            </li>
            <li class="na2">
              <dl>
                <dt> <a href="#" title="其他站点">其他站点</a></dt>
                <dd> <a href="http://www.wister-ind.com" rel="nofollow" title="鑫马精工美国">鑫马精工美国</a> </dd>
                <dd> <a href="htp://www.wister-ind.de" rel="nofollow" title="鑫马精工斯特">鑫马精工德国</a> </dd>
                <dd> <a href="http://www.wisteryeya.com" rel="nofollow" title="鑫马精工液压">鑫马精工液压</a> </dd>
                <dd> <a href="http://www.wister-sensor.com" rel="nofollow" title="鑫马精工传感器">鑫马精工感器</a> </dd>
              </dl>
            </li>

            <li class="justify_fix"></li>
          </ul>
        </div>
        <div id="bottomNav2">
          <div id="link">
          </div>
          <div class="bNavList clearfix"> <a href="/article_cat-4.html">关于我们</a> | <a href="/sitemap/" target="_blank">sitemap</a> | <a href="/article_cat-5.html">一级代理</a> | <a href="/article_cat-8.html">售后服务</a> | <a href="/article_cat-7.html">诚邀加盟</a> | <a href="/article_cat-1.html">使用指南</a> </div>
        </div>
        <div id="footer"> © 2015-2017 工业自动化设备网-鑫马精工 版权所有，并保留所有权利.</div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  .footer
    .mod_service
      padding 30px
      margin 0 auto
      height 80px
      background $footer-color
      border-bottom: 1px solid #Ccc;
      ul
        display flex
        width 1200px
        margin 0 auto
        justify-content space-between
        li
          font-size 1rem
          display flex
          line-height 2rem
          .ivu-icon
            font-size 2rem
            line-height 2rem
            color $color-theme2
            margin-right 5px
    .foot_ensure
      padding 10px 0
      background $footer-color
      .foot_ensure_list
        height 135px
        zoom 1
        padding-top 10px
        overflow hidden
        display flex
        width 1200px
        margin 0 auto
        justify-content space-between
        li.nt
          width 120px
          height 120px
          background  url(../../../src/pages/index/images/code.png) center top no-repeat
          background-size cover
        li.na2
          margin: 0
          background-image none
          width 130px
          margin-left 20px
          dt
            height 20px
            line-height 20px
            margin-bottom 10px
            font-size 14px
            color #666
            font-weight bold
            a
              color $color-dialog-background
          dd
            margin-bottom 3px
            font-family Arial
            color #999
            a
              color $footer-color-text
              font-size 0.75rem
              line-height 1.2rem
        .justify_fix
          width 160px
          height 100px
          background: url(http://wisterchina.com/themes/ecmoban/images/wister.png) 0 -46px
    #bottomNav2
      border-top 5px solid $color-theme
      .bNavList
        text-align center
        height 36px
        line-height 36px
        color #333
        a
          color #333
          padding 0 5px
          font-size 0.75rem
          line-height 1.5rem
    #footer
      color #444
      text-align center
      margin-bottom 10px
      font-size 0.85rem
      line-height 1.2rem
</style>
