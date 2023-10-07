import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/slice';

export const store = configureStore({
    reducer: {
        board: boardReducer,
    },
});
