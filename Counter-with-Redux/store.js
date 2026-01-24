import counterReducer from "../Fetures/CounterSlice"; // default import
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // reducer function
  },
});
