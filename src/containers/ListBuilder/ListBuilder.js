import React, { Component } from 'react';

import classes from './ListBuilder.css';
import AddItemBlock from '../../components/AddItemBlock/AddItemBlock';
import ListsBlock from '../../components/ListsBlock/ListsBlock';
import ListPositionsBuilder from './ListPositionsBuilder/ListPositionsBuilder';
import PositionsBlock from './PositionsBlock/PositionsBlock';

class ListBuilder extends Component {
    state = {
        list: {
            name: "",
        },
        lists: [],
        currentItem: null
    }

    addListHandler = () => {
        this.setState(prevState => {
            return {
                lists: prevState.lists.concat(prevState.list),
                list: {name: ""}
            }
        })
    };

    inputValueHandler = (event) => { 
        this.setState({list: {name: event.target.value}});  
    };

    removeListHandler = (listIndex) => {
        const listsArr = [...this.state.lists];
        this.setState({lists: listsArr.filter((item, index) => index !== listIndex)})
    };

    listItemClicked = (itemIndex) => {
        const listsArr = [...this.state.lists];
        if(this.state.currentItem !== listsArr[itemIndex]) {
            this.setState({currentItem: listsArr[itemIndex]});
        } 
    };

    render() {
        return (
            <div className={classes.ListBuilder}>
                <div className={classes.ListsBlock}>
                    <AddItemBlock 
                        placeholder="List Name"
                        addListHandler={this.addListHandler}
                        inputValueHandler={this.inputValueHandler}
                        listName={this.state.list.name}/>
                    <ListsBlock 
                        lists={this.state.lists}
                        removeListHandler={this.removeListHandler}
                        listItemClicked={this.listItemClicked}
                        currentItem={this.state.currentItem}/>
                </div>
                <div className={classes.ListPositionsBlock}>
                    <ListPositionsBuilder />
                    <PositionsBlock currentList={this.state.currentItem}/>
                </div>     
            </div>
        );
    };
};

export default ListBuilder;