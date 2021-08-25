import { request } from "./request";

export function getHomeBannerList() {
  return request({
    url:'/toutiao/index',
    params:{
      type:'top',
      key:'dea587ceb7e64e39399312916024e568'
    }
  })
}

export function getHomeDetails(objInfo) {
  return request({
    url:'/toutiao/content',
    params:objInfo
  })
}

export function getBookCatalog(objInfo) {
  return request({
    url:'/goodbook/query',
    params:objInfo
  })
}