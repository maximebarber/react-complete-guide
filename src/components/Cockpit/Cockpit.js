import React, {useEffect} from 'react'
import cockpitStyle from './Cockpit.module.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log('use effect')
        // Http request
    })

    let assignedClasses = []
    let btnClass = ''
    
    if (props.showPersons) {
        btnClass = cockpitStyle.Red
    }

    if (props.persons.length <= 2) { assignedClasses.push(cockpitStyle.red) }
    if (props.persons.length <= 1) { assignedClasses.push(cockpitStyle.bold) }

    return(
        <div className={cockpitStyle.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.btnClicked}>Toggle persons
            </button>
        </div>
    )
}

export default cockpit