import React from 'react';

import classes from './Input.css';

const input = props => (
    <input 
        className={classes.Input} 
        type="text" 
        placeholder={props.placeholder}
        onChange={props.change}
        value={props.value}
        disabled={props.disabled}
        onKeyUp={props.enterPressed}/>
);

export default input;