import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import("../views/Home/Home")
const Cart = () => import("../views/Cart/Cart")
const Cotegory = () => import("../views/Cotegory/Cotegory")
const ProFlie = () => import("../views/ProFlie/ProFlie")
const routes = [
  {path:'',redirect:'home'},
  {path:'/home',component:Home,name:'Hmoe'},
  {path:'/cart',component:Cart,name:'Cart'},
  {path:'/cotegory',component:Cotegory,name:"Cotegory"},
  {path:'/proflie',component:ProFlie,name:"ProFlie"},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
