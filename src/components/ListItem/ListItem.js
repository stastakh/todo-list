import React, { Component } from 'react';

import classes from './ListItem.css';
import RemoveButton from '../UI/RemoveButton/RemoveButton';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class ListItem extends Component {
    state = {
        showButtons: false,
        listName: this.props.listName
    }

    showButtonsHandler = () => {
        this.setState({showButtons: true});
    };
    
    hideButtonsHandler = () => {
        this.setState({showButtons: false});
    };

    listNameChangeHandler = (event) => {
        if(event.target.value) {
            this.setState({listName: event.target.value});
            this.props.toListUpdate(event.target.value);
        }    
    }

    render() {
        const listBlockStyles = [classes.ListItem, this.props.active ? classes.activeItem : null];
        const listInputStyles = [this.state.showButtons ? classes.ListNameShort : classes.ListName, this.props.active ? classes.ListNameActive : null];
        return (
            <div 
                className={listBlockStyles.join(" ")}
                onMouseOver={this.showButtonsHandler}
                onMouseOut={this.hideButtonsHandler}
                onClick={this.props.toListItemClicked.bind(this, this.props.index)}>
                    <input 
                        type="text" 
                        className={listInputStyles.join(" ")} 
                        value={this.state.listName} 
                        disabled={this.state.inputNameDisabled} 
                        onChange={this.listNameChangeHandler}/>
                    <RemoveButton 
                        click={this.props.removeListHandler.bind(this, this.props.index)} 
                        showRemoveButton={this.state.showButtons}/>
            </div>
        );
    }    
};

const mapStateToProps = state => {
    return {
        itemActive: state.currentItem.active,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toListItemClicked: (itemIndex) => dispatch({type: actionTypes.LIST_CLICKED, itemIndex: itemIndex}),
        toListUpdate: (newValue) => dispatch({type: actionTypes.LIST_UPDATE, newValue: newValue})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);