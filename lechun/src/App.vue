<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html,body,#app{
	width: 100%;
	height: 100%;
	font-size: .28rem;
}
*{
	margin: 0;
	padding: 0;
}
ul,ol,li{
	list-style: none;
}
</style>
