var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var connect = require('react-redux').connect;
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('../js/store');
var Game = require('../js/game').game;

var Container = connect(mapStateToProps)(Game);

var mapStateToProps = function(state, props) {
    return {
      randNum: state.randNum,
      numHotness: state.numHotness,
      guessCount: state.guessCount,
      guessSet: state.guessSet
    };
};

describe('Game component', function() {
    it('Renders the game field',  function() {
        var renderer = TestUtils.createRenderer();
        var hotness = 'Cold';
        renderer.render(
          <Game guessCount='5' numHotness={hotness} guessSet='[1, 2, 3]' />)
        var game = renderer.getRenderOutput();
        game.props.className.should.equal('gameField');
        game.props.children.length.should.equal(4);
        game.props.children[0].props.className.should.equal('numHotness');
        game.props.children[0].props.children[1].should.equal(hotness);
        game.props.children[0].type.should.equal('div');
        game.props.children[1].props.className.should.equal('guessCount');
        game.props.children[1].props.children[1].should.be.an.integer;
        game.props.children[1].type.should.equal('div');
        game.props.children[2].props.className.should.equal('guessSet');
        game.props.children[2].props.children[1].should.be.a.string;
        game.props.children[2].type.should.equal('div');

    });
    it('Renders the input container', function(){
      var renderer = TestUtils.createRenderer();
      var hotness = 'Cold';
      renderer.render(
        <Game guessCount='5' numHotness={hotness} guessSet='[1, 2, 3]' />)
      var game = renderer.getRenderOutput();
      game.props.children[3].type.displayName.should.equal('Connect(InputContainer)');
    });
    it('Renders the new game container', function(){
      var renderer = TestUtils.createRenderer();
      var hotness = 'You win!';
      renderer.render(
        <Game guessCount='5' numHotness={hotness} guessSet='[1, 2, 3]' />)
      var game = renderer.getRenderOutput();
      game.props.children[3].type.displayName.should.equal('Connect(NewGameContainer)');
    });
});
