# React cheat sheet

## Next generation javascript

[Next generation JS summary](https://github.com/maximebarber/react-complete-guide/blob/master/docs/next-gen-js-summary.pdf)

[JS array functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Base features and syntax

### Using Create React App

1. Install node.js

[node.js](https://nodejs.org/en/)

2. Install create-react-app

```sh
$ npm install -g create-react-app
```

3. Create a new project

```sh
$ create-react-app my-app
```

4. Start development

```sh
$ cd my-app/
```

```sh
$ npm start
```

Go to http://localhost:3000/

5. Deploy to production

```sh
$ npm run build
```

### Creating components

[Components & JSX Cheat Sheet](https://github.com/maximebarber/react-complete-guide/blob/master/docs/components.pdf)

### Understanding and using *props* and *state*

* **state property** is only available if inside a class that *extends Component*; unless using react hooks
* If state changes, it will re-render the DOM

[Props and state](https://github.com/maximebarber/react-complete-guide/blob/master/docs/props-state.pdf)

### Handling events

[Supported events](https://reactjs.org/docs/events.html#supported-events)

### Hook state manipulation vs class state manipulation

* [Hook version](https://github.com/maximebarber/react-complete-guide/blob/master/code/use-state-hook)
* [Class version](https://github.com/maximebarber/react-complete-guide/blob/master/code/class-based)

[Hook useState() learning card](https://github.com/maximebarber/react-complete-guide/blob/master/docs/usestate-learning-card.pdf)

## Lists and conditionals

### JSX conditionals

/!\ This is not the most efficient solution

```js
state = {
    showPerson: false
}

togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
}

// Inside render method
{
    this.state.showPerson ?
    <div>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
    </div> : null
}
```

### JS conditionals

/!\ This is the recommended solution

```js
    state = {
        showPerson: false
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        const doesShow = this.state.showPersons
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})
    }

    // Inside render method
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
        </div>
      )
    }

    return({persons})
```

### Lists and keys

React needs a key prop when a component is rendered as a list in order to keep track of the elements it needs to change, rather than the whole list.

```js
state = {
    persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 26 }
    ]
}

// Inside render method
{this.state.persons.map((person, index) => {
    return <Person 
        click={this.deletePersonHandler.bind(this, index)}
        name={person.name}
        age={person.age} 
        key={person.id}/>
})}
```

