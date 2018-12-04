const mysql = require('mysql')
const config = require('../config.js')

var pool = mysql.createPool({
  connectionLimit : 50,
  host :config.mysql.host,
  port:config.mysql.port,
  user :config.mysql.user,
  password :config.mysql.pass,
  database : config.mysql.db,
  multipleStatements : true
});

var row = (sql, ...params ) => {
  return new Promise(function(resolve, reject){
    pool.getConnection(function(err, connection){
      if(err){
        reject(err);
        return;
      }
      connection.query(sql, params ,function(error, res){
        connection.release();
        if(error){
          reject(error);
          return;
        }
        resolve(res);
      });
    });
  });
};

//query bond tel
let queryMobile = function(wxId){
  let _sql = "select * from userInfo where wxId = ?"
  var result = row(_sql, wxId)
  return result
}

//query bond tel
let checkBindTel = function(wxId){
  let _sql = "select * from bindTel where openid = ?"
  var result = row(_sql, wxId)//
  return result
}

//bind tel
let bindTel = function(openId,tel){
  console.log('insert into openID ' + openId + 'tel ' + tel)
  let _sql = "insert into bindTel set openId=?,tel=?;"
  var result = row(_sql,openId, tel)
  return result
}

module.exports = {
  queryMobile,
  checkBindTel,
  bindTel
}