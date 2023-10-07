import { createSlice } from '@reduxjs/toolkit';

const USER_MOVE_ACTION = 'player/move';
const USER_MOVE_DIRECTION = {

}


const initialState = {
    size: 9,
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        move: (state, action) => {
            state.size = action.payload;
        },
    },
});

export const { changeSize } = playerSlice.actions;

export default playerSlice.reducer;
