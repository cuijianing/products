<template>
  <div class="enter_wrap">
    <dl>
    	<dt></dt>
    	<dd>
    		<h5>会员专享</h5>
    		<p><b>福利</b>发放中</p>
    	</dd>
    </dl>
    <dl>
    	<dt></dt>
    	<dd>
    		<h5>会员专享</h5>
    		<p><b>福利</b>发放中</p>
    	</dd>
    </dl>
    <dl>
    	<dt></dt>
    	<dd>
    		<h5>会员专享</h5>
    		<p><b>福利</b>发放中</p>
    	</dd>
    </dl>
  </div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enter_wrap{
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-around;
	padding-bottom: .2rem;
}
.enter_wrap dl{
	width: 30%;
	height: auto;

}
.enter_wrap dl dt{
	padding-bottom: .1rem;
	width: .8rem;
	height: .8rem;
	background: url(https://m.lechun.cc/images/index/index-icon-vip.png) no-repeat;
	background-size: 100% auto;
	margin: 0 auto;
}
.enter_wrap dl dd{
	font-size: .2rem;
	text-align: center;
}
.enter_wrap dl dd h5{
	font-weight: normal;
}
.enter_wrap dl dd p b{
	font-weight: normal;
	color: red;
}
</style>

