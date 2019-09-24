import React from 'react';

import classes from './Person.module.css';

const person = ( props ) => {
    /* const randomNumber = Math.random()

    if (randomNumber > 0.5) {
        throw new Error('Oops, looks like something went wrong!')
    } */
    console.log('[Person.js] rendering')

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person