// 组件的分离性远远比复用更加重要，不要在一个页面中写大大量的功能
Component({
    /**
     * 组件的属性列表
     */
	
	
	
	
    properties: {
		like:{
			type:Boolean,	
		},
		count:{
			type:Number
		}
// 	组件的对外属性，可在组件外部访问

    },

    /**
     * 组件的初始数据
     */
    data: {
		// 数据绑定
		// 封装性 开发性
		// 哪些应该开放出来
		// 哪些功能写在里面
	// 组件的内部数据，和 properties 一同用于组件的模板渲染
		yesSrc:'images/like.png',
		noSrc:'images/no-like.png',
		
    },
    methods: {
		click:function(event){
				let like=this.properties.like
				let count=this.properties.count
				count=like?count-1:count+1
			this.setData({
				like:!like,
				count:count
			})
		// setData用于数据更新	
		// 向父组件传自定义方法和属性值 和this.emit相似
		 let behavior=this.properties.like?'like':'cancel'
		 this.triggerEvent('islike',{
			 behavior:behavior
		 },{})
		}
    }
})
