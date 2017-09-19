import React, { Component } from 'react';
import World from './components/World';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      something:false
    }
  }
  render() {
    return (
      <div>
        <World />
      </div>
    );
  }
}

export default App;
