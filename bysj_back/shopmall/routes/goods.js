var express =  require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

var dbhost = require ('../util/config');
console.log(dbhost);

mongoose.connect(dbhost);
/*连接成功*/
mongoose.connection.on("connected", function () {
    console.log("MongoDB connected success");
});
mongoose.connection.on("error", function () {
    console.log("MongoDB connected error");
});
mongoose.connection.on("disconnected", function () {
    console.log("MongoDB connected disconnected");
});

router.get('/', function (req, res, next) {
    console.log(req.query.goodsId);
    let oId = req.query.goodsId;
    Goods.find({goodsId:oId}, function (err, doc) {
        if(err){
            res.json({
                status:'1',
                msg:err.message
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
    })
});
module.exports = router;