<template>
    <div>
       <home-header :city="city"></home-header> 
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
            city: '',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
           res = res.data;
           if(res.ret && res.data) {
              const data  = res.data;
              this.city = data.city;
              this.swiperList = data.swiperList;
              this.iconList = data.iconList;
              this.recommendList = data.recommendList;
              this.weekendList = data.weekendList;
           }
        }
    },
    // 生命周期函数
    mounted(){
         this.getHomeInfo()
    }
}
</script>
<style>
  
</style>

