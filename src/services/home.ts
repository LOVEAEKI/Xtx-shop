import type { BannerItem, CategoryItem } from '@/types/home'
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
