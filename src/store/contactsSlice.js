import { createSlice } from "@reduxjs/toolkit";
import { initStateContacts } from "./initStateContacts";
import { nanoid } from "nanoid";

 const contactsSlice = createSlice({
  name: 'SETCONTACTS',
  initialState: initStateContacts,
  reducers: {
      setContacts: (state, { payload: { name, number } }) => {
          console.log(state.contacts);
      state.contacts.push({ id: nanoid(), name, number });
    },
  },
});

export const contactsReducer = contactsSlice.reducer
export const {setContacts } = contactsSlice.actions