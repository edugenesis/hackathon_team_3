import {Canvas} from '@react-three/fiber'
import {Board} from "./components/Board";
import { Player } from "./components/Player";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {PlayerController} from "./features/player/Player";
import {addPlayer} from "./features/game/slice";

function App() {
    const dispatch = useDispatch();
    const players = useSelector((state) => state.game.players);

    useEffect(() => {
        const player1 = new PlayerController({
            name: 'player 1',
            position: [0, 0]
        });
        const player2 = new PlayerController({
            name: 'player 2',
            position: [1, 1]
        });

        dispatch(addPlayer(player1));
        dispatch(addPlayer(player2));
    }, []);

    console.log('MY_REG players: ', players);

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
