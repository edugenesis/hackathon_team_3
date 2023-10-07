import {useSelector} from "react-redux";
import {useMemo} from "react";

const xStart = -4.8;
const xStep = 1.1;

const yStart = 3.4;
const yStep = 1.055;

export const PossibleMove = ({ x, y }) => {
    const xPosition = useMemo(() => {
        return xStart + (xStep * (x));
    }, []);

    const yPosition = useMemo(() => {
        return yStart - (yStep * (8 - y));
    }, []);
    
    return (
        <>
           <mesh position={[xPosition, 0.2 ,yPosition]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[0.4, 16]} />
                <meshBasicMaterial color="orange" />
            </mesh>
        </>
    )
}