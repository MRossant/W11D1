import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';

class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return(
            <div class="board">
                {
                    this.props.board.grid.map((row, rowidx) => {
                        return(
                            <div key={rowidx}>
                                {row.map((pos, idx) => {
                                    return <Tile tile={pos} update={this.props.update} key={idx} />
                                })}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Board;