const shoppinglist = {
	namescoped:true,
	state:{
		list:[],
		shoplist:[]
	},
	getters:{},
	mutations:{
		SHOP_LIST(state,stark){
			state.shoplist.push({
				name:state.list[stark.Id].proTitle,
				id:stark.Id,
				count:stark.counts,
				price:stark.price
			});
		},
		SAVE_DATA(state,payload){
			state.list.forEach((item,index)=>{

			})
		}
	},
	actions:{}
}
export default shoppinglist








