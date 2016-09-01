var fetch = require('isomorphic-fetch')


/**
* MAKE_GUESS Action
* @namespace MAKE_GUESS
* A user action that inputs a guess for the game
* @param {guess} The user input for the guess
* @returns {type} The type of action that gets passed to the reducer
* @returns {userNum} The user input that gets passed through the reducer
*/
var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
  return {
    type: MAKE_GUESS,
    userNum: guess
  }
}

/**
* START_NEWGAME Action
* @namespace START_NEWGAME
* A user action that begins a new game (returns game to initial state)
* @returns {type} The type of action that gets passed to the reducer
*/
var START_NEWGAME = 'START_NEWGAME';
var startNewGame = function() {
  return {
    type: START_NEWGAME
  }
}


var FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
var fetchFewestGuessesSuccess = function(respository, description) {
  return {
    type: FETCH_FEWEST_GUESSES,
    repository: repository,
    description: description
  };
};

var FETCH_FEWEST_GUESSES_ERROR= 'FETCH_FEWEST_GUESSES_ERROR';
var fetchFewestGuessesError = function(repository, error) {
    return {
        type: FETCH_FEWEST_GUESSES_ERROR,
        repository: repository,
        error: error
    };
};

var SAVE_FEWEST_GUESSES = 'SAVE_FEWEST_GUESSES';
var saveFewestGuessesSuccess = function(respository, description) {
  return {
    type: SAVE_FEWEST_GUESSES,
    repository: repository,
    description: description
  };
};

var SAVE_FEWEST_GUESSES_ERROR= 'SAVE_FEWEST_GUESSES_ERROR';
var saveFewestGuessesError = function(repository, error) {
    return {
        type: SAVE_FEWEST_GUESSES_ERROR,
        repository: userNum,
        error: error
    };
};






var fetchFewestGuesses = function(userNum) {
    return function(dispatch) {
        var url = 'localhost:8080/fewest-guesses' + userNum;
        return fetch(url).then(function(response) {
            if (response.state < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchFewestGuessesSuccess(repository, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchFewestGuessesError(repository, error)
            );
        });
    }
};

var saveFewestGuesses = function(repository) {
    return function(dispatch) {
        var url = 'https://api.github.com/repos/' + repository;
        return fetch(url).then(function(response) {
            if (response.state < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                saveFewestGuessesSuccess(repository, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                saveFewestGuessesError(repository, error)
            );
        });
    }
};


/** Exports actions */
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.START_NEWGAME = START_NEWGAME;
exports.startNewGame = startNewGame;
exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.fetchFewestGuessesSuccess = fetchFewestGuessesSuccess;
exports.FETCH_FEWEST_GUESSES_ERROR = FETCH_FEWEST_GUESSES_ERROR;
exports.fetchFewestGuessesError = fetchFewestGuessesError;
exports.fetchFewestGuesses = fetchFewestGuesses;
