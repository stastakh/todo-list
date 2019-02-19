import React, { Component } from 'react';

import classes from './PositionsBlock.css';

class PositionsBlock extends Component {
    render() {
        return (
            <div className={classes.PositionsBlock}>
                <div className={classes.Positions}>
                    {this.props.currentList ? <h1>{this.props.currentList.name}</h1> : null} 
                </div>
            </div>
        );
    };
};

export default PositionsBlock;