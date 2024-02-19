'use client';

import type { TypedUseSelectorHook } from 'react-redux';
import { loadingReducer } from './features/loading-slice';
import { orderReducer } from './features/order-slice';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    loadingReducer,
    orderReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
