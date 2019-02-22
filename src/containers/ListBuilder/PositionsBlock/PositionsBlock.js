import React, { Component } from 'react';

import classes from './PositionsBlock.css';
import RemoveButton from '../../../components/UI/RemoveButton/RemoveButton';

import { connect } from 'react-redux';

class PositionsBlock extends Component {
    render() {
        return (
            <div className={classes.PositionsBlock}>
                <div className={classes.Positions}>
                    {this.props.currentList.active ?
                        <>  
                            <h1>{this.props.currentList.name}</h1>
                            {this.props.currentList.positions.map((position, index) => (
                                <div 
                                    className={classes.Position} 
                                    key={index}>
                                    <span className={classes.Checkbox}></span>
                                    <p className={classes.PositionText}>{position.name}</p>
                                    <RemoveButton showRemoveButton/>
                                </div>
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionsBlock);