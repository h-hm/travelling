<template>
    <div>
       <home-header ></home-header> 
       <home-swiper :list="swiperList"></home-swiper>
       <home-icons :list="iconList"></home-icons>
       <home-recommend :list="recommendList"></home-recommend>
       <home-weekdays :list="weekendList"></home-weekdays>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekdays from './components/Weekdays.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {
         HomeHeader,
         HomeSwiper,
         HomeIcons,
         HomeRecommend,
         HomeWeekdays
    },
    data () {
        return{
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
            lastCity:[]
        }
    },
    computed: {
       ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json?city=' + this.city ).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
           res = res.data;
           if(res.ret && res.data) {
              const data  = res.data;
              this.swiperList = data.swiperList;
              this.iconList = data.iconList;
              this.recommendList = data.recommendList;
              this.weekendList = data.weekendList;
           }
        }
    },
    // 生命周期函数
    mounted () {
         //对上一次显示的城市做保存
         this.lastCity = this.city;
         this.getHomeInfo()
    },
    //keep-alive提供的当页面重新显示的时候
    activated () {
       if (this.lastCity !== this.city) {
           this.lastCity = this.city;
           this.getHomeInfo()
       }
    }
}
</script>
<style>
  
</style>

