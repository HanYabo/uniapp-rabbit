/**
 * 添加收货地址请求参数类型
 */
export type AddressParams = {
  // 详细地址
  address: string
  // 所在城市编码
  cityCode: string
  // 联系方式
  contact: string
  // 所在区/县编码
  countyCode: string
  // 否为默认，1为是，0为否
  isDefault: number
  // 所在省份编码
  provinceCode: string
  // 收货人姓名
  receiver: string
}

/**
 * 收货地址项
*/
export type AddressItem = {
  // 收货人姓名
  receiver: string
  // 联系方式
  contact: string
  // 省份编码
  provinceCode: string
  // 城市编码
  cityCode: string
  // 区/县编码
  countyCode: string
  // 详细地址
  address: string
  // 默认地址，1为是，0为否
  isDefault: number
  // 收货地址 id
  id: string
  // 省市区
  fullLocation: string
}
