import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '../components/HomePage'
import PhonePage from '../components/PhonePage'
import TypeComponent from '../components/TypeComponent'
import SearchMore from '../components/SearchMore'
import ProductList from '../components/ProductList'
import SearchProduct from '../components/SearchProduct'
import SearchList from '../components/SearchList'
import ShoppingCar from '../components/ShoppingCar'
Vue.use(Router)

export default new Router({
  mode:"history",
  linkActiveClass:"active",
  linkExactActiveClass:"exact-active",
  routes: [
    
    {path:"/",redirect:"/page"},
    {path:'/page',component:PhonePage,children:[
        {path:'/',redirect:'homepage'},
        {path:'homepage',component:HomePage},
        {path:'type',component:TypeComponent},
        
      
    ]},
    {path:"/searchmore",component:SearchMore,name:"SearchMore"},
    {path:"/productlist",component:ProductList,name:"ProductList"},
    {path:'/searchproduct',component:SearchProduct,name:'SearchProduct'},
    {path:"./searchlist",component:SearchList,name:'SearchList'},
    {path:'/shoppingcar',component:ShoppingCar}
  ]
})
