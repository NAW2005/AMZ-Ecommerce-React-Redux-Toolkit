import { configureStore } from "@reduxjs/toolkit";
import forproduct from "./slicer/product";
import forchange from "./slicer/chagne";

const store = configureStore({
  reducer: {
    main: forproduct,
    forchange: forchange,
  },
});

export default store;
