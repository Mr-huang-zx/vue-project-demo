<template>
  <div id="app">
    <router-view/>
    <!-- <Tabbar  v-show="$route.meta.isShowTabbar"></Tabbar> -->
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from './views/Tabbar'
export default {
  name:"App",
  data() {
    return {
      
    }
  },
  components:{
    Tabbar
  }
}
</script>

<style>
/* 全局样式 */
@import './assets/index.css'  
</style>
