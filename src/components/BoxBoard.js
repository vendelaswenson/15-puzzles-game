import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from "./Box";
import BoardFunctions from "./BoardFunctions";
import "./boxBoard.css"

class BoxBoard extends Component {
    static defaultProps = {
        size: 3,
        onMove: (i, j) => { console.log(`${i} ${j}`) }
    }

    constructor(props) {
        super(props);
        this.state = this.initialChars();
    }

    initialChars = () => {
        this.boardFunctions = new BoardFunctions(this.props.data || this.props.size);
        return {
            boxBoard: this.props.data ? this.boardFunctions.matrix : this.boardFunctions.randomize(),
            win: this.boardFunctions.checkIfWin()
        }
    };

    moves = (i, j) => {
        if (this.state.win)
            return;

        if (this.boardFunctions.moves(i, j)) {
            this.props.onMove(i, j);
            this.setState(() => ({
                boxBoard: this.boardFunctions.matrix,
                win: this.boardFunctions.checkIfWin(),
            }));
        }
    }

    row = (data, j) => {
        return (
            <div key={j} >
                {data.map((num, i) => <Box key={num} boxNumber={num} onClick={() => this.moves(i, j)} />)}
            </div>
        );
    }

    startOver = () => {
        this.setState(this.initialChars());
    }

    render() {
        const boxRows = this.state.boxBoard.map(this.row);
        return (
            <div className="box--board">
                {boxRows}
                <div className="box--board__message">
                    {this.state.win ? "You won, great job!" : "You can make it!"}
                </div>
                    <button className="box--board__btn" onClick={this.startOver}>Randomize numbers / start over</button>
                </div>
        );
    } 
}

BoxBoard.propTypes = {
    data: PropTypes.array,
    size: PropTypes.number,
    onMove: PropTypes.func
};

export default BoxBoard;