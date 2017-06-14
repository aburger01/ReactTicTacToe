import React from 'react';

function Square(props) {
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

export default Square;
