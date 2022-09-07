//普通提示
function toast(title,duration=3000){
  uni.showToast({
    title,
    icon:'none',
    duration
  })
}
//失败提示toast.err('网络错误')
toast.err=function(title,duration=3000){
  uni.showToast({
    title,
    icon:'error',
    duration
  })
}
//成功提示toast.err('网络成功')
toast.success=function(title,duration=3000){
  uni.showToast({
    title,
    icon:'success',
    duration
  })
}
export default toast