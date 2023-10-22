import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 非http开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 默认超时时间
    options.timeout = 10000
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token
    const meberStore = useMemberStore()
    // 判断是否有.token
    const token = meberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}
uni.addInterceptor('uploadFile', httpInterceptor)
uni.addInterceptor('request', httpInterceptor)

// 设置类型
interface Data<T> {
  code: string
  msg: string
  result: T
}
// 请求成功提取参数
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误 ->清理用户信息跳转登录页
          const meberStore = useMemberStore()
          meberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({ icon: 'none', title: '网络错误,换个网络试试' })
        reject(err)
      },
    })
  })
}
