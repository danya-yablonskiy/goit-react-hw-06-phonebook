import { createSlice } from '@reduxjs/toolkit';
import { initStateContacts } from './initStateContacts';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'SETCONTACTS',
  initialState: initStateContacts,
  reducers: {
    setContacts: (state, { payload: { name, number } }) => {
      state.contacts.push({ id: nanoid(), name, number });
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setContacts,deleteContacts } = contactsSlice.actions;
