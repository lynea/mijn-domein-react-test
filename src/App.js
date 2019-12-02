import React, { Component } from 'react';
import Button from './components/button/button.component';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dogs: [],
      filter: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ filter: !this.state.filter })
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data =>
        this.setState({ dogs: Object.keys(data.message) }))
  }

  render() {
    
    let dogs;
    if(this.state.filter){
      dogs = this.state.dogs.reverse()
    }else {
      dogs = this.state.dogs
    }

    
    return (
      <div>
        <h1>dogs list</h1>
        <button onClick={this.handleClick}> Filter </button>
        <ul>
          {dogs.map(dog =>
            <li>
              {dog}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App;
