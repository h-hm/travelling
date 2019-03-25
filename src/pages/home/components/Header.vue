<template>
    <div class="header">
       <div class="header-left">
           <div class="iconfont back-icon">&#xe624;</div>
       </div>
       <div class="header-input">
           <div class="iconfont">&#xe632;</div>
           输入城市/景点/游玩主题
        </div>
       <router-link to="/city">
       <div class="header-right">
           {{ this.city }}
           <div class="iconfont arrow-icon">&#xe64a;</div>
       </div>
       </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'HomeHeader',
    computed: {
        // 映射this.$store.state.city 为this.city 
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
   @import '~styles/varibles.styl'
   .header{
       display:flex;
       line-height: .86rem;
       background :$bgColor;
       color:#fff;
       .header-left{
           width: .64rem
           float: left;
           .back-icon{
               text-align: center;
               font-size: .2rem;
           }
       }
      .header-input{
           flex: 1;
           background: #fff;
           border-radius: .1rem;
           margin-top: .12rem;
           margin-left: .2rem;
           padding-left: .2rem;
           height: .64rem;
           line-height: .64rem;
           color: #ccc;
       }
       .header-right{
           min-width: 1.04rem;
           padding:0 .1rem;
           float: right;
           color:#fff;
           text-align: center;
           .arrow-icon{
               margin-left: .1rem;
               font-size: .24rem;
           }
       }
      
   }
</style>

