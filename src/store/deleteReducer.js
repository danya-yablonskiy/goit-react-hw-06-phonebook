import { createReducer } from '@reduxjs/toolkit';
import { initStateContacts } from './initStateContacts';
import { deleteContactAction } from './actions';

// export const deleteContactAction = filterId => {
//   return {
//     type: SETCONTACTS,
//     payload: [...filterId],
//   };
// };

export const deleteReducer = createReducer(initStateContacts, {
  [deleteContactAction]: (state, { payload }) => {
    console.log(payload);
  },
});
