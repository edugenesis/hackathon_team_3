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
        setActivePlayer: (state, { payload }) => {
            state.activePlayer = payload;
        },
        addActiveWall: (state, { payload }) => {
            const [newX, newY] = payload.position;

            const preventSetWall = [...state.activeWalls].some(({position: [x, y]}) => {
                if (x === newX && y === newY) {
                    return true;
                }

                if (x + 1 === newX && y === newY) {
                    return true;
                }

                if (x === newX && y + 1 === newY) {
                    return true;
                }

                if (x - 1 === newX && y === newY) {
                    return true;
                }

                if (x === newX && y - 1 === newY) {
                    return true;
                }

                return false
            });

            if (!preventSetWall) {
                const activePlayerIndex = state.players.indexOf(state.activePlayer);

                const newActivePlayerIndex = activePlayerIndex === 0 ? 1 : 0;

                state.activeWalls.push(payload);
                state.activePlayer = state.players[newActivePlayerIndex];
            } else {
                console.log('MY_REG 666: ', 666);
            }
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
