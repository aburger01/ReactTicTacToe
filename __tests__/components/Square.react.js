import React from 'react';
import renderer from 'react-test-renderer';
import Square from '../../src/components/Square.react';

test('Does the Square component render correctly?', () => {
  const tree = renderer.create(
    <Square value="O" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
