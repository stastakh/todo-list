import React, { Component } from 'react';

import classes from './ListBuilder.css';
import AddItemBlock from '../../components/AddItemBlock/AddItemBlock';
import ListsBlock from '../../components/ListsBlock/ListsBlock';
import ListPositionsBuilder from './ListPositionsBuilder/ListPositionsBuilder';
import PositionsBlock from './PositionsBlock/PositionsBlock';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

class ListBuilder extends Component {
    state = {
        listName: ""
    };

    listInputValueHandler = (event) => { 
        this.setState({listName: event.target.value});  
    };

    addListHandler = () => {
        this.props.toAddList(this.state.listName);
        this.setState({listName: ""});
    }

    render() {
        return (
            <div className={classes.ListBuilder}>
                <div className={classes.ListsBlock}>
                    <AddItemBlock 
                        placeholder="List Name"
                        value={this.state.listName}
                        change={this.listInputValueHandler}
                        addItem={this.addListHandler}/>
                    <ListsBlock 
                        lists={this.props.lists}
                        removeListHandler={this.props.toRemoveList}
                        listIndex={this.props.listIndex}/>
                </div>
                <div className={classes.ListPositionsBlock}>
                    <ListPositionsBuilder />
                    <PositionsBlock />
                </div>     
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        lists: state.lists,
        listIndex: state.currentItem.index
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toAddList: (listName) => dispatch({type: actionTypes.ADD_LIST, listName: listName}),
        toRemoveList: (itemIndex) => dispatch({type: actionTypes.REMOVE_LIST, itemIndex: itemIndex}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListBuilder);