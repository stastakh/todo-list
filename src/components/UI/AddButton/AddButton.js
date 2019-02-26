import React from 'react';

import classes from './AddButton.css';

const addButton = props => (
    <button 
        className={classes.AddButton}
        onClick={props.click} 
        disabled={!props.disabled}>
        {props.children}
    </button>
);


export default addButton;