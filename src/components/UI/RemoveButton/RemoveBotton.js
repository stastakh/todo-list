import React from 'react';

import classes from './RemoveButton.css';

const removeButton = props => {
    const buttonStyles = [classes.RemoveButton, props.showRemoveButton ? classes.ShowButton : classes.HideButton];
    return (
        <span 
            className={buttonStyles.join(" ")}
            onClick={props.click}></span>
    );
};

export default removeButton;