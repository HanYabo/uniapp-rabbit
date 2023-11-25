import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()

  // 修改收货地址
  const changeSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }

  return {
    selectedAddress,
    changeSelectedAddress
  }
})
