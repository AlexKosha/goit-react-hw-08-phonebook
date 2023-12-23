import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contactSlice';
import filter from './Filter/filterSlice';
import { authPersistConfig, authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    userContacts: contacts,
    userFilter: filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
