import React from 'react';
import styled from 'styled-components';

import Square from './Square';
import Button from './Button';

const Row = styled.div`
    display: flex;
    justify-content: center;
`

class Board extends React.Component {
    state = {
        numbers: [
            [0, 0, 0, 0, 9, 5, 0, 0, 2],
            [0, 2, 0, 7, 0, 1, 0, 9, 8],
            [0, 0, 7, 3, 8, 0, 5, 1, 0],
            [5, 3, 2, 0, 0, 0, 0, 0, 0],
            [8, 0, 0, 0, 0, 0, 0, 0, 3],
            [0, 0, 0, 0, 0, 0, 8, 7, 6],
            [0, 9, 1, 0, 3, 7, 4, 0, 0],
            [6, 8, 0, 5, 0, 9, 0, 3, 0],
            [7, 0, 0, 1, 4, 0, 0, 0, 0]
            ]
    }

    render() {

        let board = this.state.numbers.map(row => {
            return(
                <Row>
                    {row.map(square => {
                        return(
                            <Square number={square}/>
                        )
                    })}
                </Row>
            );
        })

    return(
        <>  
            {board}
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
            {/* <Row>
                <Square />
                <Square />
                <Square right/>
                <Square />
                <Square starter number="9"/>
                <Square starter number="5" right/>
                <Square />
                <Square />
                <Square starter number="2"/>
            </Row>
            <Row>
                <Square/>
                <Square starter number="2"/>
                <Square right/>
                <Square starter number="7"/>
                <Square />
                <Square starter number="1" right/>
                <Square />
                <Square starter number="9"/>
                <Square starter number="8"/>
            </Row>
            <Row>
                <Square bottom/>
                <Square bottom/>
                <Square starter number="7" right bottom/>
                <Square starter number="3" bottom/>
                <Square starter number="8" bottom/>
                <Square right bottom/>
                <Square starter number="5" bottom/>
                <Square starter number="1" bottom/>
                <Square bottom/>
            </Row>
            <Row>
                <Square starter number="5"/>
                <Square starter number="3"/>
                <Square starter number="2" right/>
                <Square />
                <Square />
                <Square  right/>
                <Square />
                <Square />
                <Square />
            </Row>
            <Row>
                <Square starter number="8"/>
                <Square />
                <Square  right/>
                <Square />
                <Square />
                <Square  right/>
                <Square />
                <Square />
                <Square starter number="3"/>
            </Row>
            <Row>
                <Square bottom/>
                <Square bottom/>
                <Square right bottom/>
                <Square bottom/>
                <Square bottom/>
                <Square right bottom/>
                <Square starter number="8" bottom/>
                <Square starter number="7" bottom/>
                <Square starter number="6" bottom/>
            </Row>
            <Row>
                <Square />
                <Square starter number="9"/>
                <Square starter number="1" right/>
                <Square />
                <Square starter number="3"/>
                <Square starter number="7" right/>
                <Square starter number="4"/>
                <Square />
                <Square />
            </Row>
            <Row>
                <Square starter number="6"/>
                <Square starter number="8"/>
                <Square right/>
                <Square starter number="5"/>
                <Square />
                <Square starter number="9" right/>
                <Square />
                <Square starter number="3"/>
                <Square />
            </Row>
            <Row>
                <Square starter number="7"/>
                <Square />
                <Square right/>
                <Square starter number="1"/>
                <Square starter number="4"/>
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
            </Row> */}
        </>
    )
    }
}


export default Board;