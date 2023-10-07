import {Canvas} from '@react-three/fiber'
import {Board} from "./components/Board";
import { Player } from "./components/Player";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPlayer, setActivePlayer, start} from "./features/game/slice";

function App() {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);

    console.log('MY_REG game: ', game);

    useEffect(() => {
        dispatch(addPlayer({
            name: 'player1',
            position: [9, 5]
        }));
        dispatch(addPlayer({
            name: 'player2',
            position: [0, 5]
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
                <Player />
                <Player isSecondPlayer/>
            </Canvas>
        </>
    );
}

export default App;
