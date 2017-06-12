import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
    let squareClassName;
    if (props.winner) {
      squareClassName = "square winner"
    } else {
      squareClassName = 'square'
    }
    return (
      <button className={squareClassName} onClick = {props.onClick}>
        {props.value }
      </button>
    );
  }

class Board extends React.Component {
  renderSquare(i, winner = null) {
    return (
      <Square value={this.props.squares[i]}
              onClick = {() => this.props.onClick(i)}
              winner={winner} />
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

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        move: 0
      }],
      stepNumber: 0,
      xIsNext: true,
      sort: 'asc',
    };
    this.handleSortButton = this.handleSortButton.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber +1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        move: this.state.stepNumber + 1
      }]),
      stepNumber: this.state.stepNumber + 1,
      xIsNext: !this.state.xIsNext,
  });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  handleSortButton(i) {
    let sortState = this.state.sort;

    this.setState({
      sort: sortState == 'asc' ? 'desc' : 'asc'
    });
  }

  render() {
    // Deep Copy
    let history = this.state.history.map(item => Object.assign({}, item));
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    if(this.state.sort === 'asc'){
      history = history.sort((a,b) => a.move - b.move);
    } else{
      history = history.sort((a,b) => b.move - a.move);
    }

    const moves = history.map((turn) => {
      const text = turn.move ?
        'Move #' + turn.move :
        'Game start';
      return (
        <li key={turn.move}>
          <a href="#" onClick={() => this.jumpTo(turn.move)}>{text}</a>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;

    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <div>
          <button onClick={this.handleSortButton}>Sort</button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winningSquares = {
    squareOne: null,
    squareTwo: null,
    squareThree: null,
    value: null};

  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winningSquares={
          squareOne: a,
          squareTwo: b,
          squareThree: c,
          value: squares[a]
      };

      return winningSquares;
    }
  }
  return null;
}
