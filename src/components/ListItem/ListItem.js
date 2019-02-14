import React from 'react';

import classes from './ListItem.css';
import RemoveButton from '../UI/RemoveButton/RemoveBotton';

const listItem = props => {
    return (
        <div className={classes.ListItem}>
            <p>{props.listName}</p>
            <RemoveButton click={props.removeListHandler.bind(this, props.index)}/>
        </div>
    );
};

export default listItem;