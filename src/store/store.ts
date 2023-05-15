import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/authSlice';
import postReducer from './slices/postSlice';
import profileReducer from './slices/profileSlice';
import usersReducer from './slices/usersSlice';
import dialogReducer from './slices/dialogSlice';
import contactReducer from './slices/contactSlice';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const reducers = combineReducers({
  auth: persistedReducer,
  post: postReducer,
  profile: profileReducer,
  users: usersReducer,
  dialog: dialogReducer,
  contact: contactReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
