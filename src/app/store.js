import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/board/slice';
import gameReducer from '../features/game/slice';
import boardCameraReducer from '../features/board_camera/slice';

export const store = configureStore({
    reducer: {
        board: boardReducer,
        game: gameReducer,
        board_camera: boardCameraReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
