import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Square from './components/Square.react';
import Board from './components/Board.react';
import Game from './components/Game.react';

//====================================================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
