// client/pages/main.js

var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
let app =  getApp();

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    openId:'null',
    tel:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  logUser:function(){
    console.log('openId ' + this.data.openId)
  },
  openIdInput:function(e){
    this.setData({
      openId:e.detail.value
    })
    console.log('setopenid ' + e.detail.value)
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
    this.isAuthUserInfo()
    console.log('main OnLoad ' + app.globalData.openId)
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
  //判断是否有过授权
  isAuthUserInfo:function(){
   const session = qcloud.Session.get();
   if(session){
    this.setData({
      userInfo:session
     });
     this.isBindTel(session.userinfo.openId)
   }else{
     wx.redirectTo({
       url: '../auth/auth',
       success: (result)=>{
         
       },
       fail: ()=>{},
       complete: ()=>{}
     });
   }
   
  },

  //判断是否绑定过手机
  isBindTel:function (openId) {
    util.showBusy('请求中...')
    var that = this
    
    wx.request({
      method:'GET',
      data:{
        openId:"888"
      },
      //header: {"content-type": "application/x-www-form-urlencoded"},
      url:`${config.service.host}/weapp/bindTel`,
      login:false,
      success(result){
        util.showSuccess('请求完成')
        if(JSON.stringify(result.data.data) === '[]'){
          that.setData({
            tel:'无手机'
          })  

          //没有手机跳转到绑定界面
          wx.redirectTo({
            url: '../bindTel/bindTel',
            success: (result)=>{
              
            },
            fail: ()=>{},
            complete: ()=>{}
          });

        }else{
          that.setData({
            tel:result.data.data[0].tel
          })
        }
        console.log(openId + '绑定手机查询结果 ' +JSON.stringify(result.data))
      },
      fail(error){
        util.showModel('请求失败', error)
        console.log('request fail',error)
      }
    })
  }
})