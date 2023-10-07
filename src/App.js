import {Canvas} from '@react-three/fiber'
import {Board} from "./components/Board";
import {TestBoard} from "./features/board/TestBoard";

function App() {
    return (
        <>
            <div>Main app</div>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [0, 5, 5],
                }}>
                <Board/>
            </Canvas>

            <div>Test app</div>

            <TestBoard />
        </>
    );
}

export default App;
