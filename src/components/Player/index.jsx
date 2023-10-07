import {useSelector} from "react-redux";
import {useMemo} from "react";

const xStart = -4.8;
const xStep = 1.1;

const yStart = 3.4;
const yStep = (3.4+5.4)/9;

export const Player = ({ isSecondPlayer, playerName }) => {
    const [x, y] = useSelector((state) => state.game[playerName]);

    const xPosition = useMemo(() => {
        return xStart + (xStep * (x));
    }, []);

    const yPosition = useMemo(() => {
        return yStart - (yStep * (8 - y));
    }, []);
    
    return (
        <mesh position={[xPosition, 0.5, yPosition]}>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" color={isSecondPlayer ? "green" :"red"} />
        </mesh>
    )
}