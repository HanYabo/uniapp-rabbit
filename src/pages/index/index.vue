<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI } from '@/services/home'
import CustomNavBar from './components/CustomNavbar.vue'
import type { BannerItem } from '@/types/home'

// 轮播图数组对象
const bannerList = ref<BannerItem[]>([])

const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar></CustomNavBar>
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <view class="index"></view>
</template>

<style lang="scss">
//
</style>
