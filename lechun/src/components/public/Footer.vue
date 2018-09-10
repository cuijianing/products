<template>
  <div class="footer">
    <ul>
    	<li><p></p><router-link tag="span" to="/">主页</router-link></li>
    	<li @click="flag=true"></li>
    	<li><p></p><router-link tag="span" to="/login">我的</router-link></li>
    </ul>
    <transition name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <Shadow v-show="flag" v-model="flag"></Shadow>
    </transition>
  </div>
</template>

<script>
import Shadow from "./Shadow.vue"
import animate from "animate.css"
export default{
	data(){
		return{
			flag:false
		}
	},
	components:{
		Shadow
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
	width: 100%;
	height: 1rem;
	position: fixed;
	bottom: 0;
	background: #fafafa;
	border-top: 1px solid #edebeb;
}
.footer ul{
	display: flex;
	justify-content: space-around;
}
.footer ul li{
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
}
.footer ul li:nth-of-type(2){
	width: 20%;
    height: 1.5rem;
    background: url(https://m.lechun.cc/images/member/f-cart.png) center no-repeat;
    background-size: 1.2rem 1.2rem;
   	color: #101010;
   	position: absolute;
   	bottom: -2px;
}
.footer ul li p{
	width: 100%;
	height: .7rem;
	background: url(https://m.lechun.cc/images/member/f-home.png) center  no-repeat;
	background-size: .5rem .5rem;
	color: #101010;
}

.footer ul li span{
	font-size: .22rem;
}
</style>

