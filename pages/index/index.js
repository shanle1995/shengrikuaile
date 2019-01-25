//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  //页面刷新函数
  onLoad: function () {
    
  },
  onPullDownRefresh(){
    //下拉刷新
    //可以通过wx.startPullDownRefresh触发下拉刷新
    //当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
  },
  onReachBottom(){
    //上拉操作
  },
  onPageScroll(num){
    //监听用户滑动页面事件
    //scrollTop	Number	页面在垂直方向已滚动的距离（单位px）
  },
  onShow() {
    console.log(this.route)
    //到当前页面的路径，类型为String。 
  }
})
