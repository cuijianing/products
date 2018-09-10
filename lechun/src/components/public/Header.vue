<template>
  <div class="header">
    <AddressInto></AddressInto>
    <Nav></Nav>
  </div>
</template>

<script>
import AddressInto from "./Add_address.vue"
import Nav from "./Nav.vue"
export default{
	data(){
		return{

		}
	},
	components:{
		AddressInto,
		Nav
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	width: 100%;
	background: #fff;
	height: auto;
	position: fixed;	
	top: 0;
	z-index: 0;
}
</style>

