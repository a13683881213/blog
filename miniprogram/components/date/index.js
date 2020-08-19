// 组件的生命周期函数
Component({
  
    properties: {
	
		index:{
			type:String,
			// 当index改变更新会触发obser 
			observer:function(newVal,oldVal,changedPath){
				 let val=newVal<10?'0'+newVal:newVal
					this.setData({
						 index2:val
					})
				// 千万不要在observer中修改自身的属性，可以再新建一个data
			}
		}
    },

    data: {
		month:'',
		year:0,
		index2:0
    },
// data和pro会集合成一个对象 可以从data取出pro
// 在pro和data中的不能重复
	

    methods: {

    },
	attached:function(){
		let month2=[
			'一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
		]
	   let date=new Date()
	   let year=date.getFullYear()
		let month=date.getMonth()
		this.setData({
			year:year,
			month:month2[month]
		})
		
		
	}
})
