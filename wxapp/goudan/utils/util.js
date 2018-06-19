const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const $get = (url, data) => {
  // 可能有耗时的事情
  const p = new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
    //  缺点？需要请求多个url1 url2 ...
    // 回调地狱 依赖于success
    //     wx.request({
    //       url1,
    //       success:(data)=>{
    //         wx.request({
    //           url2,
    //           success:(data)=>{

    //           }
    //         })
    //       }
    //     })
  })
  return p;
}

module.exports = {
  formatTime: formatTime,
  $get: $get
}
