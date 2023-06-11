import { contactsReducer } from './contactsReducer';
import { deleteReducer } from './deleteReducer';
import { filterReducer } from './filterReducer';

// export const reducer = (state=initialState, action) => {
//   if (action.type === 'setContacts') {
//     return { ...state, contacts: action.payload };
//   }
//   if (action.type === 'setFilter') {
//     return { ...state, filter: action.payload };
//   }
//   return state;
// };

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  deleteContacts: deleteReducer
};
