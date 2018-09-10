<template>
  <div class="content">
    <WrapHeader></WrapHeader>
    <WrapContent></WrapContent>
  </div>
</template>

<script>
import WrapHeader from "./child/wrap_header.vue"
import WrapContent from "./child/wrap-content.vue"
export default{
	data(){
		return{
			
		}
	},
	components:{
		WrapHeader,
		WrapContent
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

