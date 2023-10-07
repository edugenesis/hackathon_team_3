import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

const xStartVer = -4.1;
const xStepVer = 1.06;
const yStartVer = -5.5;
const yStepVer = 1.1;

const xStartHor = -4.85;
const xStepHor = 1;
const yStartHor = -3.4;
const yStepHor = 0.98;

export const ActiveWall = ({ xPosition, yPosition, horizontal }) => {
    const colorMap = useLoader(TextureLoader, '/Rock022_1K-PNG_Color.webp')

    const xPos = xStartVer + xPosition * (xStepVer);
    const zPos = yStartVer + yPosition * (yStepVer)-0.25;

    const xPosHor = xStartHor + xPosition * (xStepHor);
    const zPosHor = yStartHor + yPosition * (yStepHor);

    const rotation = horizontal ? [0, 0, 0] : [0, -Math.PI / 2, 0];

    const final = horizontal ? [xPosHor, 1, zPosHor] : [xPos, 0.4, zPos];

    return (
        <mesh
            position={final}
            rotation={rotation}
        >
            <boxGeometry attach="geometry" args={[0.1, 0.5, 2.2]} />
            {/* <meshBasicMaterial attach="material" color={'#eb7a34'} /> */}
            <meshStandardMaterial attach="material" color={'#e0d3bf'} side={2} metalness={0.8} roughness={0.4} map={colorMap} />
        </mesh>
    )
}
