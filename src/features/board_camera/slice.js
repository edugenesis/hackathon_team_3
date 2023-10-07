import { createSlice } from "@reduxjs/toolkit";

const p1Camera = {
  x: 0,
  y: 8,
  z: 10,
  rotationX: -0.2,
  rotationY: 0,
  rotationZ: 0,
};

const p2Camera = {
  x: 0,
  y: 8,
  z: -10,
  rotationX: -0.75,
  rotationY: 0,
  rotationZ: 1,
};

const initialState = {
  position: p1Camera,
  positionStr: "p1Camera",
};

export const boardCameraSlice = createSlice({
  name: "board_camera",
  initialState,
  reducers: {
    resetPlayer: (state) => {
      state = initialState;
    },
    changePlayer: (state) => {
      if (state.positionStr === "p1Camera") {
        state.position = p2Camera;
        state.positionStr = "p2Camera";
      } else {
        state.position = p1Camera;
        state.positionStr = "p1Camera";
      }
    },
  },
});

export const { resetPlayer, changePlayer } = boardCameraSlice.actions;

export default boardCameraSlice.reducer;
