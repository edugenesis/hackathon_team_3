import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/slice';
import gameReducer from '../features/game/slice';

export const store = configureStore({
    reducer: {
        board: boardReducer,
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
