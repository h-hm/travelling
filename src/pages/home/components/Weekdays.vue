<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item in recommendsList" :key="item.id">
            <div class="item-img-wrapper">
              <img class="item-img" :src="item.imgUrl" />
            </div>
            <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
            </div>
        </li>
    </ul>
  </div> 
</template>
<script>
export default {
    name: 'HomeWeekdays',
    data () {
        return{
            recommendsList:[{
            id:'01',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg',
            title:'游南昌',
            desc:'南昌融创主题乐园（原万达主题乐园）'
        },{
            id:'02',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg',
            title:'游南昌',
            desc:'南昌融创主题乐园（原万达主题乐园）'
        },
        {
            id:'03',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg',
            title:'游南昌',
            desc:'南昌融创主题乐园（原万达主题乐园）'
        },
        {
            id:'04',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg',
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
        .item-img-wrapper{
            height:0;
            overflow: hidden;
            padding-bottom :33.9%;
            .item-img{
            width:100%;
          }
        }
        .item-info{
            padding :.1rem;
            min-width:0;
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
        }
    }
</style>
