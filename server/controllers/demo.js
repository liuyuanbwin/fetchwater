var sqltool = require('../tools/sqlHelper.js')
module.exports =async ctx => {
  // ctx.state.data = {
  //   msg:'hello world'
  // }
  var result = await sqltool.queryMobile('222')
  ctx.state.data = result
}