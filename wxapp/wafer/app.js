//app.js
App({
  onLaunch: function () {
    // console.log('launch');  
    wx.getStorage({
      key: 'user-info',
      success: (res)=>{
        this.globalData.userInfo=res.data
      },
    })
  },
  globalData: {
    userInfo: null
  }
})