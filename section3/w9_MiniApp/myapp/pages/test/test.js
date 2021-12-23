import request,{baseUrl} from '../../utils/request'
import m_utils from '../../utils/util'
var appInstance = getApp()
// console.log('appInstance',appInstance)
const m_request = require('../../utils/request')
const utils = require('../../utils/util')
console.log('request',m_utils,m_request)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'hello everybody',
    user:{
      password:1234
    },
    userlist:['王力宏','李云迪','霍尊'],
    num:1
  },
  changeNum(){
    this.setData({
      num:this.data.num+1
    })
  },
  changeMsg(e){
    // 在js中获取data属性：this.data.msg;
    console.log('e',e)

    // 修改：this.setData()
    this.setData({
      msg:e.detail.value
    })
  },

  submit(e){
    console.log('e',e)
    const {index,password} = e.target.dataset;
    console.log('index',index,password)
  },

  add(a,b){
    return a+b;
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

  }
})