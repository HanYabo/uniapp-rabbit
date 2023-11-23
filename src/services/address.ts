import type { AddressItem, AddressParams } from "@/types/address"
import { http } from "@/utils/http"

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: "POST",
    url: "/member/address",
    data,
  })
}

/**
 * 获取收货地址列表
 * @return AddressItem
 */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: "GET",
    url: "/member/address",
  })
}

/**
 * 获取收货地址详情
 * @param id 地址id
 */
export const getMemberAddressDetailAPI = (id: string) => {
  return http<AddressItem>({
    method: "GET",
    url: `/member/address/${id}`,
  })
}

/**
 * 修改收货地址
 */
export const putMemberAddressDetailAPI = (id: string, data: AddressParams) => {
  return http({
    method: "PUT",
    url: `/member/address/${id}`,
    data
  })
}

/**
 * 删除收货地址
 */
export const delMemberAddressAPI = (id: string) => {
  return http({
    method: "DELETE",
    url: `/member/address/${id}`,
  })
}
