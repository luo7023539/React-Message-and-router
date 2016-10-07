/**
 * Created by apple on 16/10/7.
 */

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/messages');
//服务实例 》数据库 》 集合 》 文档

var MessageSchema = new mongoose.Schema({
    name: String,
    content: String,
    createAt: Date
});
var Message = mongoose.model('Message', MessageSchema);
/*Message.create(
 [
 {
 name:'张三',content:'今天真气真好,雨好大',createAt:new Date()
 },
 {
 name:'李四',content:'今天真气真好,下冰雹',createAt:new Date()
 }
 ]
 );*/
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if(req.method == 'OPTION'){
        res.end('')
    }else{
        next()
    }
});
app.post('/messages', function (req, res) {
    var msg = req.body;
    msg.createAt = new Date();
    Message.create(msg).then(function (docs) {
        res.send(docs)
        // res.redirect('back');
    }, function (err) {
        res.send(err)
    })
});
app.get('/messages', function (req, res) {
    Message.find({})
        .then(function (docs) {
            res.send(docs)
        }, function (err) {
            res.send(err)
        })
});
app.delete('/messages/:_id', function (req, res) {
    var _id = req.params._id;
    Message.remove({_id: _id}).then(function (result) {
        // res.redirect('back');
        res.send({})
    }, function (err) {
        res.send(err)
    })
});
//删除元素 或文档 成功返回空对象
app.listen(9090);