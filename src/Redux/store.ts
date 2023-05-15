import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./services/postApi";
import { demitoSlice } from "./slices";

export const store = configureStore({
  reducer: {
    demito: demitoSlice.reducer,
    [postApi.reducerPath]: postApi.reducer
  },

  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(postApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
