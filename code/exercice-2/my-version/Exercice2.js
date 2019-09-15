import React, { Component } from 'react';

import Validation from './Validation/Validation'
import Char from './Char/Char'

class Exercice2 extends Component {
    state = {
        textValue: '',
        textLength: 0,
        aLetters : []
    }

    getTextHandler = (event) => {
        const textLength = event.target.value.length
        const textValue = event.target.value
        const letters = textValue.split('')
        this.setState({
            textLength: textLength,
            textValue: textValue,
            aLetters: letters,
        })
    }

    charClickedHandler = (charIndex) => {
        const aLetters = [...this.state.aLetters]
        aLetters.splice(charIndex, 1)
        const textValue = aLetters.join('')
        this.setState({
            aLetters: aLetters,
            textValue: textValue
        })
    }

    render() {
        const aLetters = (
            this.state.aLetters.map((letter, index) => {
                return (
                    <Char letter={letter} key={index} clicked={this.charClickedHandler.bind(this, index)}/>
                )
            })
        )

        return (
            <div>
                <h1>Exercice 2</h1>
                <label htmlFor="textLength">Input text here</label>
                <input id="textLength" type="text" onChange={this.getTextHandler} value={this.state.textValue}></input>
                <p>Text length: {this.state.textLength}</p>
                <Validation textLength={this.state.textLength}/>
                {aLetters}
            </div>
        )
    }
}

export default Exercice2