import {Model} from '../../Model/Model.js'
const model =new Model()
var header;
header = {
   'content-type': 'application/x-www-form-urlencoded',
   'cookie':wx.getStorageSync("sessionid")//读取cookie
};
var header2;
header2 = {
   'content-type': "application/json;charset=UTF-8",
   'cookie':wx.getStorageSync("sessionid")//读取cookie
};
Page({

    data: {
		cart:[],
		cartTotalPrice:0,
		cartTotalQuantity:0
    },
	go_address:function(){
		wx.navigateTo({
			
			 url:'/pages/address/index'
			
			})
	},
	jian:function(event){
		let  quan1=this.data.cartTotalQuantity-1
		 console.log(quan1)
		 console.log(event.currentTarget.dataset.gid)
		let productId=event.currentTarget.dataset.gid
		
		model.jian(productId,quan1,header2,(res)=>{
			  console.log(res)
			  this.setData({
				  num:res.data.cartTotalQuantity,
				  dan:res.data.cartTotalPrice,
				  cartTotalPrice:res.data.cartTotalPrice,
				  cartTotalQuantity:res.data.cartTotalQuantity
			  })
			  model.getCart(header,(res)=>{
			  	
			  	console.log(res)
			  	this.setData({
			  			cart:res.data.cartProductVoList	,
			  			cartTotalPrice:res.data.cartTotalPrice,
			  			cartTotalQuantity:res.data.cartTotalQuantity
			  	})
			  })
			  
			  
		})
	},
	add:function(event){
		let  quan1=this.data.cartTotalQuantity+1

		let productId=event.currentTarget.dataset.gid
	
		model.jian(productId,quan1,header2,(res)=>{
			  console.log(res)
			  this.setData({
				  cartTotalPrice:res.data.cartTotalPrice,
				  cartTotalQuantity:res.data.cartTotalQuantity
			  })
			  model.getCart(header,(res)=>{
			  	
			  	console.log(res)
			  	this.setData({
			  			cart:res.data.cartProductVoList	,
			  			cartTotalPrice:res.data.cartTotalPrice,
			  			cartTotalQuantity:res.data.cartTotalQuantity
			  	})
			  })
			  
		})
		
	
	},
	del:function(event){
		let productId=event.currentTarget.dataset.gid
		model.dele(productId,header2,(res)=>{
			console.log(res)
			model.getCart(header,(res)=>{
				
				console.log(res)
				this.setData({
						cart:res.data.cartProductVoList	,
						cartTotalPrice:res.data.cartTotalPrice,
						cartTotalQuantity:res.data.cartTotalQuantity
				})
			})
			
		})
		
		
	},
    onLoad: function (options) {
			// model.getCart(header,(res)=>{
			// 	console.log(res)
			// })
    },
    onReady: function () {

    },

    onShow: function () {
			model.getCart(header,(res)=>{
				console.log(res)
				this.setData({
						cart:res.data.cartProductVoList	,
						cartTotalPrice:res.data.cartTotalPrice,
						cartTotalQuantity:res.data.cartTotalQuantity
				})
			})
			
    },
	// jian:function(){
		
		
	// }

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },
    onUnload: function () {

    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }
})