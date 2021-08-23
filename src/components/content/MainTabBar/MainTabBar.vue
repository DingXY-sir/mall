<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#ff5777">
      <img src="~assets/img/tab-bar/move.png" alt="" slot="item-icon">
      <img src="~assets/img/tab-bar/move_active.png" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#ff5777">
      <img src="~assets/img/tab-bar/discover.png" alt="" slot="item-icon">
      <img src="~assets/img/tab-bar/discover_active.png" alt="" slot="item-icon-active">
     <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/cotegory" activeColor="#ff5777">
      <img src="~assets/img/tab-bar/sports.png" alt="" slot="item-icon">
      <img src="~assets/img/tab-bar/sports_active.png" alt="" slot="item-icon-active">
       <div slot="item-text">运动</div>
    </tab-bar-item>
    <tab-bar-item path="proflie" activeColor="#ff5777">
      <img src="~assets/img/tab-bar/mine.png" alt="" slot="item-icon">
      <img src="~assets/img/tab-bar/mine_active.png" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>