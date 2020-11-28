import React from 'react'

const Start = (props) => {
    return(
        <div>
            <h3>Rules:</h3>
            <p>Each horiztonal row must contain exactly one instance of each number 1 through 9.</p>
            <p>Each vertical column must contain exactly one instance of each number 1 through 9.</p>
            <p>Each 3 x 3 region (denoted by bold lines) must contain exactly one instance of each number 1 through 9.</p>
            <p>You may assume the numbers given are correct.</p>
            <p>Your goal is to solve the empty cells.</p>

            <button onClick={props.setStart}>Start</button>
        </div>
    )
}

export default Start;