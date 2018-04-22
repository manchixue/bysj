// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		userInfo:[],
		arr:[
			{ 'pic': 'inner1.png', 'content': '会员中心'},
			{ 'pic': 'inner2.png', 'content': '我的优惠' },
			{ 'pic': 'inner3.png', 'content': '服务中心' },
			{ 'pic': 'inner4.png', 'content': '小米之家' },
			{ 'pic': 'inner5.png', 'content': 'F码通道' },
			{ 'pic': 'inner6.png', 'content': '设置' },
		]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		let self = this;
		wx:wx.getUserInfo({
			withCredentials: true,
			lang: '',
			success: function(res) {
				console.log(res.userInfo);
				self.setData({
					userInfo: res.userInfo
				})
			},
			fail: function(res) {},
			complete: function(res) {},
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