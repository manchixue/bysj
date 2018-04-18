// pages/item/item.js
import config from '../../utils/common.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
		dataArr:{}
  },
	clickToCar:function(){
		wx.switchTab({
			url: '../shopcar/shopcar',
		});
	},
	hasGoods(goods, newGoodsId) {
		for (var i = 0; i < goods.length; i++) {
			var good = goods[i];
			if (good.id == newGoodsId) {
				return true
			}
		}
		return false;
	},
	addToCar(){
		let goodInfo = this.data.dataArr;
		let newGood ={
			id:goodInfo.goodsId,
			name:goodInfo.topic,
			price:goodInfo.price,
			numbers:1,
			checked:true
		};
		var goods = [];
		goods = wx.getStorageSync('cars');
		var hasGoods = this.hasGoods(goods, goodInfo.goodsid);
		// 如果该商品已经加过购物车就直接返回
		if (hasGoods) {
			wx.showToast({
				title: '已加购物车',
			})
			return;
		}
		if (goods.length == 0) {
			goods = [];
		}

		goods.push(newGood);
		wx.setStorage({
			key: 'cars',
			data: goods,
			success:function(){
				wx.showToast({
					title:'加入购物车成功'
				})
			}
		})
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		let self = this;
		console.log(options.goodsId)
		let url = config.GOODS+'?goodsId='+options.goodsId;
		wx.request({
			url: url,
			success:function(res){
				// console.log(res.data.result.list[0])
				self.setData({
					dataArr: res.data.result.list[0]
				})
			}
		})
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