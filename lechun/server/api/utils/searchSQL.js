let conn = require("../mysql.js");

const userInfo = (phone) =>{
	return new Promise(function(resolve,reject){
		const sql = "select * from user where `mobile` =?";//?相当于下个参数没有?就表示没有下个参数
		conn.query(sql,[phone],(err,res)=>{
			console.log(res);//符合phone条件的所有数据，没有符合就会返回一个空数组
			if(res.length){
				resolve(res)
			}else{
				conn.query("insert into user(mobile) value("+phone+")",(err,res)=>{
					resolve(res)
				})
			}
		})
	})
}

module.exports = {userInfo}
