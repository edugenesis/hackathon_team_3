import {useSelector, useDispatch} from "react-redux";
import {useMemo} from "react";
import { Sphere, Cylinder } from '@react-three/drei'
import React from 'react'

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
    <group position={[xPosition, 0.25 ,yPosition]} onPointerDown={handlePlayerClick}>
      <Sphere args={[0.25, 32, 32]} position={[0, 0.50, 0]}> {/* args prop is for [radius, widthSegments, heightSegments] */}
        <meshStandardMaterial attach="material" color={isSecondPlayer ? 'green' : 'red'} metalness={1} />
      </Sphere>
      <Cylinder args={[0.25, 0.25, 0.25, 32]} position={[0, 0, 0]}> {/* args prop is for [radiusTop, radiusBottom, height, radialSegments] */}
        <meshStandardMaterial attach="material" color={isSecondPlayer ? 'green' : 'red'} metalness={1} />
      </Cylinder>
    </group>
        </>
    )
}
