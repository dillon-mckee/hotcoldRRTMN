/** Declaring dependencies */
var actions = require('./actions');
var update = require('react-addons-update');


/** Set the variables of a new game */
var initialGameState = {
  randNum: parseInt(Math.random() * (100) + 1),
  myNum: 0,
  numHotness: '',
  guessCount: 0,
  guessSet: []
};

/**
* gameController Function
* @namespace gameController
* Handles the logic for processing user input (guess) for the game
* @param {state} The current state of the game
* @param {action} The action that has been dispatched to the reducer (MAKE_GUESS or START_NEWGAME)
* @returns {state} The state of the game after having been processed by this function
*/
var gameController = function(state, action) {
    state = state || initialGameState;
    if (action.type === actions.MAKE_GUESS){

        if (action.userNum > 100|| isNaN(action.userNum) || action.userNum === undefined) {
          alert('Please enter an integer between 1 and 100');
          return state;
        }
        for (var i = 0; i < state.guessSet.length; i++) {
          if (state.guessSet[i] == action.userNum) {
            alert('You already entered this number!');
            return state;
          }
        };

      var numRating;
      var diffNum = Math.abs(state.randNum - action.userNum);
      if (diffNum >= 50){
        numRating = 'Ice cold'
      }
      else if (diffNum < 50 && diffNum >= 30){
        numRating = 'Cold'
      }
      else if (diffNum < 30 && diffNum >= 20){
        numRating = 'Warm'
      }
      else if (diffNum < 20 && diffNum >= 10){
        numRating = 'Hot'
      }
      else if (diffNum < 10 && diffNum >= 1){
        numRating = 'Very hot!'
      }
      else {
        numRating = 'You win!'
      }
    //console.log('randNum is', state.randNum);
    //console.log('userNum is', action.userNum);
    //console.log('numRating is', numRating);

      var initSet = state.guessSet.slice();
      //console.log('initSet is', initSet);
      var afterSet = initSet.concat([action.userNum]);
      //console.log('afterSet is', afterSet);


      var guessCounter = state.guessCount + 1

      var newState = update(state, {
        myNum: {$set: action.userNum},
        numHotness: {$set: numRating},
        guessSet: {$set: afterSet},
        guessCount: {$set: guessCounter}
      });

      return newState;
    };

    // if (action.type === actions.START_NEWGAME){
    //   var newRandNum = parseInt(Math.random() * (100) + 1)
    //   var newGameState = update(initialGameState, {
    //     randNum: {$set: newRandNum}
    //   })

    //   return newGameState;
    // };

    // if (action.type === actions.FETCH_FEWEST_GUESSES) {

    //  }
    // if (action.type === actions.FETCH_FEWEST_GUESSES_ERROR) {

    //  }

     return state;
};

/** Exports gameController */
exports.gameController = gameController;
