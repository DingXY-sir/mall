<template>
  <div class="home-navbar">
    <NavBar><div slot="center">购物街</div></NavBar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
    NavBar
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
.home-navbar{
  background-color:#F19DA3;
  color:#fff;
}
</style>