import {Model} from '../../Model/Model.js'
  const  model =new Model()
Page({

    /**
     * 页面的初始数据
     */
    data: {
				proList:[],
				islogin:false,
				username:'',							
    },
    mai:function(event){
				 console.log(event.currentTarget.dataset.gid)
				 const gid=event.currentTarget.dataset.gid
				 wx.navigateTo({
					 url:`/pages/detail/detail?gid=${gid}`
				 })
	},
	getLogin(event){
		
		 console.log(event.detail.userInfo.nickName)
		 this.setData({
			 username:event.detail.userInfo.nickName
		 })
		 let name=this.data.username
		 model.zheCe(name,(res)=>{
		 			 
		 			 console.log('注册成功')
					 this.setData({
						 islogin:true
					 })
		 })	 
	},
	Login(){
		let name=this.data.username
		model.login(name,(res)=>{
					 
					 console.log('登录成功')
		})		 
		
		
	},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
			model.getProduct((res)=>{
				console.log(res.data.list)
				this.setData({
					proList:res.data.list
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