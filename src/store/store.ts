import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import modalSliceLinks from "./modalSliceLinks";

export const store = configureStore({
  reducer: {
    modalSlice,
    modalSliceLinks,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
