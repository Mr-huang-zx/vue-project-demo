<template>
    <div style="width:100%">
    <!-- 右侧头部导航 -->

        <el-header
        >Header
            <el-button type="danger" @click="goout">退出</el-button>
        </el-header>
    </div>
        
</template>

<script>
import { logout } from '@/api/http'
import { removeToken } from '@/utils/token'
export default {
    name:"Header",
    methods: {
        goout() {
          logout().then(res=>{
            var {code} = res.data
            if(code==20000){
              removeToken()
              this.$router.push("login")
              
            }
          })
            // this.$router.push("login");
        }
    }
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>