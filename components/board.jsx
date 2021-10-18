// import { Tile as Minesweeper } from "../minesweeper";
// import { Board as Minesweeper }  from "../minesweeper";
import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';

class Board extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.board.grid.map((row, rowidx) => {
                        <div key={rowidx}>
                            {row.map((pos, idx) => {
                                <Tile tile={pos} update={this.props.update} key={idx} />
                            }) }
                        </div>

                    })
                }
            </div>
        )
    }
}

export default Board;