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
                placeholder={this.props.currentListName ? this.props.currentListName  + " List Position" : "List Position"}
                change={this.positionInputValueHandler}
                value={this.state.positionName}
                addItem={this.addPositionHandler}
                disabled={!this.props.active}/>   
        );
    };
};

const mapStateToProps = state => {
    return {
        active: state.currentItem.active,
        currentListName: state.currentItem.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toAddPosition: (positionName) => dispatch({type: actionTypes.ADD_POSITION, positionName: positionName})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPositionsBuilder);