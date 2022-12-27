import { createSlice } from "@reduxjs/toolkit";

const change = createSlice({
  name: "statechange",
  initialState: {
    main: false,
  },
  reducers: {
    chagneture: (state, action) => {
      state.main = !state.main;
    },
    changefalse: (state, action) => {
      state.main = false;
    },
  },
});
export const { chagneture, changefalse } = change.actions;
export default change.reducer;
