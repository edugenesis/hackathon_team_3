import { useState, useEffect } from "react";

export const Walls = ({ i, j, horizontal }) => {
    const [userData, setUserData] = useState({ chessPosition: { row: 0, column: 0 }, ground: true, droppable: false });

    useEffect(() => {
        setUserData({ ...userData, position: { row: i, column: j } });
    }, [i, j])

    const xPos = 4 - i * (1 + 0.1);
    const zPos = 3 - j * (1 + 0.1);
    const xPosHor = 3.45 - i * (1 + 0.1);
    const zPosHor = 3.5 - j * (1 + 0.1);
    const rotation = horizontal ? [0, 0, 0] : [0, -Math.PI / 2, 0];

    const final = horizontal ? [xPosHor, -0.4, zPosHor] : [xPos, -0.4, zPos];

    return (
        <mesh
        position={final}
        rotation={rotation}
        >
            <boxGeometry attach="geometry" args={[0.1, 1, 1]} />
            <meshStandardMaterial attach="material" color={'#966F33'} side={2} metalness={0.8} roughness={0.4} />
        </mesh>
    )
}
