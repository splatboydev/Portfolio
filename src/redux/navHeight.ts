import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

const navHeightSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setNavHeight: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { setNavHeight } = navHeightSlice.actions;
export default navHeightSlice.reducer;
