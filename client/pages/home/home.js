// pages/home/home.js
const qcloud=require('../../vendor/wafer2-client-sdk/index.js')
const config=require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductList();
  },

  getProductList(){
    wx.showLoading({
      title: '正在加载中...',
    })
    qcloud.request({
      url: config.service.productListUrl,
      success: reslut => {
        console.log(reslut)
        this.setData({
          productList: reslut.data.data
        })
        wx.hideLoading()
      },
      fail: () => {
        wx.hideLoading()
        wx.showToast({
          title: '不好意思,我挂了...',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})