import {Canvas} from '@react-three/fiber'
import {Board} from "./components/Board";
import { Player } from "./components/Player";
import { useEffect, useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPlayer, changeActivePlayer, setActivePlayer, start} from "./features/game/slice";
import { PossibleMove } from './components/PossibleMoves'

function App() {
    const currentActivePlayer = useRef('player1')
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const activePlayer = useSelector((state) => state.game.activePlayer);

    useEffect(() => {
      if (currentActivePlayer.current === activePlayer) return;
      setTimeout(() => {
        currentActivePlayer.current = activePlayer;
      }, 500);
    }, [activePlayer, dispatch]);

    useEffect(() => {
        dispatch(addPlayer({
            name: 'player1',
            position: [4, 8],
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
                {game.possibleMoves.map((move, index) => {
                  
                    return (
                       <PossibleMove x={move.row} y={move.column} key={index} />
                    )
                })}
            </Canvas>
        </>
    );
}

export default App;
