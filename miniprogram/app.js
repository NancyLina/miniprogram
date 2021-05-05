//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      console.log('小程序开始启动啦')
      wx.cloud.init({
        // env: 'cloud1-5gf0uuzj60a1d421',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
