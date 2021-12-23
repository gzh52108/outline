// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0,
    menu: [
      {
        "text": "首页",
        "pagePath": "/pages/index/index",
        "iconPath": "/img/home.png",
        "selectedIconPath": "/img/home_active.png"
      },
      {
        "text": "列表",
        "pagePath": "/pages/list/list",
        "iconPath": "/img/list.png",
        "selectedIconPath": "/img/list_active.png"
      },
      {
        "text": "我的",
        "pagePath": "/pages/mine/mine",
        "iconPath": "/img/mine.png",
        "selectedIconPath": "/img/mine_active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeMenu(e){
      const {path} = e.currentTarget.dataset;
      console.log('path',path)
      wx.switchTab({
        url: path,
      })

      // this.setData({
      //   current:3
      // })
    }
  }
})
