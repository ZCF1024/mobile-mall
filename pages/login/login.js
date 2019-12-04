// 类似javascript文件
Page({

  // 页面的初始数据
  data: {

  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {

  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {

  },

  // 生命周期函数--监听页面显示，当页面在前台显示时调用，加载一些资源
  onShow: function () {
    console.log("-=====================show")
  },

  // 生命周期函数--监听页面隐藏，当微信在后台运行时调用，通常会释放一些资源
  onHide: function () {

  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {

  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {

  },

  // 用户点击右上角分享
  onShareAppMessage: function () {

  },
  login: function(){
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://na9dkt.natappfree.cc:8082/login',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})