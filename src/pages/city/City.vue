<template>
    <div>
       <city-header></city-header>
       <city-search></city-search>
       <city-list></city-list>
       <city-alphabet></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import cityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
    name: 'City',
    components:{
        CityHeader,
        CitySearch,
        cityList,
        CityAlphabet
    }
}
</script>
<style lang="stylus" scoped>

</style>
