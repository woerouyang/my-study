/**
 * 配置编译环境和上线环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 */

let baseUrl = ''
let routerMode = 'hash'

if (process.env.NODE_ENV === 'development') {
  baseUrl = '2'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = '1'
}

export {
  baseUrl,
  routerMode
}
