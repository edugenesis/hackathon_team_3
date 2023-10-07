import { Canvas } from '@react-three/fiber'
import { Board } from "./components/Board";

function App() {
  return (
    <Canvas
      camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ 0, 5, 5 ],
      }}>
      <Board />
    </Canvas>
  );
}

export default App;
