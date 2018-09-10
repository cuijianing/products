import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Host from "../view/host/Host.vue"
import Login from "../view/login/login.vue"//登录页面
import User from "../view/user/user.vue"//用户页面
import Detail from "../view/detail/detail.vue"//详情页
import Info from "../view/info/info.vue"
import Address from "../view/add_address/address.vue"//添加地址

const router = new Router({
  routes: [
    {
	    path: '/',
	    name: 'Host',
	    component: Host
    },{
    	path: '/login',
    	name: 'Login',
    	component:Login
    },{
    	path: '/user',
    	name: 'User',
    	component:User
    },{
        path:"/detail/:id",
        name:"Detail",
        component:Detail
    },{
        path:"/info",
        name:"info",
        component:Info
    },{
        path:"/address",
        name:"address",
        component:Address
    }
  ]
})
export default router


const cludeRouter = ["Host","Login"]
router.beforeEach((to,from,next)=>{
	if(cludeRouter.indexOf(to.name)!==-1){
		next();
	}
	if(!window.localStorage.getItem('user')){
		next("/login")
	}else{
		next()
	}
})




/*vue-router是专门针对于vue提供的单页面路由创建的插件
什么是单页面应用?
只有一个页面的应用，但是可以有多个路由地址。正常情况下只要是a连接
而单页面应用只有第一次访问或者强制刷新的时候才会想服务端发起请求，其他情况则不会这是由于单页面路由利用前端页面的几个特性
1.hash
hash可以改变url地址不会像后端发出请求，而且留有历史记录，通过hashchange事件

2.history
刷新页面不会触发hashchange事件


单页面应用的特点
改变url地址，
不会像后端发起请求，并且可以重新渲染页面，达到页面异步更新的效果，
而且会留有历史记录

在vue中结合history，hash实现了路由跳转的封装




什么是路由?
路由的概念本身是后端,后端通过定义路由,指定渲染的页面,浏览器通过url地址访问，服务端接受到请求，给客户端返回需要渲染的内容

一个url地址
http://www.baidu.com/api/getlist
http://协议  www.baidu.com域名  /api/getlist路由

一个路由需要的内容（地址，发出请求的容器，返回对应的内容）
一个路由对应一个页面

router实例挂载到vue根实例上，在组件中就可以使用$router访问到router实例

路由的跳转控制
使用组件router-link  使用js方法

路由拦截  








*/





