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
        icon:'wap-home-o',
        "iconPath": "/img/home.png",
        "selectedIconPath": "/img/home_active.png"
      },
      {
        "text": "列表",
        "pagePath": "/pages/list/list",
        icon:'points',
        "iconPath": "/img/list.png",
        "selectedIconPath": "/img/list_active.png"
      },
      {
        "text": "我的",
        "pagePath": "/pages/mine/mine",
        icon:'contact',
        "iconPath": "/img/mine.png",
        "selectedIconPath": "/img/mine_active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      const idx = e.detail;

      const currentPage = this.data.menu[idx]
      wx.switchTab({
        url: currentPage.pagePath,
      })
    },
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
