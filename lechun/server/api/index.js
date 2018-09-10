var express = require('express');
var router = express.Router();
var mysql = require("./mysql.js");
var searchSQL = require("./utils/searchSQL.js");

/* GET home page. */
router.get('/login', function(req, res, next) {//前面添加过/api所以就是/api/login路径
  	var randNum = 0;
  	do{
  		randNum = parseInt(Math.random()*10000)
  	}
  	while(randNum<1000)
  	let phone = req.query.phone;
  	res.cookie("phone",phone)
  	res.cookie("randNum",randNum)
  	res.json({//返回给前端
  		code:1,
  		randNum,
  		main:req.query.phone//请求地址栏的phone
  	})
});

router.post('/user', async function(req, res, next) {//前面添加过/api所以就是/api/login路径
  	if(req.cookies.randNum===req.body.checkCode){
  		var userInfo = await searchSQL.userInfo(req.body.phone);
  		res.json({
  			code:1,
  			msg:"登录成功",
  			userInfo
  		})

  	}else{
  		res.json({
  			code:2,
  			msg:"验证码错误,请重新输入"
  		})
  	}
});

module.exports = router;
