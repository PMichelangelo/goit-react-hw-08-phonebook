import { combineReducers } from '@reduxjs/toolkit';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/auth-slice';

/*
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
*/

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

//const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;
