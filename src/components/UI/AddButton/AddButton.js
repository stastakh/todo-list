import React from 'react';

import classes from './AddButton.css';

const addButton = props => {
    return (
        <button 
            className={classes.AddButton}
            onClick={props.click} 
            disabled={!props.disabled}>
                {props.children}
        </button>
    );
};

export default addButton;