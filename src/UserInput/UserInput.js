import React from 'react'

const UserInput = (props) => {
    return (
        <div id="userInput">
            <label>
                Hive name:
                <input type="text" onChange={props.changed} value={props.value}></input>
            </label>
        </div>
    )
}

export default UserInput