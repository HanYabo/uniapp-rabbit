import { http } from "@/utils/http"

/**
 * 获取微信支付参数（正式上线）
 * @param data orderId 订单Id
 */
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data
  })
}

/**
 * 模拟支付-内测版（开发环境）
 * @param data orderId 订单id
 */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}
