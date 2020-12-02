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
                <Square />
                <Square />
                <Square  right/>
                <Square />
                <Square number="9"/>
                <Square number="5" right/>
                <Square />
                <Square />
                <Square number="2"/>
            </Row>
            <Row>
                <Square/>
                <Square number="2"/>
                <Square right/>
                <Square number="7"/>
                <Square />
                <Square number="1" right/>
                <Square />
                <Square number="9"/>
                <Square number="8"/>
            </Row>
            <Row>
                <Square bottom/>
                <Square bottom/>
                <Square number="7" right bottom/>
                <Square number="3" bottom/>
                <Square number="8" bottom/>
                <Square right bottom/>
                <Square number="5" bottom/>
                <Square number="1" bottom/>
                <Square bottom/>
            </Row>
            <Row>
                <Square number="5"/>
                <Square number="3"/>
                <Square number="2" right/>
                <Square />
                <Square />
                <Square  right/>
                <Square />
                <Square />
                <Square />
            </Row>
            <Row>
                <Square number="8"/>
                <Square />
                <Square  right/>
                <Square />
                <Square />
                <Square  right/>
                <Square />
                <Square />
                <Square number="3"/>
            </Row>
            <Row>
                <Square bottom/>
                <Square bottom/>
                <Square right bottom/>
                <Square bottom/>
                <Square bottom/>
                <Square right bottom/>
                <Square number="8" bottom/>
                <Square number="7" bottom/>
                <Square number="6" bottom/>
            </Row>
            <Row>
                <Square />
                <Square number="9"/>
                <Square number="1" right/>
                <Square />
                <Square number="3"/>
                <Square number="7" right/>
                <Square number="4"/>
                <Square />
                <Square />
            </Row>
            <Row>
                <Square number="6"/>
                <Square number="8"/>
                <Square right/>
                <Square number="5"/>
                <Square />
                <Square number="9" right/>
                <Square />
                <Square number="3"/>
                <Square />
            </Row>
            <Row>
                <Square number="7"/>
                <Square />
                <Square  right/>
                <Square number="1"/>
                <Square number="4"/>
                <Square  right/>
                <Square />
                <Square />
                <Square />
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