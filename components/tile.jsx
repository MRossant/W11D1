import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from "../minesweeper";
import Board from './board';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const status = "tile ";
        const adjacentBombs = 0;
        const symbol = "";

        if (this.explored) {
            status += "revealed";
            if (this.adjacentBombCount() > 1) {
                adjacentBombs = this.adjacentBombCount();
                symbol = adjacentBombs;
            }
        } else if (this.flagged) {
            status += "flagged";
            symbol = "🚩";
        } else if (this.bombed) {
            status += "bombed";
            symbol = "💣";
        }

        return(
            <div className={status}>{symbol}</div>
        )
    }
}

export default Tile;