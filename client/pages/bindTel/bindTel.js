var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
let app =  getApp();

  


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },

  //绑定输入框内容
  watchTel:function(e){
    console.log('tel ' + JSON.stringify(e.detail.detail.value))
    this.setData({
      tel:e.detail.detail.value
    })
  },
  handleClick:function(){
    console.log('tel' + this.data.tel);
    this.bindTel(app.globalData.openId,this.data.tel)
  },
  //bind tel 
  bindTel:function(openId, tel){
    util.showBusy('请求中...')
    var that = this

    wx.request({
      method:'POST',
      data:{
        openId:openId,
        tel:tel
      },
      url:`${config.service.host}/weapp/bindTel`,
      login:false,
      success(result){
        util.showSuccess('请求完成')
        console.log('result ->> ' + JSON.stringify(result))
      },
      fail(error){
        util.showModel('请求失败',error)
        console.log('request fail',error)
      }
    })
  }
})