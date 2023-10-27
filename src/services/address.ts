// 会员中心-地址管理
// 添加收货地址
// POST
// /member/address

import type { AddressParams } from '@/types/address'
import type { AddressItem } from '@/types/goods'
import { http } from '@/utils/http'

export const EditAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

// 会员中心-地址管理
// 获取收货地址列表
// GET
// /member/address
export const getAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

// 会员中心-地址管理
// 获取收货地址详情
// GET
// /member/address/{id}
export const getAddressDetailAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}
