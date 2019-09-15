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

<span style='color:firebrick; font-weight:bold;'>/!\\</span> This is not the most efficient solution

```jsx
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

<span style='color:firebrick; font-weight:bold;'>/!\\</span> This is the recommended solution

```jsx
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

```jsx
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

### Updating arrays and objects

<span style='color:firebrick; font-weight:bold;'>/!\\</span> When updating arrays and objects in the state, make sure to make a copy of them rather than just point at them, using the ES6 spread operator.

Do this:
```jsx
const persons = [...this.state.persons]

const person = {
    ...this.state.persons[personIndex]
}
```

Instead of this:
```jsx
const persons = this.state.persons

const person = this.state.persons[personIndex]
```

## Styling react components and elements

### Using pseudo selectors and media queries in inline stlying

```
$ npm install --save radium
```

Import radium
```jsx
import Radium from 'radium'
```

Wrap the component with radium
```jsx
export default Radium(App)
```

<span style='color:firebrick; font-weight:bold;'>/!\\</span> If using media queries, you need to wrap your App with the StyleRoot component

Import StyleRoot
```jsx
import Radium, {StyleRoot} from 'radium'
```
Wrap your App with StyleRoot
```jsx
return (
    <StyleRoot>
    <div className="App">
        <h1>Hi, I'm a React App</h1>
    </div>
    </StyleRoot>
);
```
