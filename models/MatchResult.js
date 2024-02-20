const mongo = require('mongoose');

const Schema = mongo.Schema

const MatchResult = new Schema({
    goals : Number,
    redCards : Number,
    yellowCards : Number,
    blueCards : Number,
})

module.exports = mongo.model('Matchresult',MatchResult);