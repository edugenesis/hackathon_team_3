import { Fragment } from "react";
import { Square } from "./Sqare";
import { Walls } from "./Walls";


export const Board = () => {
    const renderBoard = () => {
        const board = [];

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                board.push(
                <Fragment key={`${i}-${j}`}>
                    <Square i={i} j={j} />
                    {(i < 8) && <Walls i={i} j={j} horizontal />}
                    {(j < 8) && <Walls i={i} j={j} />}
                </Fragment>
                )
            }
        }

        return board;
    }

    return (
        <group>
            {renderBoard()}
        </group>
    )
}