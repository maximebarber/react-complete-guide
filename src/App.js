import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 29},
      {name: 'Louise', age: 27},
      {name: 'Noëlla', age: 28},
    ],
    otherSate: 'Some other value'
  }

  switchNameHandler = () => {
    //console.log('clicked')
    // DON'T DO THIS: this.state.persons[0].name = "Ernest"
    this.setState({
      persons: [
        {name: 'Ernest', age: 29},
        {name: 'Louise', age: 27},
        {name: 'Noëlla', age: 38},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        {/* this refers to the class */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
