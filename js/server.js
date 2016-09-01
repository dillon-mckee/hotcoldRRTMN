var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var SavedGame = require('./models/game.js');

app.get('/fewest-guesses', function(req, res) {
    // console.log('is this working?');
    SavedGame.find(function(err, game) {

        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.json({});
    });
});


app.post('/fewest-guesses', jsonParser, function(req, res) {
    // console.log('post workin?');
    // findOne returns an Object 
    // find returns an array
    SavedGame.find(function(err, result) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        var query = result;
// console.log("before", guesses);
//         if(guesses[0] == undefined) {
//           console("are we here?");
//           SavedGame.save({
//             guesses: parseInt(6)
//           }, function(err, guesses){
//             if (err) {
//             return res.status(500).json({
//                 message: 'Internal Server Error'
//             });
//             return res.json(guesses);
//         } 
          // console.log(guesses);
//           })
//         }
          // console.log(result.length);
        if(result.length == 0){
          console.log('Creating a new guess', result);
          SavedGame.insert({
            guesses: req.body.guesses
          }, function(err, response){
            return res.json(response)
          });
        };

        // if (result[0].guesses > req.body.guessCount || result[0].guesses == 0) {
        // if (result[0].guesses > req.body.guessCount) {
        //     console.log("updating a new guess", result);
        //     SavedGame.findOneAndUpdate(query,{$set: {guesses: req.body.guessCount}}, function(err, guesses) { 
        //         return res.json(result);
        //     });
        // }
        console.log("after", result);

    });
});

var runServer = function(callback) {
    var databaseUri = process.env.DATABASE_URI || global.databaseUri || 'mongodb://localhost/hotcold';
    mongoose.connect(databaseUri).then(function() {
        var port = process.env.PORT || 8088;
        var server = app.listen(port, function() {
            console.log('Listening on localhost:' + port);
            if (callback) {
                callback(server);
            }
        });
    });
};

if (require.main === module) {
    runServer();
}

exports.app = app;
exports.runServer = runServer;