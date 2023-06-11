import { createSlice } from '@reduxjs/toolkit';
import { initStateContacts } from './initStateContacts';



const deleteSlice = createSlice({
  name: 'DELETECONTACTS',
  initialState: initStateContacts,
  reducers: {
    deleteContacts: (state, { payload }) => {
      state.contacts = payload;
    },
  },
});

export const deleteReducer = deleteSlice.reducer;
export const { deleteContacts } = deleteSlice.actions;