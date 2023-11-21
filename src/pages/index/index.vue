<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CustomNavBar from './components/CustomNavbar.vue'
import CategoryPannel from './components/CategoryPannel.vue'
import HotPannel from './components/HotPannel.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

// 轮播图数组对象
const bannerList = ref<BannerItem[]>([])

// 前台分类对象
const categoryList = ref<CategoryItem[]>([])

// 热门推荐对象
const hotList = ref<HotItem[]>([])

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
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <!-- 首页分类 -->
  <CategoryPannel :list="categoryList"></CategoryPannel>
  <!-- 热门推荐 -->
  <HotPannel :list="hotList"></HotPannel>
  <XtxGuess></XtxGuess>
  <view class="index"></view>
</template>

<style lang="scss">
// 设置首页背景颜色
page {
  background-color: #F7F7F7;
}
</style>
