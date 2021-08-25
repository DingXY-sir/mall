<template>
  <div class="tap-control">
      <div v-for="(item, index) in titles" :key="index" class="tap-control-item"
       :class="{active:index === currentIndex}" @click="clickItem(index)">
        <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    titles:Array,
    default(){
      return []
    }
  },
  data() {
    return {
      currentIndex:0
    };
  },
  computed: {},
  methods: {
    clickItem(index){
      this.currentIndex = index
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.tap-control{
  display: flex;
  font-size: 18px;
  text-align: center;
  .tap-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
}
.active{
  color:#FF7F00;
  span{
    border-bottom: 2px solid #FF7F00;
    padding: 2px 3px;
  }
}
</style>