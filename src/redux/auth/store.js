import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from "./slice";

const persistConfig = {
    key: 'authorization',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore(
    {
        reducer: {
            authorization: persistedReducer,
        },
        devTools: import.meta.env.MODE === 'development',
    });

const persistor = persistStore(store);

export {store, persistor};