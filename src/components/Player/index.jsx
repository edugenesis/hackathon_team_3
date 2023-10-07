
export const Player = () => {
    return (
        <mesh position={[-0.4,0.5,3.4]}>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" color="red" />
        </mesh>
    )
}