import {Model}  from '../../Model/Model.js'
const  model =new Model()
var header;
header = {
   'content-type': 'application/json;charset=UTF-8',
   'cookie':wx.getStorageSync("sessionid")//读取cookie
};
Page({

    /**
     * 页面的初始数据
     */
    data: {
			product:{},
			version:0,
			color:0,
			add_id:0
				},
	version1:function(){
		this.setData({
			version:1
			})
		},
	version2:function(){
			this.setData({
				version:2
				})
			},
	color1:function(){
		this.setData({
			color:1
			})
		},
	color2:function(){
		this.setData({
			color:2
			})
		},
	addCart:function(){
		const add_id=this.data.add_id
		model.addCart(add_id,header,(res)=>{
			console.log(res,'添加成功')
			
			if(res.status===0){
				wx.showToast({
				title:'加入成功',
				 icon: 'success',
				duration:2000
			})
		}else{
			wx.showToast({
			  title: '未能加入',
			  icon: 'fail',
			  duration: 2000
			})
		}
		
	} ) },
    onLoad:function (options) {
		const id=options.gid
		 this.setData({
			 add_id:id
		 })
			model.getProDetail(id,(res)=>{
				 console.log(res)
				 this.setData({
					 product:res.data
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