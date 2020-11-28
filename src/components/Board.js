import React from 'react';
import styled from 'styled-components';

import Square from './Square';
import Button from './Button';

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
            <Row>
                <Button number="1"/>
                <Button number="2"/>
                <Button number="3"/>
                <Button number="4"/>
                <Button number="5"/>
                <Button number="6"/>
                <Button number="7"/>
                <Button number="8"/>
                <Button number="9"/>
            </Row>
        </>
    )
}

export default Board;