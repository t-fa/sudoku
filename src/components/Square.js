import React from 'react';
import styled from 'styled-components';

const Number = styled.div`
    border-bottom: ${(props) => (props.bottom ? '3px solid black' : '1px solid black')};
    border-right: ${(props) => (props.right ? '3px solid black' : '1px solid black')};
    border-left: 1px solid black;
    border-top: 1px solid black;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.highlight ? 'beige' : 'white')};
`

const Square = (props) => {
    return <Number right={props.right} bottom={props.bottom} highlight={props.highlight}>{props.number}</Number>
}

export default Square;