import { createSlice } from '@reduxjs/toolkit';

const directions = [
    { row: -1, column: 0 },
    { row: 1, column: 0 },
    { row: 0, column: -1 },
    { row: 0, column: 1 },
]

const initialState = {
    isReady: false,
    players: [],
    possibleMoves: [],
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

            const row = currentPlayerPosition[0];
            const column = currentPlayerPosition[1];
            
            for (const direction of directions) {
                const newRow = row + direction.row;
                const newColumn = column + direction.column;
    
                if (newRow >= 0 && newRow <= 8 && newColumn >= 0 && newColumn <= 8) {
                    const newPossibleMove = { row: newRow, column: newColumn };
                    state.possibleMoves = [...state.possibleMoves, newPossibleMove]
                }
            }
        }
    },
});

export const {
    start,
    addPlayer ,
    setActivePlayer,
    getPossibleMoves,
} = gameSlice.actions;

export default gameSlice.reducer;
