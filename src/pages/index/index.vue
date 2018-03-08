<template>
    <div class="home">

      <v-header></v-header>

      <div class="content">
        <!--背景图-->
             <div class="content-wrapper">
               <Carousel autoplay v-model="value2" loop
                         :autoplay-speed="setting.autoplaySpeed">
                 <CarouselItem v-for="item in banner" v-bind:key="item.index">
                   <div class="demo-carousel">
                     <img v-lazy="item" alt="" style="width:100%;height:498px">
                   </div>
                 </CarouselItem>
               </Carousel>
             </div>
        <!--主体-->
            <div class="content-item">
              <!--分公司-->
              <div class="content-list">
                <div class="item">
                  <a href="">
                    <p>上海公司</p>
                  </a>
                </div>
                <div class="item">
                  <a href="">
                    <p>北京公司</p>
                  </a>
                </div>
                <div class="item">
                  <a href="">
                    <p>深圳公司</p>
                  </a>
                </div>
                <div class="item">
                  <a href="">
                    <p>伦敦公司</p>
                  </a>
                </div>
              </div>
              <!--模块1-->
              <div class="content-block">
                    <div class="block-left ">
                      <div class="col-title border-1px">
                        <h3>
                          <a href="">现货专区</a>
                        </h3>
                      </div>
                      <div class="col-table">
                        <Table  :columns="columns1" stripe  :data="data1"></Table>
                      </div>
                    </div>

                    <div class="block-right">
                      <div class="col-title border-1px">
                        <h3>
                          <a href="">技术资讯</a>
                        </h3>
                      </div>
                      <div class="col-new">
                        <div class="news-list">
                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>

                          <a href="" class="news-item">
                            <Icon type="arrow-right-b"></Icon>
                            <span class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</span></a>
                        </div>
                      </div>
                    </div>
              </div>
              <!--模块2-->
              <div class="content-banner">
                <div class="col-title border-1px">
                  <h3>
                    <a href="">精选品牌</a>
                  </h3>
                </div>

                <div class="block-inner">
<!--左边-->
                  <div class="block-banner">
                    <img src="./images/brand.jpg" alt="">
                  </div>
