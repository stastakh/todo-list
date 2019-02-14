import React from 'react';

import classes from './Input.css';

const input = props => {
    return (
        <input 
            className={classes.Input} 
            type="text" 
            placeholder={props.placeholder}
            onChange={props.change}
            value={props.value}/>
    );
};

export default input;