import React from 'react';

import classes from './Position.css';
import RemoveButton from '../UI/RemoveButton/RemoveButton';

const position = props => {
    const checkboxStyles = [classes.Checkbox, props.completed ? classes.Checkbox_checked : null];
    return (
        <div 
            className={classes.Position}>
            <span 
                className={checkboxStyles.join(" ")}
                onClick={props.onTogglePositionComplete}></span>
            <p className={props.completed ? classes.PositionTextChecked : classes.PositionText}>{props.name}</p>
            <RemoveButton 
                showRemoveButton
                click={props.onPositionRemove}/>
        </div>
    );
};

export default position;