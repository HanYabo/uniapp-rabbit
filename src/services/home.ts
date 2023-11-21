import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

// 首页广告区域接口
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}

/**
 * 首页-前台分类
 */
export const getCategoryAPI = () => {
  return http({
    method: 'GET',
    url: '/home/category/mutli'
  })
}
