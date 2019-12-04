// components/component-demo/component-demo.js
Component({
  
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    employeeName: { // 属性名
      type: String,
      value: '朱才富'
    },
    employeeId: { // 属性名
      type: Number,
      value: 90
    }
  },

  /**
   * 数据监听器
   */
  observers: {
    '**': function (field) {
      console.info("field",field)
    },
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },

  /**
   * 组件的初始数据
   */
  data: {
    employeeName: 'ZCF',
    employeeId: 'ninety'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeData: function(){
      this.setData({
        employeeId: 100,
        employeeName: '修改后的名称'
      })
    }
  }
})
