<template>
  <div class="login">
    <p><input type="text" v-model="phone" placeholder="phone"></p>
    <p><input type="text" v-model="checkCode" placeholder="验证码"></p>
    <button @click="send">发送验证码</button>
    <button @click="login">登录</button>
      <group>
	    	<cell-box is-link>
	      <!-- anything -->
	    	</cell-box>
  		</group>
  </div>
</template>

<script>
import { CellBox,Group } from 'vux'

export default{
	data(){
		return{
			phone:null,
			checkCode:null
		}
	},
	components:{
		CellBox,
		Group
	},
	methods:{
		send(){
			fetch("/api/login?phone="+this.phone,{
				credentials: 'include'
			}).then(res=>{
				res.json().then(data=>{
					console.log(data)
				})
			})
		},
		login(){

			fetch("/api/user",{
                    method:'POST',//post方法
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body:'phone='+this.phone+'&checkCode='+this.checkCode,
                    credentials: 'include'//允许储存cookie
            }).then(res=>{
            	res.json().then(data=>{
            		if(data.code==1){
            			window.location.href=`http://localhost:8080/#/user?phone=${data.userInfo[0].mobile}`
            		}
            	})
            })
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

