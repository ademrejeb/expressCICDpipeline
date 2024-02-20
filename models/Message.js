const mongo = require('mongoose');
const User = require('./User');
const Chat = require('./Chat');

const Schema = mongo.Schema

const Message = new Schema({
    
    chat : Chat,
    content : String,
    sendDay : Number,
    sendMonth : Number,
    sendYear : Number,
    sender : User,
    receiver : [User]
})

module.exports = mongo.model('message',Message);