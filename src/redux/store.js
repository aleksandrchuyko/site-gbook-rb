import { configureStore } from '@reduxjs/toolkit';
import { visitorlistReducer } from './visitorlistSlice';
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
import { visitorsApi } from './visitors/visitors-api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    visitorlist: visitorlistReducer,
    [visitorsApi.reducerPath]: visitorsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      visitorsApi.middleware,
    ];
  },
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
