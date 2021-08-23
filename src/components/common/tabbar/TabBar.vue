<template>
  <div id="tab-bar">
    <slot></slot>  
  </div>  
</template>
<script>
export default {
  name:'TabBar',
  components: {},
};
</script>
<style lang="scss" scoped>
  #tab-bar{
    width: 100%;
    background-color:#f6f6f6;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  } 
</style>