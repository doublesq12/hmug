import fly from '@/utils/request.js'
//获取首页轮播图
export const getBanners=()=>fly.get('/home/swiperdata')