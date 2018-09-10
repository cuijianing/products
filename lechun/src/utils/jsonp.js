//发送到页面数据
const jsonp = (url="",data={})=>{//利用静态资源进行跨域,静态资源不涉及跨域
	return new Promise((resolve,reject)=>{
		try{//捕捉事件状态
			const script = document.createElement("script");//动态创建script
			const fnName = 'a'+ ( +new Date());
			window[fnName] = (res) =>{
				resolve(res);
				document.body.removeChild(script);//回收过期的script
				window[fnName] = null;//回收全局变量
			}
			script.src = url + "?callback=" + fnName;
			document.body.appendChild(script);
		}catch(err){
			reject(err);
		}
		
	})
	
}

export default jsonp







