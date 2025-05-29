import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loggedUser: 'guest@example.com',
    isLoggedIn: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setLoggedUser: (state, action) => {
            state.loggedUser = action.payload;
            state.isLoggedIn = action.payload !== 'guest@example.com';
            localStorage.setItem('loggedUser', action.payload);
        },
        userSignUp: (state, action) => {
            const newUser = action.payload;
            state.users = [...state.users, newUser];
            state.loggedUser = newUser.email;
            state.isLoggedIn = true;
            localStorage.setItem('loggedUser', newUser.email);
        },
        logIn: (state, action) => {
            state.loggedUser = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem('loggedUser', action.payload);
        },
        signOut: (state) => {
            state.loggedUser = 'guest@example.com';
            state.isLoggedIn = false;
            localStorage.removeItem('loggedUser');
        },
    },
});

export const {setUsers, setLoggedUser, userSignUp, logIn, signOut} = authSlice.actions;
export const authReducer = authSlice.reducer;