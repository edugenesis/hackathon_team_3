import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isReady: false,
    players: [],
    activeWalls: [],
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
} = gameSlice.actions;

export default gameSlice.reducer;
