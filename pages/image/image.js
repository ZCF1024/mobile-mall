Page({
  data: {
    src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575023252000&di=a881452c7a0f4480bd74b8eed293c9e6&imgtype=0&src=http%3A%2F%2Fdesk.fd.zol-img.com.cn%2Fg5%2FM00%2F00%2F07%2FChMkJ1ZqMb2IWITEAAbRDaofaNIAAGBHwO3hh0ABtEl380.jpg",
    modeIndex: 0,
    modes: [{
      mode: "scaleToFit",
      text: "scaleToFit: 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素"
    }, {
      mode: "aspectFit",
      text: "aspectFit: 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。"
    }, {
      mode: "aspectFill",
      text: "aspectFill: 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。"
    }, {
      mode: "widthFix",
      text: "widthFix: 宽度不变，高度自动变化，保持原图宽高比不变"
    }, {
      mode: "top",
      text: "top: 显示上边"
    }, {
      mode: "bottom",
      text: "bottom: 显示下边"
    }, {
      mode: "right",
      text: "right: 显示右边"
    }, {
      mode: "left",
      text: "left: 显示左边"
    }, {
      mode: "center",
      text: "center: 显示中间"
    }, {
      mode: "top left",
      text: "top left: 显示左上方"
    }, {
      mode: "top right",
      text: "top right: 显示右上方"
    }, {
      mode: "bottom left",
      text: "bottom left: 显示左下方"
    }, {
      mode: "bottom right",
      text: "bottom right: 显示右下方"
    }]
  },
  onReady: function() {

  },
  changeModeAfter: function(){
    this.setData({modeIndex: (this.data.modeIndex+1)%13});
  },
  changeModeBefore: function () {
    this.setData({ modeIndex: (this.data.modeIndex + 12) % 13 });
  }
})