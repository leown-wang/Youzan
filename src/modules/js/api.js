let url = {
  hotLists:'/index/hotLists',
  banner:'/index/banner',
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
