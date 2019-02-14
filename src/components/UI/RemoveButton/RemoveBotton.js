import React from 'react';

import classes from './RemoveButton.css';

const removeButton = props => {
    return (
        <button 
            className={classes.RemoveButton}
            onClick={props.click}>X</button>
    );
};

export default removeButton;