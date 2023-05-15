import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '../services/postApi';
import { demitoSlice } from './slices';

export const store = configureStore({
  reducer: {
    demito: demitoSlice.reducer,
    [postApi.reducerPath]: postApi.reducer
  },

  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(postApi.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// export const wrapper = createWrapper(makeStore);