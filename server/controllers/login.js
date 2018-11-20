// 登录授权接口
var sqltool = require('../tools/sqlHelper.js')
module.exports = async (ctx, next) => {
    // 通过 Koa 中间件进行登录之后
    // 登录信息会被存储到 ctx.state.$wxInfo
    // 具体查看：

    // var result = await sqltool.row(ctx.rex.wxId);
    // return result;

    
    if (ctx.state.$wxInfo.loginState) {
        ctx.state.data = ctx.state.$wxInfo.userinfo
        ctx.state.data['time'] = Math.floor(Date.now() / 1000)
    }
    
}
