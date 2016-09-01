/** Declaring dependencies */
var React = require('react');
var actions = require('./actions');
var connect = require('react-redux').connect;

/**
* New Game button constructor
* @namespace NewGameContainer
* @constructor
* Renders a button that allows the user to start a new game
*/
var NewGameContainer = React.createClass({
  /// component did mount () Save guess count
  // onNewGameSubmit: fetch fewestGueses

  onNewGameSubmit: function(event) {
    event.preventDefault();
    this.props.dispatch(actions.startNewGame());
  },
    render: function(){
      return(
        <div className="newGameField">
              <form onSubmit={this.onNewGameSubmit}><button name="new-game">New Game</button></form>
          </div>)
    }
});

/** Connect the state with the NewGameContainer constructor */
var Container = connect()(NewGameContainer);

/** Exports the NewGameContainer that has been connected with the state */
module.exports = Container;
// module.exports = {
//   newGame: NewGameContainer,
//   container: Container
// }
