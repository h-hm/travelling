<template>
  <div>
    <div class="recommend-title">热点推荐</div>
    <ul>
        <router-link 
            tag="li"
            class="item border-bottom" 
            v-for="item in list" 
            :key="item.id"
             :to="'/detail/' + item.id" 
            >
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
                <button class="item-btn">查看详情</button>
            </div>
        </router-link>
    </ul>
  </div> 
</template>
<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl' 
    .recommend-title{
        margin-top:.2rem;
        line-height: .8rem;
        background:#f2f2f2;
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
