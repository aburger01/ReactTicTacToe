import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square.react';

class Board extends React.Component {

  renderSquare(i, winner = null) {
    return (
      <Square value={this.props.squares[i]}
              onClick = {() => this.props.onClick(i)}
              winner={this.props.winners[i]} />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  winners: PropTypes.arrayOf(PropTypes.bool).isRequired
}

export default Board;
