<template>
  <div class="host">
    <Header></Header>
    <Banner></Banner>
    <Footer></Footer>
    <Advertise></Advertise>
    <Contents></Contents>
  </div>
</template>

<script>
import Header from "../../components/public/Header.vue"
import Banner from "../../components/public/Banner.vue"
import Footer from "../../components/public/Footer.vue"
import Advertise from "../../components/public/advertise/index.vue"//广告组件
import Contents from "../../components/public/content/index.vue"

import jsonp from "../../utils/jsonp.js"//跨域
export default {
  data(){
  	return {

  	}
  },
  components:{
  	Header,
  	Banner,
  	Footer,
  	Advertise,
  	Contents
  },
  created(){
    console.log(this.$children)
  	/*jsonp("http://localhost:3000/api/user/info").then((data)=>{//利用静态资源进行跨域
  		console.log(data,"成功")
  	},()=>{
  		console.log("失败")
  	})*/
  	/*fetch("http://localhost:3000/api/user/info").then((res)=>{
  		return res.json()
  	}).then((data)=>{
  		console.log(data)
  	})*/
  	/*fetch("/api/user/info").then((res)=>{//代理
  		return res.json()
  	}).then((data)=>{
  		console.log(data)
  	})*/
  	/*fetch("/api/login",{
  		method:"POST",
  		body:JSON.stringify({
  			phone:"15011444709",
  			password:"1"
  		}),
  		headers:{
  			"Content-Type": "application/json"
  		}
  	}).then((res)=>{
      console.log(res.json())
  		return res.json() 
  	}).then((data)=>{
  		
  	})*/
  }
}
</script>

<style>

</style>
