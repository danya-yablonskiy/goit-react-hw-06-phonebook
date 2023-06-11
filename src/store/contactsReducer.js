import { createReducer } from '@reduxjs/toolkit';
import { initStateContacts } from './initStateContacts';

import { setContactsAction } from './actions';
import { nanoid } from 'nanoid';

// export const contactsReducer = (state = initStateContacts, action) => {
//   if (action.type === SETCONTACTS) {
//     return { ...state, contacts: action.payload };
//   }
//   return state;
// };

// export const setContactsAction = (contacts, name, number) => {
//   return {
//     type: SETCONTACTS,
//     payload: [...contacts, { id: nanoid(), name, number }],
//   };
// };

export const contactsReducer = createReducer(initStateContacts, {
  [setContactsAction]: (state, { payload: { name, number } }) => {
    state.contacts.push({ id: nanoid(), name, number });
  },
});
