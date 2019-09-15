import React from 'react';

const validation = (props) => {
let validationText = null
props.textLength > 5 ? validationText = 'Text long enough' : validationText = 'Text too short' 

    return(
        <p>{validationText}</p>
    )
}

export default validation