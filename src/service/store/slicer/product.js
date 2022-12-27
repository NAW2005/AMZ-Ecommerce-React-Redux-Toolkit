import { createSlice } from "@reduxjs/toolkit";

const forproduct = createSlice({
  name: "main",
  initialState: {
    product: [],
    sider: [],
  },
  reducers: {
    getproduct: (state, action) => {
      state.product = action.payload;
    },
    tosidebar: (state, action) => {
      state.sider.push(action.payload);
    },
    plusitem: (state, { payload }) => {
      state.sider.filter(
        (i) => i.id ===  payload.id && { amount: i.amount + 1, ...i }
      );
    },
  },
});

export const { getproduct, tosidebar } = forproduct.actions;
export default forproduct.reducer;
