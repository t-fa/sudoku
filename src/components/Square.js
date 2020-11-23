import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 50px;
    height: 50px;
    border: 1px solid black;
`;

const Number = styled.input`
    width: 50px;
    height: 50px;
    border: 1px solid black;
`

const Square = (props) => {
    {props.inputSquare ?
        <Input />
    :   <Number />}
}

export default Square;