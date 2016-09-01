var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema ({
    guesses: {
        type: Number,
        required: true
    }
});
var SavedGame = mongoose.model('SavedGame', GameSchema);
module.exports = SavedGame;
