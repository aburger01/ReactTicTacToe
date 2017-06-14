import React from 'react';
import renderer from 'react-test-renderer';
import { getWinningSquares } from '../../src/components/Game.react';

test('Does the getWinningSquares method return the '+
'correct object when there is a winner?', () => {

  const testWinningSquares = ["X", null, "O", "X", "O", null, "X", null, null];
  const testWinners = getWinningSquares(testWinningSquares);

  expect(testWinners.squareOne).toBe(0);
  expect(testWinners.squareTwo).toBe(3);
  expect(testWinners.squareThree).toBe(6);
  expect(testWinners.value).toBe("X");
});

test('Does the getWinningSquares method return null '+
'when there is no winner or the game is still in progress?', () => {

  const testDrawSquares = ["X", "O", "X", "X", "X", "O", "O", "X", "O"];
  const testProgressSquares = ["X", null, null, null, null, null, null, "O", null];
  const testDraw = getWinningSquares(testDrawSquares);
  const testProgress = getWinningSquares(testProgressSquares);

  expect(testDraw.squareOne).toBeNull();
  expect(testDraw.squareTwo).toBeNull();
  expect(testDraw.squareThree).toBeNull();
  expect(testDraw.value).toBeNull();

  expect(testProgress.squareOne).toBeNull();
  expect(testProgress.squareTwo).toBeNull();
  expect(testProgress.squareThree).toBeNull();
  expect(testProgress.value).toBeNull();
});
