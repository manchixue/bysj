//index.js
//获取应用实例
const app = getApp()
import config from '../../utils/common.js';


Page({
  data: {
    dataArr:{}
  },
  //事件处理函数
  onLoad: function () {
		let self = this;
		wx.request({
			url:config.HOME,
			success(res){
				console.log(res.data.result.list[0])
				self.setData({
					dataArr: res.data.result.list[0]
				})
			}
		})
  },
	onReady:function(){
	
	}
})
