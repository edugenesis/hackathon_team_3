import { useDispatch } from 'react-redux';
import { getPossibleMoves } from '../../features/game/slice'

export const Player = ({ isSecondPlayer, playerName }) => {
    const dispatch = useDispatch();
    const xPosition = !isSecondPlayer ? -0.4 : -0.4;
    const zPosition = !isSecondPlayer ? 3.4 : -5.4;

    const handlePlayerClick = (event) => {
        console.log('event :>> ', event.object);

        dispatch(getPossibleMoves({ playerName }))
    };
    
    return (
        <>
        <mesh position={[xPosition, 0.5 ,zPosition]} onPointerDown={handlePlayerClick}>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" color={isSecondPlayer ? "green" :"red"} />
        </mesh>
        </>
    )
}