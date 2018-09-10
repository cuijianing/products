const mysql = require("mysql");
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'lechun_db',
    port:'3306'
});
conn.connect((error)=>{
    if(error){
        console.log("失败")
    }else{
        console.log("数据库连接成功")
    }
})

module.exports = conn;