var sqltool = require('../tools/sqlHelper')
const {message:{checkSignature }} = require('../qcloud')

async function get (ctx, next) {
  console.log('get ' + 'bindTel <<' + JSON.stringify(ctx.query))
  let result = await sqltool.checkBindTel(ctx.query.openId)
  console.log('result ' + JSON.stringify(result))
  ctx.state.data = result
}

async function post (ctx, next) {
    console.log('post ' + 'bindTel <<' + JSON.stringify(ctx.request.body))
    let result = await sqltool.checkBindTel(ctx.request.body.openId)
    console.log('result ' + JSON.stringify(result))
    ctx.state.data = result
}
  
module.exports = {
    post,
    get
}