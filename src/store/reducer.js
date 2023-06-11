import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { deleteReducer } from './deleteSlice';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  deleteContacts: deleteReducer,
});
