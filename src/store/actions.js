// import { nanoid } from 'nanoid';

import { createAction } from '@reduxjs/toolkit';

// export const setContactsAction = (contacts, name, number) => {
//   return {
//     type: SETCONTACTS,
//     payload: [...contacts, { id: nanoid(), name, number }],
//   };
// };

// export const changeFilterAction = value => {
//   return { type: SETFILTER, payload: value };
// };

// export const deleteContactAction = filterId => {
//   return {
//     type: SETCONTACTS,
//     payload: [...filterId],
//   };
// };

export const setContactsAction = createAction('SETCONTACTS');
export const changeFilterAction = createAction('SETFILTER');

export const deleteContactAction = createAction('SETCONTACTS');
