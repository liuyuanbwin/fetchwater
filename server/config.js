
const qcloudDB = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: 'wx93341736c68e3616',
    char: 'utf8mb4'
}
const x220DB = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: '',
    char: 'utf8mb4'
}
const mbpDB = {
    host:'localhost',
    port:3306,
    user:'root',
    db:'cAuth',
    pass:'wolaile',
    char:'utf8mb4'
}
const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx93341736c68e3616',

    // 微信小程序 App Secret
    appSecret: 'df21c8a93d141a0c09acf4f13d7c51f2',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: mbpDB,

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件
        uploadFolder: ''
    },

  // 微信登录态有效期
  wxLoginExpires: 7200,
  // wxMessageToken: 'abcdefgh'
  serverHost: 'localhost',
  tunnelServerUrl: '',
  tunnelSignatureKey: 'asfsafafasfasfasf',

  qcloudAppId: '1257459325',
  qcloudSecretId: 'AKIDJRKzPc2Jn2B5k8R8RYR6lP7h4EB2u6JI',
  qcloudSecretKey: ' 3tWxAAwUovoTv99vT0LTO5ZprfFbjdHf',
  wxMessageToken: 'weixinmsgtoken',
  networkTimeout: 30000
}

module.exports = CONF
