// 会员登录
// 小程序登录
// POST
// /login/wxMin

type loginParams = {
  code: string
  encryptedData: string
  iv: string
}

import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

export const PostLoginWxMinAPI = (data: loginParams) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

// 小程序登录-内测版
// POST
// /login/wxMin/simple
// 该接口用于模拟微信小程序一键登录，开发学习使用。
export const simpleLoginAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
