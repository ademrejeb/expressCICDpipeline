const mongo = require('mongoose');
const User = require('./User');
const Message = require('./Message');

const Schema = mongo.Schema

const Chat = new Schema({
    users : [User],
    messages : [Message]
})

module.exports = mongo.model('chat',Chat);