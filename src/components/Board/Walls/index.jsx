import {useDispatch} from "react-redux";
import {addActiveWall} from "../../../features/game/slice";

export const Walls = ({ i, j, horizontal }) => {
    const dispatch = useDispatch();

    const xPos = 4 - i * (1 + 0.1);
    const zPos = 3 - j * (1 + 0.1);
    const xPosHor = 3.45 - i * (1 + 0.1);
    const zPosHor = 3.5 - j * (1 + 0.1);
    const rotation = horizontal ? [0, 0, 0] : [0, -Math.PI / 2, 0];

    const final = horizontal ? [xPosHor, -0.4, zPosHor] : [xPos, -0.4, zPos];

    const onClick = (data) => {
        data.stopPropagation();
        dispatch(addActiveWall({
            position: data.object.userData,
            horizontal
        }))
    }

    return (
        <mesh
            position={final}
            rotation={rotation}
            onPointerDown={onClick}
            userData={[8 - i, 8 - j]}
        >
            <boxGeometry attach="geometry" args={[0.1, 1, 1]} />
            <meshBasicMaterial attach="material" color={'#4475DD'} />
        </mesh>
    )
}