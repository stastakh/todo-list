import React from 'react';

import classes from './AddItemBlock.css';
import Input from '../UI/Input/Input';
import AddButton from '../UI/AddButton/AddButton';

const addItemBlock = props => {
    const addButtonClasses = [classes.AddItemBlock, props.listName ? classes.anabled : classes.disabled]
    return (
        <div className={addButtonClasses.join(" ")}>
            <Input 
                placeholder={props.placeholder} 
                change={props.inputValueHandler}
                value={props.listName}/>
            <AddButton 
                click={props.addListHandler}
                disabled={props.listName}>+</AddButton>
        </div>
    );
};

export default addItemBlock;