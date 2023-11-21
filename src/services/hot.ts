import type { PageParams } from "@/types/global"
import { http } from "@/utils/http"
import type { GoodsItem } from '@/types/global'
import type { HotResult } from "@/types/hot"

// 热门推荐通用参数类型
export type HotParams = PageParams & {
  // Tab 项的 id，默认查询全部 Tab 项的第 1 页数据
  subType?: string
}


// GuessItem 和 GoodsItem 类型相同
export type GuessItem = GoodsItem

/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data
  })
}
