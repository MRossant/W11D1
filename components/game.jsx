import * as Minesweeper from "../minesweeper";
import React from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component{
    constructor(){
        super()
        // const board = new Minesweeper.Board(8, 8);
        this.state = {
            board: new Minesweeper.Board(8, 8)
        }
    }

    render(){
        return(
            <h1>Yo</h1>
        )
    }
}

export default Game;