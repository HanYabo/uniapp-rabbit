import type { OrderCreateParams, OrderCreateResult, OrderPreResult, OrderResult } from "@/types/order"
import { http } from "@/utils/http"

/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreAPI = () => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre'
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderInmidateAPI = (data: { skuId: string, count: string, addressId?: string }) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: '/member/order/pre/now',
    data
  })
}

/**
 * 提交订单
 * @param data 请求参数
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http<OrderCreateResult>({
    method: 'POST',
    url: '/member/order',
    data
  })
}

/**
 * 获取订单详情
 */
export const getMemberOrderDetailAPI = (id: string) => {
  return http<OrderResult>({
    method: 'GET',
    url: `/member/order/${id}`
  })
}

/**
 * 填写订单-再次购买
 * @param id 订单id
 */
export const getMemberOrderRepurchaseByIdAPI = (id: string) => {
  return http<OrderPreResult>({
    method: 'GET',
    url: `/member/order/repurchase/${id}`,
  })
}
