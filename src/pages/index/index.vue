<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryMutliAPI, getHomeHotAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/components'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

const bannerList = ref<BannerItem[]>([])

// 获取轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryMutliAPI()
  categoryList.value = res.result
}

// 获取热门推荐
const hotList = ref<HotItem[]>([])

const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
const { guessRef, onScrolltolower } = useGuessList()


// 自定义下拉刷新
//控制刷新动画 默认false关闭
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true

  guessRef.value?.resetData()

  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore(),
  ])
  isTriggered.value = false
}

// 检测是否加载中
const isLoading = ref(true)

onLoad(() => {
  isLoading.value = true
  Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <scroll-view
    style="scrollView"
    scroll-y
    @scrolltolower="onScrolltolower"
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scrollView {
  flex: 1%;
}
</style>
@/types/components
