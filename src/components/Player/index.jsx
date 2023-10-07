import {useSelector, useDispatch} from "react-redux";
import {useMemo} from "react";
import { getPossibleMoves } from '../../features/game/slice'

const xStart = -4.8;
const xStep = 1.1;

const yStart = 3.4;
const yStep = 1.055;

export const Player = ({ isSecondPlayer, playerName }) => {
    const dispatch = useDispatch();
    const { position: [x, y] } = useSelector((state) => state.game[playerName]);
    const { activePlayer } = useSelector((state) => state.game);

    const xPosition = useMemo(() => {
        return xStart + (xStep * (x));
    }, [x]);

    const yPosition = useMemo(() => {
        return yStart - (yStep * (8 - y));
    }, [y]);

    const handlePlayerClick = (event) => {
        console.log('event :>> ', event.object);
        if (activePlayer !== playerName) return;

        dispatch(getPossibleMoves({ playerName }))
    };
    
    return (
        <>
        <mesh position={[xPosition, 0.5 ,yPosition]} onPointerDown={handlePlayerClick}>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" color={isSecondPlayer ? "green" :"red"} />
        </mesh>
        </>
    )
}