<!--右侧列表-->
                  <div class="banner-list">
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                    <div class="item">
                      <a href="" class="banner-item">
                        <img src="./images/4856.png" alt="" class="item-img">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!--模块3-->
              <div class="content-block">
                <div class="block-left ">
                  <div class="col-title border-1px">
                    <h3>
                      <a href="">现货专区</a>
                    </h3>
                  </div>
                  <div class="table-country">
                    <div class="col-country">
                        <p class="country border-bt-1px">美国</p>
                        <div class="item">
                          <a href="">DAIKIN大金油</a>
                          <a href="">DAIKIN大金油</a>
                          <a href="">DAIKIN大金油</a>
                          <a href="">DAIKIN大金油</a>
                          <a href="">DAIKIN大金油</a>
                        </div>
                      </div>

                    <div class="col-country">
                      <p class="country border-bt-1px">美国</p>
                      <div class="item">
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                      </div>
                    </div>

                    <div class="col-country">
                      <p class="country border-bt-1px">美国</p>
                      <div class="item">
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                      </div>
                    </div>

                    <div class="col-country">
                      <p class="country border-bt-1px">美国</p>
                      <div class="item">
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                      </div>
                    </div>

                    <div class="col-country">
                      <p class="country border-bt-1px">美国</p>
                      <div class="item">
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                      </div>
                    </div>

                    <div class="col-country">
                      <p class="country border-bt-1px">美国</p>
                      <div class="item">
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                      </div>
                    </div>

                    <div class="col-country">
                      <p class="country border-bt-1px">美国</p>
                      <div class="item">
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                      </div>
                    </div>

                    <div class="col-country">
                      <p class="country border-bt-1px">美国</p>
                      <div class="item">
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                        <a href="">DAIKIN大金油</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block-right">
                  <div class="col-title border-1px">
                    <h3>
                      <a href="">技术资讯</a>
                    </h3>
                  </div>
                  <div class="col-new">
                    <div class="news-list">
                      <a href="" class="news-items">
                        <p class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</p>
                        <div class="news-box">

                          <div class="news-img">
                            <img src="./images/150.jpg" alt="">
                          </div>

                          <div class="news-text">
                            <span>意大利GEFRAN传感器 中国区唯一代理</span>
                          </div>
                        </div>

                      </a>
                      <a href="" class="news-items">
                        <p class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</p>
                        <div class="news-box">

                          <div class="news-img">
                            <img src="./images/150.jpg" alt="">
                          </div>

                          <div class="news-text">
                            <span>意大利GEFRAN传感器 中国区唯一代理</span>
                          </div>
                        </div>

                      </a>
                      <a href="" class="news-items">
                        <p class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</p>
                        <div class="news-box">

                          <div class="news-img">
                            <img src="./images/150.jpg" alt="">
                          </div>

                          <div class="news-text">
                            <span>意大利GEFRAN传感器 中国区唯一代理</span>
                          </div>
                        </div>

                      </a>
                      <a href="" class="news-items">
                        <p class="news-inner">博恩斯坦 电感式传感器 亚洲总代理（一）</p>
                        <div class="news-box">

                          <div class="news-img">
                            <img src="./images/150.jpg" alt="">
                          </div>

                          <div class="news-text">
                            <span>意大利GEFRAN传感器 中国区唯一代理</span>
                          </div>
                        </div>

                      </a>
                    </div>
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
  data () {
    return {
      columns1: [
        {
          title: '国家',
          key: 'name'
        },
        {
          title: '型号',
          key: 'age'
        },
        {
          title: '品牌',
          key: 'address'
        },
        {
          title: '库存数量',
          key: 'age'
        },
        {
          title: '联系电话',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      show: true,
      value2: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 5000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover'
      },
      banner: ['static/banner/banner.jpg', 'static/banner/banner2.jpg', 'static/banner/banner3.jpg', 'static/banner/banner4.jpg']
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  .home
    padding-bottom 20px
    .content
      .content-wrapper
        width 100%
        height 498px
        .ivu-carousel
          height 100%
          .ivu-carousel-lis
            .ivu-carousel-item
                img
                  width 100%
                  height 100%
      .content-item
        width 1200px
        margin 0 auto
        padding 40px 0
        .content-list
          width 100%
          display flex
          padding 20px 0
          justify-content space-between
          .item
            width 278px
            height 112px
            background url("./images/sh1.png") 180px no-repeat
            background-image 100%
            background-color $color-background2
            padding 10px
            a
              p
                font-size 1.3rem
                line-height 2rem
                color $color-theme
                padding  30px
          .item:hover
            background url("./images/sh1.png") 170px no-repeat
            background-color $color-background2
            transition:all .2s ease-in 0s;
        .content-block
          display flex
          .col-title
            padding 15px 0
            flex  1 0 auto
            h3
              line-height 1rem
              border-left 3px solid $color-theme
              a
                font-size 1rem
                line-height 1rem
                margin-left 10px
          .block-left,.block-right
            .col-table
              padding 20px 0
          .block-left
            width 70%
            margin-right 60px
            .table-country
              width 790px
              .col-country
                width 50%
                padding 10px
                float left
                .country
                  font-size 0.95rem
                  line-height 2.1rem
                  color $color-theme
                  font-family $font
                .item
                  a
                    float left
                    display inline-block
                    margin-right 5px
                    font-size 0.75rem
                    line-height 2rem
                    color $color-highlight-background
                    font-family $font
                  a:hover
                    color $color-text4
          .block-right
            width 30%
            .col-new
              padding 20px 0 0 0
              .news-list
                .news-item
                  display block
                  font-size 0.75rem
                  line-height 1.5rem
                  color $color-solid2
                .news-items
                  display block
                  font-size 0.75rem
                  line-height 1.5rem
                  color $color-solid2
                  border-bottom 1px solid $color-solid3
                  padding-bottom 10px
                  margin-bottom 10px
                  .news-inner
                    margin-left 5px
                    color $color-theme
                  .news-box
                    display flex
                    .news-img
                      width 100px
                      height 80px
                      border 1px solid $footer-color-text
                      margin-right 10px
                      img
                        width 100%
                        height 100%

                .news-item :hover
                .news-items:hover
                  color $color-text4
        .content-banner
          padding 0 0 20px 0
          width 100%
          .col-title
            padding 15px 0
            flex  1 0 auto
            h3
              line-height 1rem
              border-left 3px solid $color-theme
              a
                font-size 1rem
                line-height 1rem
                margin-left 10px
          .block-inner
            margin-top 20px
            display flex
            height 328px
            .block-banner
              width 200px
            .banner-list
              width 1000px
              border-bottom  1px solid $color-background2
              .item
                width: 199px
                height: 108px
                float left
                text-align: center
                border-right: 1px solid $color-solid4
                border-top: 1px solid $color-solid4
                display table
                .banner-item
                  display: table-cell
                  vertical-align: middle
                  text-align: center
                .banner-item
                  .item-img:hover
                    transform translateX(-10px)
                    transition all ease-out .2s
  .show
    display none!important
</style>
