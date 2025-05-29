import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loggedUser: 'guest@example.com',
    isLoggedIn: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});
export const authReducer = authSlice.reducer;