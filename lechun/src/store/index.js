import Vue from "vue"
import Vuex from "vuex"
import shoppinglist from "./modules/shoppinglist.js"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		name:"cui",
		age:21,
		datas:[]
	},
	modules:{
		shoppinglist
	}
})

export default store

