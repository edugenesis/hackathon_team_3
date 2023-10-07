import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isReady: false,
    players: []
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        start: (state) => {
            state.isReady = true;
        },
        addPlayer: (state, action) => {
            state.players.push(action.payload);
        }
    },
});

export const { start, addPlayer } = gameSlice.actions;

export default gameSlice.reducer;
