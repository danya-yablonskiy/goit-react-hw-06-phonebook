// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';


// export const store = createStore(reducer, {
//   contacts: JSON.parse(localStorage.getItem('contacts')),
//   filter: '',
// });
export const store = configureStore({reducer})