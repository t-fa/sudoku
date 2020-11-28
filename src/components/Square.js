import React from 'react';
import styled from 'styled-components';

const Number = styled.div`
    border: 1px solid black;
    width: 50px;
    height: 50px;
`

const Square = (props) => {
    return <Number>{props.number}</Number>
}

export default Square;