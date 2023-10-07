import {useSelector} from "react-redux";
import {useMemo} from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Cylinder } from '@react-three/drei'
import React from 'react'


const xStart = -4.8;
const xStep = 1.1;

const yStart = 3.4;
const yStep = 1.055;

export const Player = ({ isSecondPlayer, playerName }) => {
    const { position: [x, y] } = useSelector((state) => state.game[playerName]);

    const xPosition = useMemo(() => {
        return xStart + (xStep * (x));
    }, []);

    const yPosition = useMemo(() => {
        return yStart - (yStep * (8 - y));
    }, []);
    
    return (
        <>
    <group position={[xPosition, 0.25, yPosition]}>
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
