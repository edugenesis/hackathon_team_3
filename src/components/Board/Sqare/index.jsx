import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";

import { setPlayerMove } from '../../../features/game/slice';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

export const Square = ({ i, j }) => {
    const dispatch = useDispatch();
    const colorMap = useLoader(TextureLoader, '/Wood067_1K-PNG_Color.webp')

    const [userData, setUserData] = useState({ position: { row: 0, column: 0 }, ground: true, droppable: false });
    const { possibleMoves } = useSelector((state) => state.game);

    useEffect(() => {
        setUserData({ ...userData, position: { row: 8 - i, column: 8 - j } });
    }, [i, j])

    const xPos = 4-i * (1 + 0.1);
    const zPos = 3.5- j * (1 + 0.1);

    const handleSquareClick = (e) => {
        e.stopPropagation();
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
          <meshStandardMaterial attach="material" color={'#966F33'} side={2} metalness={0.4} roughness={0.9} map={colorMap} />
        </mesh>
    )
}
