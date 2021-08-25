<template>
  <div id="home">
    <div class="home-navbar">
      <!-- 顶部导航栏 -->
      <NavBar><div slot="center">购物街</div></NavBar>
    </div>
    <HomeRecommend :newData="newData"></HomeRecommend>
    <TapControl class="tab-control" :titles="['精选', '流行', '新款']"></TapControl>
    <ul>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
      <li>你好</li>
    </ul>
  </div>
  
</template>
<script>
// 可复用组件
import NavBar from 'components/common/navbar/NavBar'
import TapControl from 'components/content/TapControl/TapControl'

// 业务组件
import HomeRecommend from './childComps/HomeRecommend'
import {getHomeBannerList, getHomeDetails, getBookCatalog} from 'network/home'
export default {
  components: {
    NavBar,
    TapControl,

    HomeRecommend
  },
  props: {},
  data() {
    return {
      newData:[],
      newList:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    getHomeBannerList(){
      getHomeBannerList().then(res => {
        this.newData = res.result.data.slice(0,4)
        this.newData.map((item , index) => {
          return this.newList.push(item.thumbnail_pic_s) 
        })
      })
    },
    getHomeDetails(uniquekey,key){
      const objInfo = {
        uniquekey:'b6007680102715c423da7ae88862ab7b',
        key:'dea587ceb7e64e39399312916024e568'
      }
      getHomeDetails(objInfo).then(res => {
        console.log(res);
        
      })
    },
    getBookCatalog(){
      const bookType = {
        key:'6b1b99e8f76ec8729e1b1d779ccdad91',
        catalog_id:'24',
        pn:'10',
        rn:'30'
      }
      getBookCatalog(bookType).then(res => {
        console.log(res);
        
      })
    }
  },
  created() {
    // 顶部四个圆
    this.getHomeBannerList()
    // 详情
    this.getHomeDetails()
    //图书分类
    this.getBookCatalog()
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
#home{
  padding-top: 44px;
}
.home-navbar{
  background-color:#F19DA3;
  color:#fff;
  position: fixed;
  top: 0;  
  left: 0;
  right: 0;
  z-index: 3;
}
.tab-control{
  position: stickily;
  top: 44px;
}

</style>