import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect: "/home"
  }
  ,
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect:"/index",
    component: ()=>import('../layout/index.vue'),
    children:[
      {
        path:"/index",
        name:"index",
        component:()=>import('../views/Home/home/index.vue')
      },
      {
        path:"/loan-input",
        name:"loan-input",
        component:()=>import('../views/Home/loan-input/loan-input.vue')
      },
      {
        path:"/MsgShow",
        name:"MsgShow",
        component:()=>import('../views/Home/msg-show/MsgShow.vue')
      },
      {
        path:"/outcom",
        name:"outcom",
        component:()=>import('../views/Home/have-dist/outcom.vue'),
        children:[
          {
            path:"/first",
            name:"first",
            component:()=>import('../views/Home/have-dist/first.vue')
          },
          {
            path:"/second",
            name:"second",
            component:()=>import('../views/Home/have-dist/second.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/About',
    name: 'About',
    component: ()=>import('../views/About.vue')
  },
  {
    path: '/Main',
    name: 'Main',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/MyBanner',
    name: 'MyBanner',
    component: ()=>import('../components/global/my-banner')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
