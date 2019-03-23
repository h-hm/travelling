<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item in recommendsList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
                <button class="item-btn">查看详情</button>
            </div>
        </li>
    </ul>
  </div> 
</template>
<script>
export default {
    name: 'HomeRecommend',
    data () {
        return{
            recommendsList:[{
            id:'01',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_200x200_f7acbacd.jpg',
            title:'游南昌',
            desc:'南昌融创主题乐园（原万达主题乐园）'
        },{
            id:'02',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_200x200_f7acbacd.jpg',
            title:'游南昌',
            desc:'南昌融创主题乐园（原万达主题乐园）'
        },
        {
            id:'03',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_200x200_f7acbacd.jpg',
            title:'游南昌',
            desc:'南昌融创主题乐园（原万达主题乐园）'
        },
        {
            id:'04',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_200x200_f7acbacd.jpg',
            title:'游南昌',
            desc:'南昌融创主题乐园（原万达主题乐园）'
        }]
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl' 
    .recommend-title{
        margin-top:.2rem;
        line-height: .8rem;
        background:#eee;
        text-indent:.2rem;
    }
    .item{
        display: flex;
        height: 1.9rem;
        overflow: hidden;
        .item-img{
            width:1.7rem;
            height: 1.7rem;
            padding:.1rem;
        }
        .item-info{
            flex:1;
            min-width:0;
            padding:.1rem;
            .item-title{
                line-height:.54rem;
                font-size: .32rem;
                ellipsis();
            }
            .item-desc{
                line-height:.4rem;
                color:#ccc;
                ellipsis();
            }
            .item-btn{
                line-height:.44rem;
                margin-top:.16rem;
                padding: 0 .1rem;
                border-radius:.06rem;
                color:#fff;
                background:#ff9300;
                
            }
        }
    }
</style>
