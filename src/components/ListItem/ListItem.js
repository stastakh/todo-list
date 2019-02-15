import React, { Component } from 'react';

import classes from './ListItem.css';
import RemoveButton from '../UI/RemoveButton/RemoveBotton';

class ListItem extends Component {
    state = {
        showRemoveButton: false
    }

    showRemoveButtonHandler = () => {
        this.setState({showRemoveButton: true});
    };
    
    hideRemoveButtonHandler = () => {
        this.setState({showRemoveButton: false});
    };

    render() {
        return (
            <div 
                className={classes.ListItem} 
                onMouseOver={this.showRemoveButtonHandler}
                onMouseOut={this.hideRemoveButtonHandler}>
                    <p>{this.props.listName}</p>
                    <RemoveButton 
                        click={this.props.removeListHandler.bind(this, this.props.index)}
                        showRemoveButton={this.state.showRemoveButton}/>
            </div>
        );
    }    
};

export default ListItem;