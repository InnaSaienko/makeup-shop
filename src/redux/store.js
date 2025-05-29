import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from "./authSlice";


const rootReducer = combineReducers({
    auth: authReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore(
    {
        reducer: {
            reducer: persistedReducer,
        },
        devTools: import.meta.env.MODE === 'development',
    });

const persistor = persistStore(store);

export {store, persistor};