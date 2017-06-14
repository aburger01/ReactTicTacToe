import React from 'react';
import renderer from 'react-test-renderer';
import Square from '../../src/components/Square.react';

test('Does the Square component render correctly?', () => {
  const tree = renderer.create(
    <Square value="X" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Does the Squares class name change if winner is true?', () => {
  const tree = renderer.create(
    <Square winner = {true}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
})
