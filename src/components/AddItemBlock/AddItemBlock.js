import React from 'react';

import classes from './AddItemBlock.css';
import Input from '../UI/Input/Input';
import AddButton from '../UI/AddButton/AddButton';

const addItemBlock = props => {
    const addButtonClasses = [classes.AddItemBlock, 
        props.value 
        ? classes.anabled 
        : classes.disabled];
    
    return (
        <div className={addButtonClasses.join(" ")}>
            <Input 
                placeholder={props.placeholder} 
                change={props.change}
                value={props.value}
                disabled={props.disabled}/>
            <AddButton 
                click={props.addItem}
                disabled={props.value}>+</AddButton>
        </div>
    );    
};

export default addItemBlock;