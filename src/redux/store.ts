import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from "./authSlice";
import basketSlice from "./basketSlice";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import logger from "redux-logger";

export interface RootState {
    auth: AuthState;
    basket: BasketState;
}

const rootReducer = combineReducers({
    auth: authSlice,
    basket: basketSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'basket'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(logger),
        devTools: process.env.NODE_ENV === 'development',
    }
);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;