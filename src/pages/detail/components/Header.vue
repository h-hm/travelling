<template>
    <div>
        <router-link tag="div" to="/" class="header-abs">
             <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" 
             v-show="showAbs"
             :style='opacityStyle'
             >
            <router-link to="/">
               <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
             景点详情
        </div>
    </div>
</template>
<script>
export default {
 name: 'DetailHeader',
 data () {
     return {
         showAbs: false,
         opacityStyle: {
             opacity: 0
         }
     }
 },
 methods: {
     handleScorll () {
        const top = document.documentElement.scrollTop;
        if ( top > 60 && top <140 ) {
            this.showAbs = false;
            let opacity = top/140;
            opacity = opacity > 1 ? 1 : opacity 
            this.opacityStyle = {
                opacity: opacity
            }
        }else{
            this.showAbs = true;
        }
     }
 },
 activated () {
     window.addEventListener ('scroll', this.handleScorll);
 }    
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
   .header-abs {
       position: absolute;
       left: .2rem;
       top: .2rem;
       width: .8rem;
       height: .8rem;
       line-height: .8rem;
       text-align: center;
       border-radius: .4rem;
       background: rgba(0, 0, 0, .8);
        .header-abs-back {
            color: #fff;
            font-size: .4rem;
        }
   } 
   .header-fixed{
       position: fixed;
       overflow: hidden;
       top:0;
       left:0;
       right:0;
       height: .86rem;
       line-height: .86rem;
       text-align:center;
       color:#fff;
       background:$bgColor;
       font-size: .32rem;
       .header-fixed-back{
           top:0;
           left:0;
           position: absolute;
           width:.64rem;
           text-align:center;
           font-size: .4rem;
       }
   }
</style>
