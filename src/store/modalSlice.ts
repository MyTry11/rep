import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { value: boolean } = {
  value: false,
};

export const modalSlice = createSlice({
  name: "modalIsActive",
  initialState,
  reducers: {
    setModalActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setModalActive } = modalSlice.actions;

export default modalSlice.reducer;
