<template>
  <div class="banner_wrap">
    <p v-for="(item,index) in this.arr">{{item}}</p>
  </div>
</template>

<script>
export default{
	data(){
		return{
			arr:[
				"120万口碑推荐",
				"五星级酒店的选择",
				"超模也爱的明星酸奶"
			]
		}
	},
	components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner_wrap{
	width: 100%;
	height: .5rem;
	font-size: .2rem;
	display: flex;
	justify-content: space-around;
	line-height: .5rem;
}
</style>

