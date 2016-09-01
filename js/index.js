/** Declaring dependencies */
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var Game = require('./game').container;

/** Renders the game using data from the store */
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      <Provider store={store}>
        <Game/>
      </Provider>,
      document.getElementById('app')
    );
});
