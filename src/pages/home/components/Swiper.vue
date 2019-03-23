<template>
   <div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
   </div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    data () {
       return{
            swiperOption: {
                 pagination: '.swiper-pagination',
                 loop:true
            },
            swiperList:[{
                id: '0001',
                imgUrl: '//img1.qunarzz.com/vc/80/80/1a/72b8f423c33e581ca72fc136da.jpg'
            },{
                id: '0002',
                imgUrl:'//img1.qunarzz.com/vc/b8/25/51/f6173dbd12c1a0f783abe73855.jpg'
            }
          ]
       }
    }
}
</script>
<style lang="stylus" scoped>
   .wrapper>>> .swiper-pagination-bullet-active{
           background: #fff !important
       }
   .wrapper{
       width:100%;
       height:0;
       overflow hidden;
       padding-bottom:31.25%;
       .swiper-img{
        width:100%;
      }
   }
  
</style>
