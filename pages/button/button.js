// pages/component/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    plain: false,
    loading: false,
    typeArray: ["default","primary","warn"],
    types: "default",
    typeIndex: 0
  },
  
  changeType: function(){
    var tmpIndex=this.data.typeIndex;
    tmpIndex=(tmpIndex+1)%3;
    this.setData({ types: this.data.typeArray[tmpIndex],typeIndex: tmpIndex});
    // console.log(tmpIndex);
  },
  changeLoading: function(){
    var tmp=this.data.loading;
    this.setData({loading: !tmp});
  },
  changePlain: function(){
    var tmp = this.data.plain;
    this.setData({plain: !tmp });
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  }
})