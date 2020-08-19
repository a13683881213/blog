import {HTTP} from '../util/http.js'

class Model  extends HTTP{
		login(name,sCallback){
			this.request({
				url:'/user/login',
				method:'post',
				data: {
				    username:name,
				    password:123456
				  },
				success: (res) => {
			wx.showToast({
			title: '登录成功',
			icon: 'success',
			duration: 2000
			})	
					 sCallback(res)
					 console.log(res)
					
				}
			})		
		}
		zheCe(name,sCallback){
			this.request({
				url:'/user/register',
				method:'post',
				data: {
				    username: name,
				    password: 123456
				  },
				success: (res) => {
				wx.showToast({
				  title: '注册成功',
				  icon: 'success',
				  duration: 2000
				})				
					 sCallback(res)
				}
			})			
		}
		
	  getProduct(sCallback){
				this.request({
					url:'/products',
					method:'get',
					data: {
					    categoryId:'100012',
					    pageSize:20
					  },
					success: (res) => {
						 sCallback(res)
					}
				})
	  }
	  getProDetail(id,sCallback){
		  this.request({
		  	url:`/products/${id}`,
		  	method:'get',
		  	data: {
		  	    productId:id,
		  	  },
		  	success: (res) => {
		  		 sCallback(res)
		  	}
		  })  
	  }
	  addCart(id,header,sCallback){
		  this.request({
			  url:"/carts",
			  method:'post',
			  header:header,
			  data:{
				  productId:id,
				  selected: true
			},
			 success: (res) => {
			 	sCallback(res)
			 }
		  })
		  
		  
	  }
	  getCart(header,sCallback){
	  		  this.request({
	  			  url:"/carts",
	  			  method:'get',
				  header:header,
	  			 success: (res) => {
	  			 	sCallback(res)
	  			 },
				 fail: () => {
				 	 wx.showToast({
						 title:'请先登录',
						 duration:3000
					 })
				 }
	  		  })	  
	  }
	  submitOrder(){
		  this.request({
		  	  			  url:"/carts",
		  	  			  method:'get',
		  				  header:header,
		  	  			 success: (res) => {
		  	  			 	sCallback(res)
		  	  			 }
		  })	  
		  
	  }
	  subAddress(obj,header,sCallback){
		  this.request({
					url:"/shippings",
					 method:'post',
					 header:header,
					 data:{
						receiverName:obj.receiverName,
						receiverMobile:obj.receiverMobile,
						receiverProvince:obj.receiverProvince,
						receiverCity:obj.receiverCity,
						receiverDistrict:obj.receiverDistrict,
						receiverAddress:obj.receiverAddress
					 },
					success: (res) => {
						sCallback(res)
					}
			  
			  
		  })
		  
	  }
	  subOrder(shippingId,header,sCallback){
		    this.request({
				 url:"/orders",
				  method:'post',
				  header:header,
				  data:{
							shippingId:shippingId
				  },
				 success: (res) => {
				 	sCallback(res)
				 }
				})
		  
		  
	  }
	  getOrder(header,sCallback){
		  this.request({
		  	 url:"/orders",
		  	  method:'get',
		  	  header:header,
		  	 success: (res) => {
		  	 	sCallback(res)
		  	 },
			 fail: () => {
			 	 wx.showToast({
			 						 title:'请先登录',
			 						 duration:3000
			 					 })
			 }
		  	})
		  }
	  jian(productId,quantity,header,sCallback){
		  this.request({
		  	 url:`/carts/${productId}`,
		  	  method:'put',
		  	  header:header,
			  data:{
				quantity:quantity,
				selected: true
			  },
		  	 success: (res) => {
		  	 	sCallback(res)
		  	 }
		  	})
		  
	  }
	  getOrderDe(orderNo,header,sCallback){
			this.request({
		  	 url:`/orders/${orderNo}`,
		  	  method:'get',
		  	  header:header,
			  data:{
				orderNo:orderNo,
			  },
		  	 success: (res) => {
		  	 	sCallback(res)
		  	 }
		  	})
		  }
	  dele(productId,header,sCallback){
		  this.request({
		   url:`/carts/${productId}`,
		    method:'DELETE',
		    header:header,
		    data:{
		  	productId:productId,
		    },
		   success: (res) => {
		   	sCallback(res)
		   }
		  })  
	  }
	  deleOrder(orderNo,header,sCallback){
	  		  this.request({
	  		   url:`/orders/${orderNo}`,
	  		    method:'PUT',
	  		    header:header,
	  		    data:{
	  		  	orderNo:orderNo,
	  		    },
	  		   success: (res) => {
	  		   	sCallback(res)
	  		   }
	  		  })  
	  }
	  
	
}


export {Model}

