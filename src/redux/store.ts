import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from "./authSlice";
import basketSlice from "./basketSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    basket: basketSlice,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
    {reducer: {
            reducer: persistedReducer,
        },
        devTools: import.meta.env.MODE === 'development',
    }
);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;