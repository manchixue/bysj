// pages/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		oid:0,
		category: ['新品', '手机', '电视', '家电', '路由', '智能', '儿童', '电源', '耳机', '音响', '礼品', '生活', '服务', '零售店'],
		imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
		content: [{ 'src': 'c1.jpg', 'goodsId': '10001', 'name': '小米MX2' },
							{ 'src': 'note5.jpg', 'goodsId': '10002', 'name': '红米Note 5'} ,
							 {'src': 'special1.webp', 'goodsId': '10003', 'name': '红米4A'},
							 {'src': 'special2.webp', 'goodsId': '10004', 'name': '小米Note3'}],
  },
	chooseList(e){
		// console.log('aaaa')
		console.log(e.target.id);
		this.setData({
			oid:e.target.id
		})
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