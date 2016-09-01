/** Declaring dependencies */
var redux = require('redux');
var createStore = redux.createStore;
// var enhancersDevTools = compose(window.devToolsExtension ? window.devToolsExtension() : function (f) {
//   return f;
// });

var reducers = require('./reducers');
var actions = require('./actions');

/** Creating a store for the state produced by the gameController reducer */
var store = createStore(reducers.gameController);

/** Exports the store */
module.exports  = store;
