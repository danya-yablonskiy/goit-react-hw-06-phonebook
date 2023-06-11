
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { deleteReducer } from './deleteSlice';


export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  deleteContacts: deleteReducer,
};
