// Linklist/Linklist.js
Component({
  properties: {
    usite: {
      type: String,
      value: 'http://',
    },
  },

  data: {
    ItemList: [
      { "pagename":"第一次作业：留言板","pagetext":"../../pages/lxjsq/lxjsq"},
      { "pagename": "第二次作业：利息计算器", "pagetext": "../../pages/lxjsq/lxjsq" },
      { "pagename": "第三次作业：猜字游戏", "pagetext": "../../tools/guess/guess" },
      { "pagename": "第四次作业：地图", "pagetext": "../../tools/map/map" }
      ],
  },
  attached() {
  },
  methods: {
    //显示页面代码
    showpage: function () {
      var that = this;
      wx.request({
        url: that.data.usite + '/cmsv1/apis/getHomePagelist.ashx?mlh=07',
        header: { 'content-type': 'applciation/json;charset=UTF-8' },
        method: 'GET',
        success: function (res) {
          var str2 = res.data.substr(1, res.data.length - 2)
          console.log(str2);
          that.setData({
            ItemList: JSON.parse(str2),
          })
        },
        fail: function (err) {
          console.log(err)
        }
      })
    }

  }
})
