<template>
    <div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1709/ef/efc6177fc9c11770a3.img.png_600x330_256dca7d.png"/>
        <div class="banner-info">
            <div class="banner-title">武功山君澜温泉</div>
            <div class="benner-number">
                <span class="iconfont banner-font">&#xe640;</span>
            6</div>
        </div>
    </div>
    <common-gallary 
    :imgs="imgs" 
    v-show="showGallary"
    @close="handleGallaryClose"
    ></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary.vue';
export default {
    name: 'DetailBanner',
    data () {
        return {
             showGallary:false,
             imgs: ['http://img1.qunarzz.com/sight/p0/1709/c3/c338031d2ee442a8a3.img.png_r_800x800_06d0c2c1.png',
              'http://img1.qunarzz.com/sight/p0/1709/c3/c338031d2ee442a8a3.img.png_r_800x800_06d0c2c1.png']
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true;
        },
        handleGallaryClose () {
            this.showGallary = false;
        }
    }
}
</script>
<style lang="stylus" scoped>
    .banner{
        position: relative;
        overflow: hidden;
        height:0;
        padding-bottom: 55%;
        .banner-img{
            width:100%;
        }
        .banner-info{
            display: flex;
            position: absolute;
            left:0;
            right:.1rem;
            bottom:0;
            line-height: .6rem;
            color:#fff;
            background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8));
            .banner-title{
                flex: 1;
                font-size: .32rem;
                padding: 0 .2rem;
            }
            .banner-number{
                padding: 0 .4rem;
                margin-top: .14rem;
                line-height: .32rem;
                height: .32rem;
                border-radius: .2rem;
                background: rgba(0,0,0,.8rem);
                font-size: .24rem;
                . banner-font{
                    font-size: .24rem;
                }
            }
        }
    }
</style>
