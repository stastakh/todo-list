import React, { Component } from 'react';

import classes from './PositionsBlock.css';
import RemoveButton from '../../../components/UI/RemoveButton/RemoveButton';

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
                            {this.props.currentList.positions.map((position, index) => {
                                const checkboxStyles = [classes.Checkbox, position.completed ? classes.Checkbox_checked : null];
                                return (
                                    <div 
                                        className={classes.Position} 
                                        key={index}>
                                        <span 
                                            className={checkboxStyles.join(" ")}
                                            onClick={this.props.onTogglePositionComplete.bind(this, index)}></span>
                                        <p className={position.completed ? classes.PositionTextChecked : classes.PositionText}>{position.name}</p>
                                        <RemoveButton showRemoveButton/>
                                    </div>
                                );
                            })}   
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
        onTogglePositionComplete: (itemIndex) => dispatch({type: actionTypes.POSITION_COMPLETE_TOGGLE, itemIndex: itemIndex})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionsBlock);