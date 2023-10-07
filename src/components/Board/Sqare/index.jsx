import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";

import { setPlayerMove } from '../../../features/game/slice';

export const Square = ({ i, j }) => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ position: { row: 0, column: 0 }, ground: true, droppable: false });
    const { possibleMoves } = useSelector((state) => state.game);

    useEffect(() => {
        setUserData({ ...userData, position: { row: 8 - i, column: 8 - j } });
    }, [i, j])

    const xPos = 4-i * (1 + 0.1);
    const zPos = 3.5- j * (1 + 0.1);

    const handleSquareClick = (e) => {
        if (!possibleMoves.length) return;
        
        dispatch(setPlayerMove(e.object.userData.position))
    }

    return (
        <mesh 
        position={[xPos, 0, zPos]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        userData={userData}
        onPointerDown={handleSquareClick}
        >
          <planeGeometry attach="geometry" args={[1, 1, 1]}  />
          <meshBasicMaterial attach="material" color={'#CFCFCF'} side={2} />
        </mesh>
    )
}