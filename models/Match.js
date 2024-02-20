const mongoose = require('mongoose');
const { Schema } = mongoose;

const MatchSchema = new Schema({
    team1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    team2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    startDay: Number,
    startMonth: Number,
    startYear: Number,
    endDay: Number,
    endMonth: Number,
    endYear: Number,
    result: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MatchResult'
    },
    tournament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament'
    }
});

module.exports = mongoose.model('Match', MatchSchema);
