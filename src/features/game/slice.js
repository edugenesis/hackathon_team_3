import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isReady: false,
    players: [],
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

                state[action.payload.name] = action.payload.position;
            }
        },
        setActivePlayer: (state, action) => {
            state.activePlayer = action.payload;
        }
    },
});

export const {
    start,
    addPlayer ,
    setActivePlayer,
} = gameSlice.actions;

export default gameSlice.reducer;
