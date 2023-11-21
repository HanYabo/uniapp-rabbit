<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavBar from './components/CustomNavbar.vue'
import CategoryPannel from './components/CategoryPannel.vue'
import HotPannel from './components/HotPannel.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type { XtxGuessInstance } from '@/components/components'
// 轮播图数组对象
const bannerList = ref<BannerItem[]>([])

// 前台分类对象
const categoryList = ref<CategoryItem[]>([])

// 热门推荐对象
const hotList = ref<HotItem[]>([])

// 猜你喜欢组件实例对象
const guessRef = ref<XtxGuessInstance>()

// 滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

// 获取轮播图
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类
const getHomeCategory = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取热门推荐
const getHomeHot = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(() => {
  getHomeBanner()
  getHomeCategory()
  getHomeHot()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar></CustomNavBar>
  <!-- 滚动容器 -->
  <scroll-view scroll-y @scrolltolower="onScrolltolower" class="scroll-view">
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <!-- 首页分类 -->
    <CategoryPannel :list="categoryList"></CategoryPannel>
    <!-- 热门推荐 -->
    <HotPannel :list="hotList"></HotPannel>
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef"></XtxGuess>
  </scroll-view>
</template>

<style lang="scss">
// 设置首页背景颜色
page {
  background-color: #F7F7F7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  // 占满父容器剩余所有空间
  flex: 1;
}
</style>
