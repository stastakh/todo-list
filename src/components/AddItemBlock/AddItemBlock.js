import React from 'react';

import classes from './AddItemBlock.css';
import Input from '../UI/Input/Input';
import AddButton from '../UI/AddButton/AddButton';

const addItemBlock = props => (
    <div className={classes.AddItemBlock}>
        <Input 
            placeholder="List Name" 
            change={props.inputValueHandler}
            value={props.listName}/>
        <AddButton click={props.addListHandler}>Add List</AddButton>
    </div>
);

export default addItemBlock;