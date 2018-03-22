// 创建HTTP服务器框架
// var http = require('http');
// var os = require('os');
// http.createServer(function (req, res) {
//     console.log('new request arrived.')
//     var template = require('art-template');
//     // data
//     var data = {list: [{id: '1', name:'tom'}, {id: 2, name: 'coco'}]};
//     var html = template(__dirname+'/index', data);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(html);
//     res.end();
//     console.log(__dirname);  // f:\myApp\views
// }).listen(3000)

// 在Express 中使用模板引擎
var express = require('express');
var app = express();
app.set('views', process.cwd()); // 指定模板文件存放位置
app.set('view engine', 'html') // 省略时使用的默认引擎扩展
app.engine('html', require('./renderFile.js'));

app.get('/',function(req, res){  
    res.render('index.html', {list: [{id: '1', name:'tom'}, {id: 2, name: 'coco'}]});   // 渲染视图
//    res.send('ddddd')
  })  
app.listen(3000, function(){
    console.log('listenning 3000')

})