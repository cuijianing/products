<template>
  <div class="wrap-content">
	<ul>
		<li v-for="(item,index) in this.datas" @click="detail(index)">
			<router-link :to="{path:`/detail/${index}`}" tag="span">
				<div class="shopping">
					<dl>
						<dt><img :src="item.picSmall" alt=""></dt>
						<dd>
							<p>{{item.proTitle}}</p>
							<span>{{item.proSummary}}</span>
						</dd>
					</dl>
				</div>
			</router-link>
				<div class="price">
					<p>￥{{item.price}}/盒</p>
					<ShopButton :Id="index"></ShopButton>
				</div>
		</li>
	</ul>
  </div>
</template>

<script>
import axios from "axios"
import ShopButton from "../../shopButton.vue"
export default{
	data(){
		return{
			flag:true,
			datas:[],
			id:123
		}
	},
	components:{
		ShopButton
	},
	methods:{
		touch(index){
			console.log(index)
		},
		detail(index){
			
		}
	},
	mounted(){

		axios.get("/api/list").then(res=>{
			this.datas = res.data[0].items;
			this.$store.state.shoppinglist.list = res.data[0].items;
			
		})

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-content{
	width: 100%;
	height: auto;
	
}
.wrap-content ul {
	display: flex;
	flex-wrap: wrap;
	overflow-x: hidden;
}
.wrap-content ul li{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 50%;
	box-sizing: border-box;
	border-right: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
}
.shopping{
	width: 100%;
}
.shopping dl{
	width: 100%;
	padding: .2rem 0;
}
.shopping dl dt{
	width: 60%;
	margin: 0 auto;
}
.shopping dl dt img{
	width: 100%;
}
.shopping dl dd{
	width: 100%;
	padding-left: .5rem;
}
.shopping dl dd p{
	width: 100%;
	text-align:left;
	font-size: .26rem;
}
.shopping dl dd span{
	width: 80%;
	height: 30px;
	display: inline-block;
	text-align: left;
	font-size: .2rem;
	color: #666;
}
.price{
	padding: .2rem .3rem;
	display: flex;
	justify-content: space-between;

}
.price p{
	font-size: .24rem;
	color: #e50011;
	line-height: .5rem;
}


</style>

