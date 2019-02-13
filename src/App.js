import React, { Component } from 'react';

import classes from './App.css';
import ListBuilder from './containers/ListBuilder/ListBuilder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <ListBuilder />
      </div>
    );
  }
}

export default App;
