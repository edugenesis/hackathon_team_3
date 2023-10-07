import {Canvas} from '@react-three/fiber'
import {Board} from "./components/Board";
import { Player } from "./components/Player";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPlayer, setActivePlayer, start} from "./features/game/slice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPlayer({
            name: 'player1',
            position: [4, 8]
        }));
        dispatch(addPlayer({
            name: 'player2',
            position: [4, 0]
        }));
        dispatch(setActivePlayer('player1'));
        dispatch(start());
    }, []);

    return (
        <>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [ 0, 7, 8 ],
                }}>
                <Board/>
                <Player playerName="player1" />
                <Player playerName="player2" isSecondPlayer/>
            </Canvas>
        </>
    );
}

export default App;
