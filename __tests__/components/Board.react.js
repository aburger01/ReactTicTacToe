import React from 'react';
import renderer from 'react-test-renderer';
import Board from '../../src/components/Board.react';
import Square from '../components/Square.react';

test('Does the Board component render correctly?', () => {

  const testBoard = ["X", "O", null, "X", "O", null, "X", null, null];
  const testWinners = [true, false, false, true, false, false, true, false, false];

  const tree = renderer.create(
    <Board squares={testBoard} winners={testWinners} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
