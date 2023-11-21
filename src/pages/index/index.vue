<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import CustomNavBar from './components/CustomNavbar.vue'
import CategoryPannel from './components/CategoryPannel.vue'
import type { BannerItem, CategoryItem } from '@/types/home'

// 轮播图数组对象
const bannerList = ref<BannerItem[]>([])

// 前台分类对象
const categoryList = ref<CategoryItem[]>([])

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

onLoad(() => {
  getHomeBanner()
  getHomeCategory()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavBar></CustomNavBar>
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList"></XtxSwiper>
  <!-- 首页分类 -->
  <CategoryPannel :list="categoryList"></CategoryPannel>
  <view class="index"></view>
</template>

<style lang="scss">
// 设置首页背景颜色
page {
  background-color: #F7F7F7;
}
</style>
