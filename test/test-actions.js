var React = require('react');
var Redux = require('redux');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();


var Actions = require('../js/actions.js');

describe('Action Constructors', function() {
    it('Allows user to make a guess',  function() {
      var number = 50;
      var expectedAction = {
        type: Actions.MAKE_GUESS,
        userNum: number
      }
      Actions.makeGuess(number).should.equal.expectedAction;

    });
it('Sets the state to initial value to start a new game',  function() {
    var expectedAction = {
      type: Actions.START_NEWGAME,
    }
    Actions.startNewGame.should.equal.expectedAction;
  });
});
