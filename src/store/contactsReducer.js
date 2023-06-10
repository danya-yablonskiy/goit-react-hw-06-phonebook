import { createReducer } from '@reduxjs/toolkit';
import { initStateContacts } from './initStateContacts';

import { setContactsAction } from './actions';

// export const contactsReducer = (state = initStateContacts, action) => {
//   if (action.type === SETCONTACTS) {
//     return { ...state, contacts: action.payload };
//   }
//   return state;
// };

export const contactsReducer = createReducer(initStateContacts, {
  [setContactsAction]: (state, action) => {
    return { ...state, contacts: action.payload };
  },
});
