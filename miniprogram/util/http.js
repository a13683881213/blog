
import {config} from '../config.js'

class HTTP {
	 request(params){
			wx.request({
				url: config.api_base_url+params.url,
				method:params.method,
				data:params.data,
	            header:params.header,
				success: (res) => {
					console.log(res)
					 if(res.header["Set-Cookie"]){
					  wx.setStorageSync("sessionid", res.header["Set-Cookie"])
					  }
					let code=res.statusCode.toString()
					if(code.startsWith('2')){
						params.success(res.data)
					}else{
						wx.showToast({
									 title:"request error",
									 duration:2000
						})
						
					}
					
				},
				fail:(err)=>{
					wx.showToast({
								 title:"request error",
								 duration:2000
					})
				}
			})
		 
		 
	 }
	
}


export {HTTP}