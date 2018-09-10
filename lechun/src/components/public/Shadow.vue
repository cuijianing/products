<template>
  <div class="shadow" @click.self="cancelShadow">
    <div class="showBox">
    	<div class="tit">
    		<a href="javascript:;"></a>
    		<span>小伙伴，选购商品满90元起送噢</span>
    	</div>
    	<div class="shoplist">
    		<ul>
    			<li v-for="(item,index) in this.$store.state.shoppinglist.shoplist">
    				<p>{{item.name}}</p>
    				<div class="shopcar">
    					<i @click="minus(index)">-</i>
    					<b>{{item.count}}</b>
    					<i @click="add(index)">+</i>
    				</div>
    			</li>
    		</ul>
    	</div>
    	<div class="shoppings">
        	<div class="shop_content">
    			<p>{{this.sumcount}}盒商品</p>
    			<p><b>合计：</b>￥<em>{{Math.floor(sumMoney)}}</em><span>(已省0.00元)</span></p>
    		</div>
    		<router-link tag="span" to="/info">还差{{parseInt(90-sumMoney)}}元起送</router-link>
    	</div>
    </div>
  </div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	components:{
		
	},
	methods:{
		cancelShadow(){
			this.$emit("input",false);
			console.log(this.$store.state.shoppinglist.shoplist)
		},
		minus(index){
			if(this.$store.state.shoppinglist.shoplist[index].count<=0){
				this.$store.state.shoppinglist.shoplist[index].count=0;
			}else{
				this.$store.state.shoppinglist.shoplist[index].count--;
				if(this.$store.state.shoppinglist.shoplist[index].count==0){
					this.$store.state.shoppinglist.shoplist.splice(index,1);
				}
					/*console.log(this.$store.state.shoppinglist.shoplist[i].id)*/
			}
			
		},
		add(i){
			this.$store.state.shoppinglist.shoplist[i].count++;
		}
	},
	mounted(){
		console.log(this.$store.state.shoppinglist.shoplist)
	},
	computed:{
		sumcount(){//计算总数量
			let sum = 0;
			for(let i=0;i<this.$store.state.shoppinglist.shoplist.length;i++){
				sum+=this.$store.state.shoppinglist.shoplist[i].count
			}
			return sum
		},
		sumMoney(){//计算总价钱
			let money = 0;
			for(let i=0;i<this.$store.state.shoppinglist.shoplist.length;i++){
				money+=this.$store.state.shoppinglist.shoplist[i].count*this.$store.state.shoppinglist.shoplist[i].price
			}
			return money
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shadow{
	position: fixed;
	z-index: 102;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.7);
}
.showBox{
	position: absolute;
	height: auto;
    width: 96%;
    left: 2%;
    bottom: 2%;
    background: #FFF;
    border-radius: .1rem;
    z-index: 999;
    font-size: .28rem;
}
.tit{
	width: 100%;
	height: 1rem;
	border-bottom: 1px solid #f5f5f5;
}
.tit a{
	position: absolute;
	left: 0;
	top: .18rem;
	width: .88rem;
	height: .6rem;
	background: url(https://m.lechun.cc/images/alert_cart.png?v=1) no-repeat;
	background-size: cover;
	margin-top: 0;
	overflow: hidden;
	z-index: 999;
}
.tit span{
	float: right;
    line-height: 1rem;
    height: 1rem;
    overflow: hidden;
    padding-right: .2rem;
}
.shoppings{
	padding: .2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.shoppings>span{
	padding: .1rem;
	border-radius: 5px;
	color: #fff;
	background: #ccc;
}
.shoplist{
	width: 100%;
	
}
.shoplist ul li{
	line-height: 1rem;
	color: #979797;
	padding: 0 .2rem;
	height: 1rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #f5f5f5;
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

