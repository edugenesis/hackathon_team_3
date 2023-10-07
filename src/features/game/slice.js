import { createSlice } from '@reduxjs/toolkit';

import { directions } from './constants';

const initialState = {
    isReady: false,
    players: [],
    possibleMoves: [],
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
        changeActivePlayer: (state) => {
            const activePlayerIndex = state.players.indexOf(state.activePlayer);
            const newActivePlayerIndex = activePlayerIndex === 0 ? 1 : 0;
            state.activePlayer = state.players[newActivePlayerIndex];
        },
        getPossibleMoves: (state, action) => {
            const currentPlayerPosition = state[action.payload.playerName];
            const enemyPlayer = state[state.activePlayer === 'player1' ? 'player2' : 'player1'];
            const row = currentPlayerPosition.position[0];
            const column = currentPlayerPosition.position[1];

            for (const direction of directions) {
                const newRow = row + direction.row;
                const newColumn = column + direction.column;

                if (newRow >= 0 && newRow <= 8 && newColumn >= 0 && newColumn <= 8) {
                    const isOtherPlayerOnNewPosition = enemyPlayer.position[0] === newRow && enemyPlayer.position[1] === newColumn;

                    const isRow = direction.row !== 0;
                    const isColumn = direction.column !== 0;

                    if ((isRow && isOtherPlayerOnNewPosition) || (isColumn && isOtherPlayerOnNewPosition)) {
                        const num = direction.row !== 0 ? (direction.row > 0 ? 1 : -1) : (direction.column > 0 ? 1 : -1);
                        const newPossibleMove = {
                            row: isRow ? newRow + num : newRow,
                            column: isColumn ? newColumn + num : newColumn
                        };
                        state.possibleMoves = [...state.possibleMoves, newPossibleMove];
                    } else {
                        const newPossibleMove = {
                            row: newRow,
                            column: newColumn
                        };
                        state.possibleMoves = [...state.possibleMoves, newPossibleMove]; 
                    }
                }
            }
        },
        setPlayerMove: (state, action) => {
            const currentPlayer = state[state.activePlayer];
            const isUserClickingOnPossibleMove = state.possibleMoves.some(move =>
                move.row === action.payload.row && move.column === action.payload.column);

            if (!isUserClickingOnPossibleMove) return

            currentPlayer.position = [action.payload.row, action.payload.column];

            state.possibleMoves = [];
            state.activePlayer = state.activePlayer === 'player1' ? 'player2' : 'player1';
        },
        addActiveWall: (state, { payload }) => {
            if (state[state.activePlayer].wallsCount === 0) {
                return;
            }
            const [newX, newY] = payload.position;
            const newHorizontal = !!payload.horizontal;

            if (newX === 8 && !newHorizontal) {
                return;
            }

            if (newY === 8 && newHorizontal) {
                return;
            }


            const preventSetWall = [...state.activeWalls].some(({position: [x, y], horizontal}) => {
                if (x === newX && y === newY) {
                    return true;
                }

                if (x + 1 === newX && y === newY && !horizontal && !newHorizontal) {
                    return true;
                }

                if (x - 1 === newX && y === newY && !horizontal && !newHorizontal) {
                    return true;
                }

                if (x === newX && y + 1 === newY && horizontal && newHorizontal) {
                    return true;
                }

                if (x === newX && y - 1 === newY && horizontal && newHorizontal) {
                    return true;
                }

                return false
            });

            if (!preventSetWall) {
                state[state.activePlayer].wallsCount -= 1;
                const activePlayerIndex = state.players.indexOf(state.activePlayer);
                const newActivePlayerIndex = activePlayerIndex === 0 ? 1 : 0;

                state.activeWalls.push(payload);
                state.activePlayer = state.players[newActivePlayerIndex];
                state.possibleMoves = [];
            }
        }
    },
});

export const {
    start,
    addPlayer ,
    setActivePlayer,
    addActiveWall,
    getPossibleMoves,
    setPlayerMove,
    changeActivePlayer,
} = gameSlice.actions;

export default gameSlice.reducer;
