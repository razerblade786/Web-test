/*
 express.js: 引入 express 模块，设置路由
*/
var express = require('express'); // 引入express框架
var path = require('path'); // 引入path模块
var routes = require('./routes/app');// 引入路由模块
var port = 8000; // 设置端口号：3000
var app = express(); //实例化express
var serveStatic = require('serve-static'); // 静态文件处理
app.use(serveStatic('public')); // 路径：public
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var mongoose = require('mongoose') // 引入 mongoose
var url = "mongodb://127.0.0.1:27017/profile"; // 本地数据库地址
mongoose.connect(url)
// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Successful connection to "+url)
});
var Schema = mongoose.Schema;
let connectPerson = {
name:String,
email:String,
phone:String,
reason:String
}
var connectpersonSchema = Schema(connectPerson)
var ConnectPerson = mongoose.model('ConnectPerson', connectpersonSchema);
  /*
  express.js: 使用 mongoose 建立接口，添加数据到 MongoDB
 */    
app.get("/addConnect",function (request, response) {
    let data = {
      name: request.query.name,
      email:request.query.email,
      phone:request.query.phone,
      reason:request.query.reason
    }
    console.log(data);
    var addConnect = new ConnectPerson(data);
    addConnect.save();
    response.render('index')
  })
/*
 express.js: 配置引擎
*/

app.get('/index', function (request, response) {
    response.render('index')
  })
app.get('/', function (request, response) {
    response.render('index')
  })
app.get('/connect', function (request, response) {
    response.render('connect')
  })
app.get('/project', function (request, response) {
    response.render('project')
  })
app.get('/about', function (request, response) {
    response.render('about')
  })
app.get('/music', function (request, response) {
    response.render('music')
  })
app.listen(3000) //监听3000端口，默认localhost: 127.0.0.1 || 0.0.0.0
