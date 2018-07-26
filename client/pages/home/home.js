// pages/home/home.js
const qcloud=require('../../vendor/wafer2-client-sdk/index.js')
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
    qcloud.request({
      url: 'https://xek6j1n7.qcloud.la/weapp/product',
      success:reslut=>{
        console.log(reslut)
        this.setData({
         productList:reslut.data.data
       })
      },
      fail:()=>{

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