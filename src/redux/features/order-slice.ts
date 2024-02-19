import { createSlice } from '@reduxjs/toolkit';

export type orderType = 'asc' | 'desc';

type InitialStateType = {
  value: orderType
}

const initialState: InitialStateType = {
  value: 'desc'
};

const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    toggle: (state) => {
      return {
        value: state.value === 'desc' ? 'asc' : 'desc'
      };
    }
  }
});

export const { toggle } = order.actions;

export const orderReducer = order.reducer;
