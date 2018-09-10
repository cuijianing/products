<template>
  <div class="banner swiper-container">
    <ul class="swiper-wrapper">
    	<li class="swiper-slide">
    		<img src="http://resource2.lechun.cc/imgStorage/3192666929356045256.png" alt="">
    	</li>
    </ul>
  </div>
</template>

<script>
import Swiper from "swiper"

export default{
	data(){
		return{

		}
	},
	components:{
		
	},
	mounted(){
		new Swiper(".banner",{
			loop:true,
			autoplay:true
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
	width: 100%;
	margin-top: 1.5rem;
	z-index:-1;
	position: relative;
}
.banner ul{
	display: flex;
}
.banner ul li{
	width: 100%;
}
.banner ul li img{
	width: 100%;
	display: block;
}
</style>

