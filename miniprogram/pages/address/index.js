import {Model} from '../../Model/Model.js'
const model =new Model()
var header
header = {
 'content-type': 'application/json;charset=UTF-8',
 'cookie':wx.getStorageSync("sessionid")//读取cookie
};

Page({

    /**
     * 页面的初始数据
     */
    data: {
			shippingId:0,
			isShow:false
    },
	formSubmit: function (e) {
	  console.log('form发生了submit事件，携带数据为：', e.detail.value);
			const  obj={
				receiverName:e.detail.value.name,
				receiverMobile:e.detail.value.phone,
				receiverProvince:e.detail.value.province,
				receiverCity:e.detail.value.city,
				receiverDistrict:e.detail.value.jie,
				receiverAddress:e.detail.value.xiang
			}
			model.subAddress(obj,header,(res)=>{
				 console.log(res)
				 this.setData({
					 shippingId:res.data.shippingId
					 
				 })
				 wx.showToast({
					 title:'地址成功',
					 duration:2000
				 })			})
			this.setData({
				isShow:true
			})	
	    
	   return;
	  },
	  subOrder:function(){
		  let shippingId=this.data.shippingId
		  model.subOrder(shippingId,header,(res)=>{
			  
			  console.log(res)
			  let  orderNo=res.data.orderNo
			  wx.navigateTo({
				  url:`/pages/confirm/confirm?orderNo=${orderNo}`
			  })
		  })
		  
	  },
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