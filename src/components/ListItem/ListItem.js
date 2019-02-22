import React, { Component } from 'react';

import classes from './ListItem.css';
import RemoveButton from '../UI/RemoveButton/RemoveButton';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class ListItem extends Component {
    state = {
        showRemoveButton: false,
    }

    showRemoveButtonHandler = () => {
        this.setState({showRemoveButton: true});
    };
    
    hideRemoveButtonHandler = () => {
        this.setState({showRemoveButton: false});
    };

    render() {
        const stylesCss = [classes.ListItem,
            this.props.active ? classes.activeItem : null];
        return (
            <div 
                className={stylesCss.join(" ")} 
                onMouseOver={this.showRemoveButtonHandler}
                onMouseOut={this.hideRemoveButtonHandler}
                onClick={this.props.toListItemClicked.bind(this, this.props.index)}>
                    <p>{this.props.listName}</p>
                    <RemoveButton 
                        click={this.props.removeListHandler.bind(this, this.props.index)}
                        showRemoveButton={this.state.showRemoveButton}/>
            </div>
        );
    }    
};

const mapStateToProps = state => {
    return {
        active: state.currentItem.active
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toListItemClicked: (itemIndex) => dispatch({type: actionTypes.LIST_CLICKED, itemIndex: itemIndex})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);