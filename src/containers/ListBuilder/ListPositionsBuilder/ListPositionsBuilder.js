import React, { Component } from 'react';

import AddItemBlock from '../../../components/AddItemBlock/AddItemBlock';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';

class ListPositionsBuilder extends Component {
    state = {
        positionName: "",
    };

    positionInputValueHandler = (event) => { 
        this.setState({positionName: event.target.value});  
    };

    addPositionHandler = () => {
        this.props.toAddPosition(this.state.positionName);
        this.setState({positionName: ""});
    };

    render() {
        return (
            <AddItemBlock 
                placeholder="List's Position"
                change={this.positionInputValueHandler}
                value={this.state.positionName}
                addItem={this.addPositionHandler}
                disabled={this.props.disabledPositionInput}/>   
        );
    };
};

const mapStateToProps = state => {
    return {
        disabledPositionInput: state.currentItem.active === false
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toAddPosition: (positionName) => dispatch({type: actionTypes.ADD_POSITION, positionName: positionName})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPositionsBuilder);