import * as Minesweeper from "../minesweeper";
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';

class Game extends React.Component{
    constructor(props){
        super(props);
        // const board = new Minesweeper.Board(8, 8);
        this.state = {
            board: new Minesweeper.Board(8, 8)
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }


    render() {
        // const Board = Minesweeper.Board
        return(
                <Board board={this.state.board} update={this.updateGame} />         
        )
    }
}

export default Game;