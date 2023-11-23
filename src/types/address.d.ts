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
