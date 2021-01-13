<template>
  <div>
      <my-banner></my-banner>
  </div>
</template>

<script>

import {getList} from '@/api/request'
export default {
    name:"Home",
    data () {
      return {
        
      }
    },
    mounted() {
      this.getdatas(1,10)
    },
    methods: {
      getdatas(){
        getList(1,10).then(res=>{
          console.log(res)
        })
      }
    },
}
</script>

<style>

</style>