import React, { Component } from 'react';

import classes from './PositionsBlock.css';
import Position from '../../../components/Position/Position';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';

class PositionsBlock extends Component {
    render() {
        return (
            <div className={classes.PositionsBlock}>
                <div className={classes.Positions}>
                    {this.props.currentList.active ?
                        <>  
                            <h1>{this.props.currentList.name}</h1>
                            {this.props.currentList.positions.map((position, index) => (
                                <Position 
                                    key={index} 
                                    completed={position.completed}
                                    name={position.name}
                                    onTogglePositionComplete={this.props.onTogglePositionComplete.bind(this, index)}    
                                    onPositionRemove={this.props.onPositionRemove.bind(this, index)}/>     
                            ))}   
                        </>
                        : null}    
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        currentList: state.currentItem
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTogglePositionComplete: (itemIndex) => dispatch({type: actionTypes.POSITION_COMPLETE_TOGGLE, itemIndex: itemIndex}),
        onPositionRemove: (itemIndex) => dispatch({type: actionTypes.REMOVE_POSITION, itemIndex: itemIndex})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionsBlock);