// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		cars:[],
		money:0,
		counts:0,
		x0:null,
		x:null,
		flag:false
  },
	delete(e){
		// this.
		let self = this;
		let index = e.target.dataset.index
		this.data.cars.map(function(value,key){
			if(value.id === index){
				self.data.cars.splice(key,1);
				self.setData(self.data);
				// wx.removeStorageSync('cars')
				wx.setStorageSync('cars', self.data.cars)
			}
		})
	},
	selectedAllGoods:function(e){
		if (e.detail.value.length>0){
			console.log('全选');
			this.selectAllGoods(true)
		}else{
			console.log('取消全选')
			this.selectAllGoods(false)
		}
		this.changeMoney();
	},
	selectAllGoods:function(isChecked){
		var cars = this.data.cars;
		for(var i = 0;i<cars.length;i++){
			cars[i].checked=isChecked;
		}
		this.setData({
			cars:cars
		})
		wx.setStorage({
			key: 'cars',
			data: cars,
		})
	},
	changeMoney: function () {
		var money = 0;
		var counts = 0;
		var cars = this.data.cars;
		for (var i = 0; i < cars.length; i++) {
			var car = cars[i];
			if (car.checked) {
				counts++;
				console.log(car.price.slice(1))
				money += car.numbers * car.price.slice(1);
			}
		}
		this.setData({
			counts: counts,
			money: money,
		})
	},
	selectedItemGoods: function (e) {
		//1.获取所有选中的商品
		var selectGoods = e.detail.value;
		var cars = this.data.cars;
		//2.让所有的商品默认不选中
		for (var i = 0; i < cars.length; i++) {
			//默认不选中
			cars[i].checked = false;
		}
		//3.遍历选中的商品
		for (var i = 0; i < selectGoods.length; i++) {
			var index = selectGoods[i];
			//选中
			cars[index].checked = true;
		}
		//4.刷新页面
		this.setData({
			cars: cars,
		})
		//5.更新本地数据
		wx.setStorage({
			key: 'cars',
			data: cars,
		})
		//6.更新合计
		this.changeMoney();
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
		let cars = wx.getStorageSync('cars');
		this.setData({
			cars:cars
		})
		this.changeMoney()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
		this.changeMoney();
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