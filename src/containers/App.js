import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor (props) {
    super (props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerievedStateFromProps(props, state) {
    console.log('GETDERIEVEDSTATEFROMPROPS: '+props, state)
    return props
  }

  /* static getDerievedStateFromProps(props, state) {
    console.log('[App.js] getDerievedStateFromProps')
    return state
  } */

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons // Creates a pointer to the array, not a copy
    // const persons = this.state.persons.slice() // Creates a copy of the array
    const persons = [...this.state.persons] // Creates a copy of the array using ES6 spread operator
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render () {
    console.log('[App.js] render')
    let persons = null

    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          btnClicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App
