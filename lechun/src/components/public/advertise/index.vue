<template>
  <div class="advertise">
    <BannerWrap></BannerWrap>
    <EnterWrap></EnterWrap>
  </div>
</template>

<script>
import BannerWrap from "./child/Banner_wrap.vue"
import EnterWrap from "./child/Enter_wrap.vue"
export default{
	data(){
		return{
			
		}
	},
	components:{
		BannerWrap,
		EnterWrap
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.advertise{
	width: 100%;
	height: auto;
}
</style>

