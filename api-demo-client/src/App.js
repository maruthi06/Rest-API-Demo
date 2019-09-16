import React, { Component } from 'react';
import './App.css';
import FormComponent from './Components/FormComponent';
import DisplayComponent from './Components/DisplayComponent';

import RequestModule from './Service/ApiService';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };

    RequestModule('http://localhost:4200/data', 'get', {}, {}).then(data => {
      console.log(data);
      
      this.setState({ data: data });
    });
  }

  updateState(data) {
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div>
        <FormComponent data={this.state.data} updateState={this.updateState.bind(this)} />
        <DisplayComponent data={this.state.data} updateState={this.updateState.bind(this)} />
      </div>
    );
  }
}

export default App;