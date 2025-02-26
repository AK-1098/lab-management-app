import { configureStore } from "@reduxjs/toolkit";
import labReducer from "./labSlice";

const store = configureStore({
  reducer: {
    lab: labReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
