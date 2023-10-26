// 会员中心-个人信息
// 获取个人信息
// GET
// /member/profile

import type { ProfileDetail, modifyProfile } from '@/types/member'
import { http } from '@/utils/http'

export const getProFileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

// 会员中心-个人信息
// 修改个人信息
// PUT
// /member/profile
export const DetailProfileAPI = (data: modifyProfile) => {
  return http({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
