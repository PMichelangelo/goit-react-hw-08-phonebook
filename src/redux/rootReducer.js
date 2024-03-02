import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import authReducer from './auth/auth-slice';
import quoteReducer from './quote/quote-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'quote'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persisteQuotehReducer = persistReducer(persistConfig, quoteReducer);
const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
  quote: persisteQuotehReducer,
});

export default rootReducer;
