import React from 'react';
import styled from 'styled-components';

import Square from './Square';

const Row = styled.div`
    display: flex;
    justify-content: center;
`

const Board = (props) => {

    // for(let i=0; i < props.size; i++){

    // }

    return(
        <>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
                <Square number="4"/>
            </Row>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
                <Square number="4"/>
            </Row>
        </>
    )
}

export default Board;