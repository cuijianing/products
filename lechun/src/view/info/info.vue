
<template>
  <div class="info">
  	<router-link tag="div" to="/address" class="info-address"><p>您还没有填写配送地址,请点击添加</p><em class="icon-enter"></em></router-link>
   
    <div class="info-date">
    	<div class="content-data-show">配送日期</div>
    	<div class="content-data-select"><p>请选择配送时间</p><em class="icon-enter"></em></div>
    </div>
    <div class="info-coupon">
    	<div class="content-data-show">优惠券</div>
    	<div class="content-data-select"><p>￥0.00</p><em class="icon-enter"></em></div>
    </div>
    <div class="info-balance">
    	<div class="content-data-show"><p>余额</p><b>￥2.00</b></div>
    	<div :class="{'switch-on':flag,'switch-off':!flag}" @click="switchs">
    		<b></b>
    	</div>
    </div>
    <div class="info-footer">
    	<div class="sum-price">实付<p>￥166.00</p></div>
    	<div class="pay-submit">立即支付</div>
    </div>
    <div class="product-container">
    	<ul>
    		<li v-for="(item,index) in this.$store.state.shoppinglist.shoplist">
    			<img src="http://resource2.lechun.cc/proImgStorage/3197559187037236019_O.jpg" alt="">
    			<div>
    				<p>紫薯黑米三三三倍酸奶</p>
    				<b>紫粉色的 饱腹粗粮</b>
    			</div>
    			<span>¥{{item.price}} x {{item.count}} 盒</span>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default{
	data(){
		return{
			phone:null,
			checkCode:null,
			flag:true
		}
	},
	components:{
		
	},
	methods:{
		switchs(){
			this.flag = !this.flag;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
	width: 100%;
	height: auto;
}
.info-address{
	padding: 0 15px;
	height: .75rem;
	border-bottom: 1px solid #ccc;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.info-address p{

}
.icon-enter{
	width: .16rem;
	height: .16rem;
	display: inline-block;
	border-top: 1px solid #999999;
	border-right: 1px solid #999999;
	-webkit-transform: rotate(45deg);
}
.info-date{
	height: 1rem;
	border-bottom: 8px solid #f2f2f2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
}
.content-data-select{
	display: flex;
	align-items: center;
}
.content-data-select p{
	font-size: .2rem;
}
.info-coupon{
	height: 1rem;
	border-bottom: 1px solid #f2f2f2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
}
.info-balance{
	height: 1rem;
	border-bottom: 1px solid #f2f2f2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
}
.content-data-show{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.content-data-show b{
	font-weight: normal;
	color: #999999;
	padding-left: 15px;
}
.switch-on{
		display: block;
	    width: 1.2rem;
	    height: .6rem;
	    background-color:  #e50011;
	    border-radius: .3rem;
	    position: relative;
}
.switch-on b{
	width: .52rem;
	height: .52rem;
	display: block;
	background-color: #ffffff;
	border-radius: .26rem;
	position: absolute;
	top: .04rem;
	right: .04rem;
}
.switch-off{
	display: block;
    width: 1.2rem;
    height: .6rem;
    background-color: #e6e6e6;
    border-radius: .3rem;
    position: relative;
}
.switch-off b{
	width: .52rem;
	height: .52rem;
	display: block;
	background-color: #ffffff;
	border-radius: .26rem;
	position: absolute;
	top: .04rem;
	left: .04rem;
}
.info-footer{
	width: 100%;
	height: 1rem;
	border-top: 1px solid #f2f2f2;
	position: fixed;
	bottom: 0;
	display: flex;
}
.sum-price{
	width: 45%;
	height: 100%;
	line-height: 1rem;
	display: flex;
	justify-content: center;
	text-align: center;
}
.sum-price p{
	font-size: .36rem;
    margin-left: .14rem;
    color: #666666;
    font-weight: normal;
    line-height: 1rem;
}
.pay-submit{
	width: 55%;
	display: flex;
    height: 1rem;
    display: block;
    background-color: rgba(153,153,153,1);
    color: #ffffff;
    line-height: 1rem;
    text-align: center;
    font-size: .32rem;
}
.product-container{
	width: 100%;
}
.product-container ul{
	width: 100%;
}
.product-container ul li{
	width: 90%;
	padding: .22rem .3rem .26rem 0;
	border-bottom: 1px solid #f5f5f5;
	height: 1.5rem;
	float: right;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.product-container ul li img{
	height: 100%;
}
.product-container ul li div b{
	font-size: .24rem;
    line-height: .44rem;
    color: #999999;
    font-weight: normal;
}
</style>

