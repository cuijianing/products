<template>
  <div class="detail">
  	<div class="detail_wrap">
  		<p><img :src="this.datas.picDetailBig" alt=""></p>
  		<div class="detail_container">
  			<div class="product-title-wrap">
  				<div class="product-detail">
  					<h2>{{this.datas.productName}}</h2>
  					<p><span>鲜果铺底</span></p>
  				</div>
  				<div class="product-price">{{this.datas.price}}元/盒</div>
  			</div>
  			<div class="product-intro">
  				<div class="store-info">
  					<p>净含量: <b>135g/盒</b></p>
  					<p>净含量: <b>135g/盒</b></p>
  					<p>储藏条件: <b>请于2－6°C冷藏保存</b></p>
  				</div>
  				<div class="choose">
  					<i>加入购物车</i>
  				</div>
  			</div>
  			<div class="product-intro-long">
  				<h4>产品介绍:</h4>
  				<p>挑选优质水果，进行脱皮切丁，并采用HPP超高压技术对水果进行杀菌处理，超高压使得有害微生物无法生存，相比热加工可以大大减少风味的损失并保护水果的色泽，最大程度的保留了水果的原始口感和其营养成分。 并搭配着零脂肪的基料，总体热量每100克要小于80千卡呢～</p>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default{
	data(){
		return{
			flag:true,
			datas:[],
			id:this.$route.params.id
		}
	},
	mounted(){
		this.datas = this.$store.state.shoppinglist.list[this.id];
		console.log(this.$route.params.id)
		console.log(this.datas.picDetailBig)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{
	width: 100%;
	background: #ccc;
	height: auto;
}
.detail_wrap{
	width: 100%;
}
.detail_wrap p {
	width: 100%;
}
.detail_wrap p img{
	width: 100%;
}
.detail_container{
	width: 90%;
	height:  auto;
    position: relative;
    margin: -1.18rem auto .42rem;
    background: #ffffff;
    border-radius: .1rem;
}
.product-title-wrap{
	padding: .3rem;
	display: flex;
}
.product-detail{
	flex:1;
}
.product-detail h2{
	font-size: .36rem;
    color: #222222;
}
.product-detail p{
	margin-top: .1rem;
    color: #e50011;
    line-height: .44rem;
}
.product-price{
	color: #e50011;
    font-size: .32rem;
    margin-top: .1rem;
}
.product-intro{
	display: flex;
	justify-content: space-between;
	padding:.3rem;
}
.store-info{
	border-top: 1px solid #bcbcbc;
    border-bottom: 1px solid #bcbcbc;
    padding: .1rem .15rem .1rem 0.05rem;
    -webkit-box-flex: 1;
}
.store-info p {
	line-height: .44rem;
    font-size: .22rem;
}
.store-info p b{
	font-weight: normal;
    color: #666666;
}
.choose{
	position: relative;
    width: 1.6rem;
    margin-left: .4rem;
}
.choose i {
	display: inline-block;
	width: 2rem;
    height: .6rem;
    background: #e50011;
    color: #ffffff;
    text-align: center;
    line-height: .6rem;
    border-radius: .1rem;
    font-style: normal;
    position: relative;
    right: .42rem;
    top: 0;
    font-size: .22rem;
}
.product-intro-long{
	padding: .3rem;
}
.product-intro-long h4{
	color: #979797;
	font-size: .26rem;
	font-weight: normal;
}
.product-intro-long p{
	line-height: .4rem;
	text-align: justify;
	font-size: .26rem;
	margin: .16rem 0 .32rem;
}
</style>

