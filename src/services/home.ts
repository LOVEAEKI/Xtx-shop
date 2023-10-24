import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home'
import type { PageResult, PageParams } from '@/types/global'
import { http } from '@/utils/http'

/**
 *
 * @param distributionSite 获取广告区域轮播图
 * @returns
 */

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite: distributionSite,
    },
  })
}

/**
 * 
 * @returns // 首页-前台分类-小程序
 GET
 /home/category/mutli
 */
export const getHomeCategoryMutliAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 热门推荐
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

// 猜你喜欢-小程序
// GET
// /home/goods/guessLike
export const getGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
