import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { Square } from "./Sqare";
import { Walls } from "./Walls";
import {Camera} from './Camera'

export const Board = () => {
    const size = useSelector((state) => state.board.size);

    const renderBoard = () => {
        const board = [];

        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                board.push(
                <Fragment key={`${i}-${j}`}>
                    <Square i={i} j={j} />
                    {(i < size - 1) && <Walls i={i} j={j} horizontal />}
                    {(j < size - 1) && <Walls i={i} j={j} />}
                </Fragment>
                )
            }
        }

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
