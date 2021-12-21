// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classlist:[],
    total:0,
    page:1,
    size:15,
    hasMore:true
  },

  getData(){
    const {page,size,classlist} = this.data;
    return new Promise((resove,reject)=>{
      wx.request({
        url: 'http://120.76.247.5:2002/api/class',
        data:{
          size,
          page
        },
        success:({data})=>{
          console.log('data',data)
          const newClasslist = [...classlist,...data.data.result]
          const total = data.data.total
          this.setData({
            classlist:newClasslist,
            total,
            hasMore:newClasslist.length<total
          })

          resove(data)
        },
        fail(err){
          reject(err)
        }
      })

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('list.onLoad',options)

    this.getData();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('list.onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('list.onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('list.onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('list.onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: async function () {
    this.setData({
      classlist:[],
      total:0,
      page:1,
      size:15,
      hasMore:true
    })

    await this.getData();
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const {hasMore,page} = this.data;
    if(hasMore){
      this.setData({
        page:this.data.page+1
      })

      this.getData();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})