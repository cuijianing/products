<template>
  <div class="add_address">
    <p>
      <span class="speed">最快</span>
      <span class="address_to">送至</span>
      <b>请选择</b>
      <i>></i>
    </p>
  </div>
</template>

<script>
export default {
  data(){
  	return {

  	}
  },
  components:{
  	
  }
}
</script>

<style>
.add_address{
  width: 100%;
  height: .5rem;
}
.add_address p{
  width: 40%;
  height: 100%;
  font-size: .26rem;
  line-height: .5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.add_address p span{
  padding-right: .2rem;
}
.address_to{
  color: #999;
}
.add_address p b{
  font-weight: normal;
}
.add_address p i{
  font-style: normal;
}
</style>
