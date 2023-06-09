import { act } from '@testing-library/react';
import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'setName') {
    return { ...state, name: action.payload };
  }
  if (action.type === 'setNumber') {
    return { ...state, number: action.payload };
  }
  if (action.type === 'setContacts') {
    return { ...state, contacts: action.payload };
  }
  if (action.type === 'setFilter') {
    return { ...state, filter: action.payload };
  }
  return state;
};

export const store = createStore(reducer, {
  name: '',
  number: '',
  // ТУТ ПОМИЛКА!!!
  contacts: () => {
    return JSON.parse(localStorage.getItem('contacts'));
  },
  filter: '',
});
