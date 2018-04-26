// pages/search/search.js
import config from '../../utils/common.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
		searchContent:'',
		goodsArr: [],
		list:[
			{ 'id': '10003', 'topic': '红米4A'},
			{ 'id': '10004', 'topic': '小米Note3' },
			{ 'id': '10005', 'topic': '小米MIX2' },
			{ 'id': '10006', 'topic': '小米5X' },
			{ 'id': '10007', 'topic': '红米5' },
			{ 'id': '10008', 'topic': '小米Max2' },
		]
  },
	setSearchContent(e){
		//设置搜索内容
		this.setData({
			searchContent: e.detail.value
		})
	},
	toSearch(){
		//获取搜索内容
		let arr=this.data.goodsArr;
		let ctx = this.data.searchContent;
		console.log(arr+'------'+ctx);
		let searchItem = null;
		arr.map(function(value,key){
			if(ctx == value.keyword){
				console.log(arr[key]);
				searchItem = arr[key];
        console.log(searchItem.id)
				wx.navigateTo({
					url:'../item/item?goodsId='+searchItem.id
				});
			}
		})
		
		
		

		
		
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(config);
		var self = this;
		wx.request({
			url: config.HOME,
			success(res){
				self.setData({
					goodsArr: res.data.result.list[0].special.phone
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