import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
