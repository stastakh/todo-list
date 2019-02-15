import React, { Component } from 'react';

import classes from './ListBuilder.css';
import AddItemBlock from '../../components/AddItemBlock/AddItemBlock';
import ListsBlock from '../../components/ListsBlock/ListsBlock';

class ListBuilder extends Component {
    state = {
        listName: "",
        lists: [],
    }

    addListHandler = () => {
        const list = {
            name: this.state.listName
        };
        
        this.setState(prevState => {
            return {
                listName: "",
                lists: prevState.lists.concat(list)
            }
        })
    };

    inputValueHandler = (event) => { 
        this.setState({listName: event.target.value});  
    };

    removeListHandler = (listIndex) => {
        this.setState(prevState => {
            return {
                lists: prevState.lists.filter((item, index) => index !== listIndex)
            }
        });
    };

    render() {
        return (
            <div className={classes.ListBuilder}>
                <AddItemBlock 
                    addListHandler={this.addListHandler}
                    inputValueHandler={this.inputValueHandler}
                    listName={this.state.listName}/>
                <ListsBlock 
                    lists={this.state.lists}
                    removeListHandler={this.removeListHandler}/>
            </div>
        );
    };
};

export default ListBuilder;