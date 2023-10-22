import type { BannerItem } from '@/types/home'
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
