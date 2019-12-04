// 类似javascript文件
var config = getApp().globalData.config
var imageHost = config.imageHost;

Page({

  // 页面的初始数据
  data: {
    scrollImage: [imageHost+"mall/iPhone8Plus1.jpg", imageHost+"mall/ViVoNEX1.jpg", imageHost+"mall/OPPOFind1.jpg"],
    contentItemImage: [imageHost+"mall/mobile1.jpg", imageHost+"mall/mobile2.jpg",
      imageHost+"mall/mobile3.jpg", imageHost+"mall/mobile4.jpg"],
    contentItemText: ["OPPO U701", "诺基亚手机", "IPhone 6", "魅族 MX5"],
    bottomcontentitemImage: [imageHost+"mall/HUAWEIP20Pro1.jpg", imageHost+"mall/SansungGalaxyA9Star1.jpg",
                             imageHost+"mall/HonorPlay1.jpg"],
    bottomcontentitemTitle: ["能打电话的“相机” 华为P20 Pro", "Bixby演技炸裂 三星A9Star发布回顾", "荣耀Play拆解 探秘能感受后坐力的手机"],
    bottomcontentitemContent: ["3月27日，华为P20系列与我们如期而至，其中华为P20 Pro搭载的徕卡三摄、AI摄影，让走时尚风的P系列竟点出了拍照的黑科技之树。这次，我们拿到了华为P20 Pro极光色版本，徕卡三摄是否名副其实，升级幅度是否有命名的改变那么大，我们一起来看看。","三星Galaxy A9 Start, 前后2400万像素。采用4倍超采样 Tetrace技术，降低拍照时产生噪点的可能性","荣耀Play是一款售价2k区间的中端机型，该机主打游戏体验，面向年轻群体，除了配备前段时间很火的GPU，Turbo技术，还具备4D游体验，也就是加入了震动回馈。究竟是什么硬件实现的呢？"],
    robots: [imageHost+"mall/robot0.png", imageHost+"mall/robot1.png", imageHost+"mall/robot2.png"]
  },

  // 生命周期函数--监听页面加载
  onLoad: function(options) {

  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function() {

  },

  // 生命周期函数--监听页面显示，当页面在前台显示时调用，加载一些资源
  onShow: function() {},

  // 生命周期函数--监听页面隐藏，当微信在后台运行时调用，通常会释放一些资源
  onHide: function() {

  },

  // 生命周期函数--监听页面卸载
  onUnload: function() {

  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function() {

  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function() {

  },

  // 用户点击右上角分享
  onShareAppMessage: function() {

  },
  toUserPage: function() {
    wx.navigateTo({
      url: '../user/user',
    })
  },
  toLoginPage: function() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  footImageClick: function(event) {
    var index = event.currentTarget.id
    if (index == 0)
      this.setData({
        currentFootImages: [imageHost+"mall/et.png", imageHost+"mall/h.png", imageHost+"mall/u.png"],
      });
    else if(index==1)
      this.setData({
        currentFootImages: [imageHost+"mall/e.png", imageHost+"mall/ht.png", imageHost+"mall/u.png"],
      });
    else{
      this.setData({
        currentFootImages: [imageHost+"mall/e.png", imageHost+"mall/h.png", imageHost+"mall/ut.png"],
      });
      this.toUserPage();
    }      
  }
})