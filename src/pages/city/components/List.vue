<template>
    <div class="list" ref="wrapper">
        <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="btn-list">
                <div class="btn-wrapper">
                    <div class="btn">{{ this.city }}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="btn-list">
                <div 
                    class="btn-wrapper" 
                    v-for="item in hot" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                 >
                 <div class="btn">{{item.name}}</div>
                </div>
            </div>
        </div>
         <div class="area" 
            v-for="(item,index) in cities" 
            :key="index"
            :ref="index"
            >
            <div class="title border-topbottom">{{index}}</div>
            <div class="item-list">
                <div class="item border-bottom"
                v-for="innerItem in item" 
                :key="innerItem.id"
                @click="handleCityClick(innerItem.name)">{{ innerItem.name }}</div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex';
export default {
    name: 'cityList',
    props:{
        hot:Array,
        cities:Object,
        letter: String
    },
    computed: {
        // 展开运算符 映射
        ...mapState(['city'])
    },
    methods: {
        handleCityClick (city) {
         //console.log(city);
         this.$store.commit('changeCity',city);
         //this.changeCity(city);
         this.$router.push('/');
        }
        //...mapMutations(['changeCity'])
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper);
    },
    watch: {
        // 监听letter的变化
        letter () {
            if (this.letter) {
               const element = this.$refs[this.letter][0];
               //console.log(this.$refs[this.letter][0]);
               this.scroll.scrollToElement(element)
            }
            //console.log(this.letter);
        }
    }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl';
 .border-topbottom::before,
 .border-topbottom::after{
         border-color:#ccc;
 }
 .border-bottom::before{
         border-color:#ccc;
 }
 .list{
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title{
     line-height: .24rem;
     background:#eee;
     padding:.2rem;
     color:#666;
     font-size: .26rem;
   }
    .btn-list{
         overflow: hidden;
         padding: .1rem .1rem .6rem .1rem;
         .btn-wrapper{
            float: left;
            width:33.33%;
            .btn{
                paading: .1rem 0;
                margin: .1rem;
                text-align: center;
                border: .02rem solid #ccc;
                border-radius: .06rem;
            }
         }
     }
     .item-list{
         .item{
             line-height:.54rem;
             color: #666;
             padding-left: .2rem;
         }
     }
 }
 
</style>
