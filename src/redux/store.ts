import { configureStore } from "@reduxjs/toolkit";
import navHeightReducer from "./navHeight";

const store = configureStore({
  reducer: {
    navHeight: navHeightReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;