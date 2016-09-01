var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var connect = require('react-redux').connect;
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('../js/store');
var NewGame = require('../js/newgame').newGame;

describe('Input component', function() {
    it('Renders the input container',  function() {
        var renderer = TestUtils.createRenderer();
        var hotness = 'Cold';
        renderer.render(
          <NewGame />)
        var newGame = renderer.getRenderOutput();
        var newGameTest = newGame.props.children.props.onSubmit.__reactBoundMethod;
        newGame.props.className.should.equal('newGameField');
        newGame.props.children.type.should.equal('form');
        newGame.props.children.props.children.type.should.equal('button');
        newGame.props.children.props.children.props.name.should.equal('new-game');
        newGame.props.children.props.onSubmit.__reactBoundMethod.should.equal(newGameTest);
    });
});
