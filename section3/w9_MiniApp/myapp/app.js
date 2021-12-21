// app.js
App({
  onLaunch(options) {console.log('app.onLaunch',options)
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  onShow(options){
    console.log('app.onShow',options)
  },
  onHide(){
    console.log('app.onHide')
  },
  globalData: {
    userInfo: null
  },
  baseUrl:'http://laoxie.com'
})
