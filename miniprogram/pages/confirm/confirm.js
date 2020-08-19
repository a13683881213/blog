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

    /**
     * 页面的初始数据
     */
    data: {
				orderDe:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
			let orderNo=options.orderNo
			model.getOrderDe(orderNo,header2,(res)=>{
				
				console.log(res)
				this.setData({
					orderDe:res.data
					
				})
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