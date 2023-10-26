import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { value: boolean } = {
  value: false,
};

export const modalSliceLinks = createSlice({
  name: "modalIsActiveLinks",
  initialState,
  reducers: {
    setModalLinksActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setModalLinksActive } = modalSliceLinks.actions;

export default modalSliceLinks.reducer;
