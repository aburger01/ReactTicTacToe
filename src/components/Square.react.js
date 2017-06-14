import React from 'react';
import PropTypes from 'prop-types';

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

  Square.PropTypes = {
    winner: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
  }

export default Square;
