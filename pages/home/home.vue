<template>
  <view>
    123
    2132
  </view>
</template>

<script>
  import {getBanners} from '@/api/home.js'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      async loadBanners(){
        const res=await getBanners()
        console.log(res)
      }   
    },
    onLoad(){
      this.loadBanners()
    }
  }
</script>

<style>

</style>
