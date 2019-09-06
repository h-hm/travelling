<template>
  <div id="app">
    <!-- 除了Detail页面其他的都会被缓存  使被包含的组件保留状态，不会被重复渲染 -->
     <keep-alive exclude="Detail">
         <!--显示的是当前路由地址对应的内容  -->
        <router-view/>
     </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
