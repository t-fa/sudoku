import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    border-radius: 50%;
    background-color: cornflowerblue;
    color: white;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 2.5px;
`

const Button = (props) => {
    return <Circle>{props.number}</Circle>
}

export default Button;