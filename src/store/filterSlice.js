import { createSlice } from '@reduxjs/toolkit';
import { initStateFilter } from './initStateFilter';

const filterSlice = createSlice({
  name: 'SETFILTER',
  initialState: initStateFilter,
  reducers: {
    setFilter: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
