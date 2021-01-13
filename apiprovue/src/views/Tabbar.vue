<template>
  <div>
    <div class="tabbar_all">
        <div v-for="(item,index) in tabbar" :key="index" @click="change_icon(index)">
          <router-link :to="item.router" tag="div">
            <p :class="index==checkIcon?item.selectIcon:item.noSelectIcon"></p>
            <p >{{item.title}}</p>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"Tabbar",
    data () {
      return {
        checkIcon:null,
        tabbar:[
          {title:"首页",noSelectIcon:"iconfont iconshouye1 icon_size",selectIcon:"iconfont iconshouye icon_size add_color",router:"/Home"},
          {title:"办税",noSelectIcon:"iconfont iconwenben icon_size",selectIcon:"iconfont iconhanhan-01-01 icon_size add_color",router:"/Find"},
          {title:"服务",noSelectIcon:"iconfont iconfuwu icon_size",selectIcon:"iconfont iconziyuan icon_size add_color",router:"/Order"},
          {title:"个人中心",noSelectIcon:"iconfont iconiconfonticon5 icon_size",selectIcon:"iconfont icongerenzhongxin add_color icon_size",router:"/Mine"},
        ]
      }
    },
    methods: {
      change_icon(i){
        this.checkIcon=i
      }
    },
}
</script>

<style scoped>
  .tabbar_all{
    width: 100%;
    height: 5.4rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0;
    box-sizing: border-box;
    background-color: white;
    border-top: 1px solid #cfcfcf;
  }
  .tabbar_all>div{
    width: 25%;
    height: 100%;
    margin: 0 auto;
  }
  .tabbar_all>div>div{
    width: 100%;
    height: 100%;
    padding-top: 0.8rem;
    /* margin: 0 auto; */
  }
  p{
        margin:0;
  }

  .tabbar_all>div>div p{
    text-align: center;
    font-size: 0.8rem;
    color: #333;
  }
  .tabbar_all>div>div .icon_size{
    font-size: 1.8rem;

  }
  .tabbar_all>div>div .add_color{
    color: #1e82ff;
  }
</style>
