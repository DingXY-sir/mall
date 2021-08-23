<template>
  <div id="app">
    <router-view/>
    <MainTabBar></MainTabBar>
  </div>
</template>
<script>
import MainTabBar from "./components/content/MainTabBar/MainTabBar" 
export default {
  components: {
     MainTabBar
  }
}
</script>

<style lang="scss">
@import "./assets/css/base.css";


</style>
