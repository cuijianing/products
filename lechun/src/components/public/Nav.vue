<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index) in this.arr" :class="{'active':value==index}" @click="changeStyle(index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr:["单盒自选","纤巧装","家庭装","福利社"],
      value:0
    }
  },
  components:{
    
  },
  methods:{
    changeStyle(index){
      this.value = index;
    }
  }
}
</script>

<style>
.nav{
  width: 100%;
  height: 1rem;
  box-shadow: 0 2px 4px 0 rgba(63,67,89,.1);
}
.nav ul{
  display: flex;
}
.nav ul li{
  width: 25%;
  height: 100%;
  line-height: 1rem;
  font-size: .26rem;
  text-align: center;
}
.active{
  font-size: .3rem!important;
  color: #e50011;
  position: relative;
}
.active:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: red;
}
</style>
