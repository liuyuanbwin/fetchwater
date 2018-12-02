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
let env = "cloud" //x220
const db = env == "cloud" ? qcloudDB : x220DB
var cloduhost = 'https://khbkyy8i.qcloud.la';
var localhost = 'http://localhost:5757';
var host = env == "cloud" ? cloduhost : localhost

module.exports = {
  db,
  host
}