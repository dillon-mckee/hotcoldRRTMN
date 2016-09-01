var Reducers = require('../js/reducers');
var update = require('react-addons-update');
var React = require('react');
var Redux = require('redux');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var Actions = require('../js/actions.js');
var expect = require('chai').expect();

var initialGameState = {
  randNum: parseInt(Math.random() * (100) + 1),
  myNum: 0,
  numHotness: '',
  guessCount: 0,
  guessSet: []
};

describe('Testing the reducers', function() {
    it('return the initial state',  function() {
      var state = initialGameState;
      var result = Reducers.gameController(state, {});
      //console.log(result);
      result.myNum.should.equal(0);
      result.numHotness.should.equal('');
      result.guessCount.should.equal(0);
      result.guessSet.should.be.a.array;
      result.guessSet.length.should.equal(0);
    })
    // it('should refuse a non-integer or an integer greater than 100',  function() {
    //   var state = initialGameState;
    //   var result = Reducers.gameController(state, Actions.makeGuess('apple'));
    //   console.log(result);
    //   // result.myNum.should.equal(0);
    //   // result.numHotness.should.equal('');
    //   // result.guessCount.should.equal(0);
    //   // result.guessSet.should.be.a.array;
    //   // result.guessSet.length.should.equal(0);
    // })

    it('modify the state based upon the action',  function() {
      var state = initialGameState;
      var result = Reducers.gameController(state, Actions.makeGuess(5));
      result.myNum.should.equal(5);
      result.numHotness.should.be.a.string;
      result.guessCount.should.equal(1);
      result.guessSet.should.be.a.array;
      result.guessSet.length.should.equal(1);
    })
    it('return the game to initial state',  function() {
        var playedState = {
          myNum: 25,
          numHotness: 'Hot',
          guessCount: 3,
          guessSet: [1, 2, 3]
        };
        var result = Reducers.gameController(playedState, Actions.startNewGame());
        result.myNum.should.equal(0);
        result.numHotness.should.equal('');
        result.guessCount.should.equal(0);
        result.guessSet.should.be.a.array;
        result.guessSet.length.should.equal(0);
    });
});
