// components/datalist/datalist.js

// Behavior： 组件公共配置
const myBehavior = Behavior({
  // 这里的代码于组件配置一致
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    a:10
  },
  attached: function(){},
  methods: {
    myBehaviorMethod: function(){}
  }
})

Component({
  behaviors:[myBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    data:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCount(){
      this.setData({
        count:this.data.count+1
      })
    }
  },

  // 组件生命周期钩子函数:新版小程序建议写在lifetimes
  lifetimes:{
    created(){

    },
    attached(){

    }
  },

  // 组件所在页面生命周期钩子函数
  pageLifetimes:{

  }
})
