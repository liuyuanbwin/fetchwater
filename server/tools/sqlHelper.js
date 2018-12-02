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

//查询是否有电话
let queryMobile = function(wxId){
  let _sql = "select * from userInfo where wxId = ?"
  var result = row(_sql, wxId)
  return result
}

//查询是否有电话
let checkBindTel = function(wxId){
  let _sql = "select * from bindTel where openid = ?"
  var result = row(_sql, wxId)//
  return result
}

module.exports = {
  queryMobile,
  checkBindTel
}