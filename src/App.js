import { Canvas } from '@react-three/fiber'
import { Board } from "./components/Board";
import { Player } from "./components/Player";

function App() {
  return (
    <Canvas
      camera={{ 
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ 0, 7, 8 ],
      }}>
      <Board />
      <Player />
    </Canvas>
  );
}

export default App;
