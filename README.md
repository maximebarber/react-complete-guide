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