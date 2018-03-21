var express = require('express');
var module = require('./module');
var Student = require('./Student');
var somePackages = require('./somepackages'); // 当require引入一个包时。nodeJS会找到包（文件夹）一级目录下的index.js为接口文件
var student = new Student();
student.sayHi('liujun');
var app = express();
 module.logHello();
 somePackages.foo('foo');
app.get('/', function (req, res) {
    res.send('hello world!')
})

var server = app.listen(3000, function () {  // 启动一个服务并监听3000端口进入的所有连接请求，并未所欲url为'/'的返回'hello world!';
    var host = server.address().address;
    var address = server.address();

       var port = server.address().port;

    console.log(port);
})