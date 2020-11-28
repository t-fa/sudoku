import React from 'react';
import styled from 'styled-components';

import Square from './Square';

const Row = styled.div`
    display: flex;
    justify-content: center;
`

const Board = (props) => {


    return(
        <>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
            </Row>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
            </Row>
            <Row>
                <Square number="1" bottom/>
                <Square number="2" bottom/>
                <Square number="3" right bottom/>
                <Square number="1" bottom/>
                <Square number="2" bottom/>
                <Square number="3" right bottom/>
                <Square number="1" bottom/>
                <Square number="2" bottom/>
                <Square number="3" bottom/>
            </Row>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
            </Row>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
            </Row>
            <Row>
                <Square number="1" bottom/>
                <Square number="2" bottom/>
                <Square number="3" right bottom/>
                <Square number="1" bottom/>
                <Square number="2" bottom/>
                <Square number="3" right bottom/>
                <Square number="1" bottom/>
                <Square number="2" bottom/>
                <Square number="3" bottom/>
            </Row>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
            </Row>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
            </Row>
            <Row>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3" right/>
                <Square number="1"/>
                <Square number="2"/>
                <Square number="3"/>
            </Row>
        </>
    )
}

export default Board;