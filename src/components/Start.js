import React from 'react'

const Start = (props) => {
    return(
        <div>
            <h3>What size board would you like?</h3>
            <p>(Enter a number from 1 to 10)</p>
            <input type="text" 
            value={props.size} 
            onChange={(event) => props.setSize(event.target.value)}/>
            <button onClick={props.setStart}>Start</button>
        </div>
    )
}

export default Start;