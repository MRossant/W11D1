import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';

class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        debugger;

        return(
            <div>
                {
                    this.props.board.grid.map((row, rowidx) => {
                        <div key={rowidx}>
                            {row.map((pos, idx) => {
                                <Tile tile={pos} update={this.props.update} key={idx} />
                            })}
                        </div>

                    })
                }
            </div>
        )
    }
}

export default Board;