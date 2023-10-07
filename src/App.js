import {Canvas} from '@react-three/fiber'
import {Board} from "./components/Board";
import {TestBoard} from "./features/board/TestBoard";
import { Player } from "./components/Player";

function App() {
    return (
        <>
            <div>Main app</div>
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
            <div>Test app</div>

            <TestBoard />
        </>
    );
}

export default App;
