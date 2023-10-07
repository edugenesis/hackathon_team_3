import {Canvas} from '@react-three/fiber'
import {Board} from "./components/Board";
import { Player } from "./components/Player";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {PlayerController} from "./features/player/Player";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const player1 = new PlayerController();
        const player2 = new PlayerController();
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
            </Canvas>
            <Player />
        </>
    );
}

export default App;
