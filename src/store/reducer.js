
import { contactsReducer } from './contactsSlice';
import { deleteReducer } from './deleteReducer';
import { filterReducer } from './filterSlice';


export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  deleteContacts: deleteReducer,
};
