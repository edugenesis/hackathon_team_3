import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    size: 9,
};

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        changeSize: (state, action) => {
            state.size = action.payload;
        },
    },
});

export const { changeSize } = boardSlice.actions;

export default boardSlice.reducer;
