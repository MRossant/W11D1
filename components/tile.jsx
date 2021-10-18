import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from "../minesweeper";
import Board from './board';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        const isFlagged = event.altKey
        this.props.update(this.props.tile, isFlagged);
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
            <div className={status} onClick={this.handleClick(event)}>{symbol}</div>
        )
    }
}

export default Tile;