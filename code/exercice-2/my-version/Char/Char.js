import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
        border: '1px solid seagreen',
        backgroundColor: 'lightgreen',
        cursor: 'pointer'
    }

    return (
        <div style={style} onClick={props.clicked}>
            <p>{props.letter}</p>
        </div>
    )
}

export default char