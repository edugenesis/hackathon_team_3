import { createSlice } from '@reduxjs/toolkit';

import { directions } from './constants';

const initialState = {
    isReady: false,
    players: [],
    possibleMoves: [],
    activeWalls: [{"position":[0,1]},{"position":[1,0],"horizontal":true}],
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        start: (state) => {
            state.isReady = true;
        },
        addPlayer: (state, action) => {
            const hasPlayer = state.players.some(r => {
                return r === action.payload.name;
            });
            
            if (!hasPlayer) {
                state.players = [
                    ...state.players,
                    action.payload.name,
                ];

                state[action.payload.name] = {
                    position: action.payload.position,
                    wallsCount: 10
                };
            }
        },
        setActivePlayer: (state, action) => {
            state.activePlayer = action.payload;
        },
        getPossibleMoves: (state, action) => {
            const currentPlayerPosition = state[action.payload.playerName];
            const row = currentPlayerPosition.position[0];
            const column = currentPlayerPosition.position[1];
            
            for (const direction of directions) {
                const newRow = row + direction.row;
                const newColumn = column + direction.column;
    
                if (newRow >= 0 && newRow <= 8 && newColumn >= 0 && newColumn <= 8) {
                    const newPossibleMove = { row: newRow, column: newColumn };
                    state.possibleMoves = [...state.possibleMoves, newPossibleMove]
                }
            }
        },
        setPlayerMove: (state, action) => {
            const currentPlayer = state[state.activePlayer];
            const isUserClickingOnPossibleMove = state.possibleMoves.some(move => 
                move.row === action.payload.row && move.column === action.payload.column);

            if (!isUserClickingOnPossibleMove) return

            currentPlayer.position = [action.payload.row, action.payload.column];

            state.possibleMoves = [];
            state.activePlayer = state.activePlayer === 'player1' ? 'player2' : 'player1';
        },
        addActiveWall: (state, action) => {
            // TODO: чекнути чи можна ставити стіну
            console.log('MY_REG action: ', action);
            state.activeWalls.push(action.payload)
        },
    },
});

export const {
    start,
    addPlayer ,
    setActivePlayer,
    addActiveWall,
    getPossibleMoves,
    setPlayerMove,
} = gameSlice.actions;

export default gameSlice.reducer;
