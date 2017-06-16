![gameImage](https://github.com/aburger01/ReactTicTacToe/blob/master/src/TicTacToeFinished.PNG)



My-App  

This project is a Tic Tac Toe game that implements a few different functions.
The game keeps track of the history so players can go back to any move they want
by clicking on the list of moves to the right of the board, it has a sort button
to change the way the moves are sorted from ascending to descending or
vice versa, and it highlights the three winning squares in the event that
there is a winner.


**Prerequisites:**
You will need a few things to get this application running
- Bootstrap
- React
- React DOM
- React Bootstrap
- React PropTypes
- Node


Node is probably the most important considering that you will need to use it
to download the other software and run the program.


**Installing:**
In order to create a proper development environment, you will also need
- Jest
- babel-jest
- babel-preset-es2015
- babel-preset-react
- react-scripts
- react-test-renderer

First download the Node installer from the Node.js website and run it. Next, run

- npm install


**Running Tests:**
To run the tests, type 'npm test' into your command line. The test for the
Board component tests to see if the board is rendering properly. The test for
the game component tests to see if the getWinningSquares method is returning
an object with the correct values in three different situations. The first being
when there is a winner, then when the game ends in a draw, and finally when the
game is still in progress. The tests for the Square component test to see if the
Squares are rendering properly and if the class name changes when they are
deemed one of the winning squares.


**Built With:**
- React - main language of the components
- css - to make it look good
- Bootstrap - to make it look even more good


**Author:**  
Andrew Burger


**Acknowledgements:**
- Adam Blank
- Brian Kilpatrick
- StackOverflow
