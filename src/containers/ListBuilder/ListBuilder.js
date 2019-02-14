import React, { Component } from 'react';

import classes from './ListBuilder.css';
import AddItemBlock from '../../components/AddItemBlock/AddItemBlock';
import ListsBlock from '../../components/ListsBlock/ListsBlock';

class ListBuilder extends Component {
    state = {
        listName: "",
        lists: []
    }

    addListHandler = () => {
        const newListsArr = [...this.state.lists];
        const list = {};
        list.name = this.state.listName;
        newListsArr.push(list);
        this.setState({lists: newListsArr});
    };

    inputValueHandler = (event) => {
        if(event.target.value) {
            this.setState({listName: event.target.value});
        }   
    };

    render() {
        return (
            <div className={classes.ListBuilder}>
                <AddItemBlock 
                    addListHandler={this.addListHandler}
                    inputValueHandler={this.inputValueHandler}/>
                <ListsBlock lists={this.state.lists}/>
            </div>
        );
    };
};

export default ListBuilder;