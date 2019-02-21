import React, { Component } from 'react';

import classes from './PositionsBlock.css';

import { connect } from 'react-redux';

class PositionsBlock extends Component {
    render() {
        return (
            <div className={classes.PositionsBlock}>
                <div className={classes.Positions}>
                    {this.props.currentList.active ?
                        <>  
                            <h1>{this.props.currentList.name}</h1>
                            <div>
                                {this.props.currentList.positions.map((position, index) => (
                                    <div key={index}>{position.name}</div>
                                ))}    
                            </div>
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

export default connect(mapStateToProps)(PositionsBlock);