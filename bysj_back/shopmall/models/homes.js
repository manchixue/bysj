var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homeSchema = new Schema({
    "bannerUrl":[String],
    "newPhone":{"name":String,"phone":[{"phoneUrl":String,"topic":String,"describe":String,"price":String}]},
    "special":{"name":String,"phone":[{"phoneUrl":String,"topic":String,"describe":String,"price":String}]}
});

module.exports = mongoose.model('Home',homeSchema);