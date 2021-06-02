import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomeReducer from '../pages/HomePage/slice';
import ThemeReducer from '../styles/theme/slice';

export const store = configureStore({
  reducer: {
    home: HomeReducer,
    theme: ThemeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
