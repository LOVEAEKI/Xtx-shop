<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryMutliAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])

// 获取轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryMutliAPI()
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
