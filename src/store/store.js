// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const store = configureStore({reducer})