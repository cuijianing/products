<template>
	<div class="shopBtn">
		<div class="shopcar" v-show="!flag">
			<i @click="minus">-</i>
			<b>{{counts}}</b>
			<i @click="add">+</i>
		</div>
		<i v-show="flag" @click="changshow"></i>
	</div>
	
</template>

<script>

export default{
	data(){
		return{
			flag:true,
			datas:[],
			count: 1,
		}
	},
	components:{
		
	},
	mounted(){
		
	},
	methods:{
		changshow(e){
			this.count = 1;
			this.$store.commit('SHOP_LIST',{Id:this.Id,counts:this.count,price:this.$store.state.shoppinglist.list[this.Id].price})//将选中的商品存入
			console.log(this.$store.state.shoppinglist.shoplist)
			this.flag = false;
		},
		minus(){
			if(this.count<=0){
				this.count = 0;
			}else{
				for(let i=0;i<this.$store.state.shoppinglist.shoplist.length;i++){
					if(this.$store.state.shoppinglist.shoplist[i].id == this.Id){
						this.count = --this.$store.state.shoppinglist.shoplist[i].count;
						if(this.$store.state.shoppinglist.shoplist[i].count==0){
							
							this.flag = this.$store.state.shoppinglist.shoplist[i].count<=0?true:false;
							this.$store.state.shoppinglist.shoplist.splice(i,1);
						}
						
					}
				}
			}
		},
		add(){
			for(let i=0;i<this.$store.state.shoppinglist.shoplist.length;i++){
				if(this.$store.state.shoppinglist.shoplist[i].id == this.Id){
					this.count = ++this.$store.state.shoppinglist.shoplist[i].count;
				}
			}
		}
	},
	props:["Id"],//商品的索引
	computed:{
		counts(){
			for(let i=0;i<this.$store.state.shoppinglist.shoplist.length;i++){
				if(this.$store.state.shoppinglist.shoplist[i].id == this.Id){
					return this.$store.state.shoppinglist.shoplist[i].count;
				}
			}
			/*return this.$store.state.shoppinglist.shoplist[this.Id].count*/
		},
		flags(){
			return this.flag = this.$store.state.shoppinglist.shoplist[i].count<=0?true:false;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopBtn{
	width: 50%;
	text-align: right;
}
.shopcar{
	width: 100%;
	display: flex;

}
.shopcar i{
	display: inline-block;
	font-style: normal;
	width: .4rem;
	height: .4rem;
	background: red;
	border-radius: 50%;
	text-align: center;
	line-height: .4rem;
	color: #fff;
}
.shopcar b{
	font-weight: normal;
	padding: 0 .2rem;
}
.shopBtn>i{
	display: inline-block;
	width: .6rem;
	height: .6rem;
	border-radius: 50%;
	background: #e50011 url(https://m.lechun.cc/images/icon/icon-sku-cart.png) center center no-repeat;
	background-size: .35rem .33rem;
}
</style>

