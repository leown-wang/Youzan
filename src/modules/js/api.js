let url = {
  hotLists:'/index/hotLists',
  banner:'/index/banner',
  subList:'/category/subList',
  topList:'/category/topList',
  rank:'/category/rank',
  searchList:'/search/list',
  details:'/goods/details',
  deal:'/goods/deal',
  cartAdd:'/cart/add',
  cartUpdate:'/cart/update',
  cartLists:'/cart/list',
  cartReduce:'/cart/reduce',
  cartRemove:'/cart/remove',
  cartMrremove:'/cart/mrremove',
}


//开发环境和真实环境的切换
// let host = ''
let host = 'http://rap2api.taobao.org/app/mock/183507'

for(let key in url){
  if(url.hasOwnProperty(key)){
     url[key] = host + url[key];
  }
}

export default url
