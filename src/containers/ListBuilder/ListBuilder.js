import React, { Component } from 'react';

import classes from './ListBuilder.css';
import AddItemBlock from '../../components/AddItemBlock/AddItemBlock';
import ListsBlock from '../../components/ListsBlock/ListsBlock';

class ListBuilder extends Component {
    render() {
        return (
            <div className={classes.ListBuilder}>
                <AddItemBlock />
                <ListsBlock />
            </div>
        );
    };
};

export default ListBuilder;