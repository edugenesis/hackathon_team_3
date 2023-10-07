import { useState, useEffect } from 'react';

export const Square = ({ i, j }) => {
    const [userData, setUserData] = useState({ position: { row: 0, column: 0 }, ground: true, droppable: false });

    useEffect(() => {
    setUserData({ ...userData, position: { row: i, column: j } });
    }, [i, j])

    const xPos = 4-i * (1 + 0.1);
    const zPos = 3.5- j * (1 + 0.1);

    return (
        <mesh 
        position={[xPos, 0, zPos]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        userData={userData}
        >
          <planeGeometry attach="geometry" args={[1, 1, 1]}  />
          <meshBasicMaterial attach="material" color={'#CFCFCF'} side={2} />
        </mesh>
    )
}