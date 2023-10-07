
export const Player = ({ isSecondPlayer, playerName }) => {
    const xPosition = !isSecondPlayer ? -0.4 : -0.4;
    const zPosition = !isSecondPlayer ? 3.4 : -5.4;
    
    return (
        <mesh position={[xPosition, 0.5 ,zPosition]}>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" color={isSecondPlayer ? "green" :"red"} />
        </mesh>
    )
}