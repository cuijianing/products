
<template>
  <div class="address">
    <ul>
    	<li class="username">
    		<span>联系人</span>
    		<input type="text" placeholder="请输入姓名">
    	</li>
    	<li class="phone">
    		<span>手机号</span>
    		<input type="text" placeholder="请输入电话">
    	</li>
    	<li class="city">
    		<span>城市</span>
    		<input type="text" placeholder="请选择省市区">
    	</li>
    	<li class="get-address">
    		<span>收货地址</span>
    		<input type="text" placeholder="请输入详细地址">
    	</li>
    </ul>
    <div class="label-wrap">
    	<p>选择地址标签</p>
    	<ul>
    		<li>住宅</li>
    		<li>公司</li>
    		<li>学校</li>
    		<li>家人</li>
    		<li>朋友</li>
    		<li>其他</li>
    	</ul>
    </div>
    <div class="save">保存</div>
    <Mapcity></Mapcity>
  </div>
</template>

<script>
import Mapcity from "../../components/public/mapCity.vue"
export default{
	data(){
		return{
			
		}
	},
	components:{
		Mapcity
	},
	methods:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.address{
	padding-left: .3rem;
}
.address>ul{
	width: 100%;
}
.address>ul li{
	width: 100%;
	height: 1rem;
	border-bottom: 1px solid #e7e7e7;
	display: flex;
	align-items: center;
}
.address ul li>span{
	color: #333333;
    font-size: .28rem;
    display: block;
}
.username input{
	font-size: .28rem;
    height: .90rem;
    display: flex;
    display: block;
}
input{
	margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: 0 0;
    padding-left: .30rem;
    color: #898989;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
}
.label-wrap{
	width: 100%;
}
.label-wrap  p{
	padding:.3rem 0;
}
.label-wrap ul{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

}
.label-wrap ul li{
	display: block;
	color: #b2b2b2;
	width: 30%;
	-webkit-box-flex: 1;
	line-height: .68rem;
	text-align: center;
	border: 1px solid #b2b2b2;
	border-radius: .35rem;
	margin-bottom: .20rem;
}
.save{
	text-align: center;
	display: block;
	padding: 0;
	background: #c9c9c9;
	width: 6.90rem;
	line-height: .88rem;
	color: #ffffff;
	margin: .20rem 0;
	font-size: .36rem;
}
</style>

