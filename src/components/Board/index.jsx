import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { Square } from "./Sqare";
import { Walls } from "./Walls";
import {Camera} from './Camera'
import {ActiveWall} from "./ActiveWall";

export const Board = () => {
    const size = useSelector((state) => state.board.size);
    const activeWalls = useSelector((state) => state.game.activeWalls);
    
    console.log('MY_REG activeWalls: ', activeWalls);

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

        activeWalls.forEach((activeWall, index) => {
            board.push(
                <ActiveWall
                    key={index}
                    xPosition={activeWall.position[0]}
                    yPosition={activeWall.position[1]}
                    horizontal={activeWall.horizontal}
                />
            )
        })

        return board;
    }

    return (
        <>
            <Camera/>
            <group>
                {renderBoard()}
            </group>
        </>
    )
}
