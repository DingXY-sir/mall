<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in newData" :key="index">
      <a>
        <img :src="item.thumbnail_pic_s" alt="">
        <div>{{item.author_name}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    newData:Array,
    default(){
      return []
    }
  },
  data() {
    return {
    };
  }
};
</script>
<style lang="scss" scoped>
  .recommend{
    width: 100%; 
    display: flex;
    text-align: center;
    padding: 8px 0 10px;
    border-bottom: 6px solid #eee;
    .recommend-item{
      flex: 1;
      img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
      }
    }
  }
</style>