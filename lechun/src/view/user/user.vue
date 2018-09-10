<template>
  <div class="user-info-wrap">
  	<div class="person-info">
  		<div class="avator"></div>
  		<p>{{this.$route.query.phone}}</p>
  		<div class="vip-entry">
  			<span>会员最高享9折 ❯</span>
  			<a href="">点击进入会员中心</a>
  		</div>
  	</div>
  	<div class="pay-section">
  		<div class="pay-title">
  			<h3>我的订单</h3>
  			<a href="">查看全部订单 <i></i></a>
  		</div>
  		<ul>
  			<li>
  				<a href="">待付款</a>
  			</li>
  			<li>
  				<a href="">待付款</a>
  			</li>
  			<li>
  				<a href="">待付款</a>
  			</li>
  			<li>
  				<a href="">待付款</a>
  			</li>
  		</ul>
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
	mounted(){
		console.log(this.$route.query.phone)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-info-wrap{
	width: 100%;
}
.person-info{
	display: flex;
	justify-content: space-between;
	align-items: center;
    background: #1e1f21;
    padding: 30px 0 26px 0;
    line-height: 1rem;
    text-align: left;
}
.avator{
	width: 1rem;
	height: 1rem;
	background: #000;
	border: 2px solid #666;
	margin-left: 20px;
	border-radius: 50%;
}
.person-info p{
	color: #fff;
	font-size: .32rem;
	position: relative;
}
.person-info p::after{
	background: url(https://m.lechun.cc/images/member/icon-arrow-r.png) no-repeat;
    background-size: contain;	
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    right: -20px;
    top: 46%;
    margin-top: -6px;
}
.vip-entry{
	margin-left: 50px;
}
.vip-entry span{
	background: #e50011;
	display: block;
	color: #ffffff;
	font-size: .22rem;
	width: 2rem;
	height: .6rem;
	line-height: .6rem;
	overflow: hidden;
	text-align: center;
	border-bottom-left-radius: 2rem;
	border-top-left-radius: 2rem;
}
.vip-entry a {
	font-size: .22rem;
	text-decoration: none;
    color: #fff9d4;
    display: block;
    line-height: 32px;
    position: static;
    text-align: center;
}
.pay-section{
	width: 100%;
}
.pay-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
}
.pay-title a{
	color: #bababa;
	text-decoration: none;
}
.pay-section ul{
    border-top: 1px solid #f1f1f1;
    height: 1.5rem;
    display: flex;
    border-bottom: 10px solid #f1f1f1;
}
.pay-section ul li{
	width: 25%;
	display: flex;
    text-align: center;
    font-size: 0.28rem;
    height: 100%;
    color: #777777;
    position: relative;
    background-repeat: no-repeat;
    background-size: .5rem .5rem;
    background-position: center 0.3rem;
}
.pay-section ul li a{
	width: 100%;
	text-align: center;
	line-height: 2rem;
	font-size: .22rem;
	text-decoration: none;
	color: #494949;
}
.pay-section ul li:nth-child(1){
	background-image: url(https://m.lechun.cc/images/member/icon-status-1.png);
}
.pay-section ul li:nth-child(2){
	background-image: url(https://m.lechun.cc/images/member/icon-status-2.png);
}
.pay-section ul li:nth-child(3){
	background-image: url(https://m.lechun.cc/images/member/icon-status-3.png);
}
.pay-section ul li:nth-child(4){
	background-image: url(https://m.lechun.cc/images/member/icon-status-4.png);
}
</style>

