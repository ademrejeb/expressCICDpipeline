const mongo = require('mongoose');
const User = require('./User');

const Schema = mongo.Schema

const Notification = new Schema({
    title : String,
    description : String,
    notifDay : Number,
    notifMonth : Number,
    notifYear : Number,
    receiver : User,
})

module.exports = mongo.model('notification',Notification);