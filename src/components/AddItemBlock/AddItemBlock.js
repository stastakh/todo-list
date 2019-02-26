import React, { Component } from 'react';

import classes from './AddItemBlock.css';
import Input from '../UI/Input/Input';
import AddButton from '../UI/AddButton/AddButton';

class AddItemBlock extends Component {
    enterPressed = (event) => {
        if(event.keyCode === 13) {
            this.props.addItem();
        }
    }

    render() {
        const addButtonClasses = [classes.AddItemBlock, 
            this.props.value 
            ? classes.anabled 
            : classes.disabled];
        
        return (
            <div className={addButtonClasses.join(" ")}>
                <Input 
                    placeholder={this.props.placeholder} 
                    change={this.props.change}
                    value={this.props.value}
                    disabled={this.props.disabled} 
                    enterPressed={this.enterPressed}/>
                <AddButton 
                    click={this.props.addItem}
                    disabled={this.props.value}>+</AddButton>
            </div>
        );
    }      
};

export default AddItemBlock;