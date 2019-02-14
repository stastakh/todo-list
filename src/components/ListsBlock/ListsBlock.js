import React from 'react';

import classes from './ListsBlock.css';
import ListItem from '../ListItem/ListItem';

const listsBlock = props => (
    <div className={classes.ListsBlock}>
        {props.lists.map((list, index) => (
            <ListItem 
                listName={list.name}
                key={index}
                index={index}
                removeListHandler={props.removeListHandler}/>
        ))} 
    </div>
);

export default listsBlock;