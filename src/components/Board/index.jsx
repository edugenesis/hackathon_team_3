import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { Square } from "./Sqare";
import { Walls } from "./Walls";
import {Camera} from './Camera'
import {ActiveWall} from "./ActiveWall";
import { Environment } from '@react-three/drei'

export const Board = () => {
    const size = useSelector((state) => state.board.size);

    const renderBoard = () => {
        const board = [];

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                board.push(
                    <Fragment key={`${i}-${j}`}>
                        <Square i={i} j={j}/>
                        {(i < size - 1) && <Walls i={i} j={j} horizontal/>}
                        {(j < size - 1) && <Walls i={i} j={j}/>}
                    </Fragment>
                )
            }
        }

        board.push(
            <ActiveWall key={'TEST'} xPosition={5} yPosition={1} />
        )

        board.push(
            <ActiveWall key={'TEST2'} xPosition={3} yPosition={3} horizontal />
        )

        return board;
    }

    return (
        <>
            <Environment preset="dawn" /> {/* <- This line adds an environment */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Camera/>

            <group>
                {renderBoard()}
            </group>
        </>
    )
}
