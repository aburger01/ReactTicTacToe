########################################
#Dockerfile to build Tic Tac Toe Game
#
#Created: 6/16/17
#Last Updated: 6/16/17
########################################

FROM mhart/alpine-node:7.8

LABEL author="Andrew Burger"

WORKDIR /var/www

COPY ./src TicTacToe/src
COPY ./public TicTacToe/public
COPY ./__tests__ TicTacToe/__tests__
COPY ./package.json TicTacToe/package.json

WORKDIR TicTacToe

RUN npm install

ENTRYPOINT npm start
