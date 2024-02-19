import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  value: boolean;
}

const initialState: InitialStateType = {
  value: false
};

const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return {
        value: action.payload
      };
    }
  }
});

export const { setLoading } = loading.actions;

export const loadingReducer = loading.reducer;
