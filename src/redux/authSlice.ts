import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const guest = 'guest@example.com';

const initialState: AuthState  = {
    users: [],
    loggedUser: localStorage.getItem('loggedUser') || guest,
    isLoggedIn: !!localStorage.getItem('loggedUser'),
    isOpen: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        signUp: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
            state.loggedUser = action.payload.email;
            state.isLoggedIn = true;
        },
        logIn: (state, action: PayloadAction<string>) => {
            state.loggedUser = action.payload;
            state.isLoggedIn = true;
        },
        signOut: (state) => {
            state.loggedUser = guest;
            state.isLoggedIn = false;
        },
        closeAuthorization: (state) => {
            state.isOpen = false;
        },
        openAuthorization: (state) => {
            state.isOpen = true;
        },
    },
});

export const {setUsers, signUp, logIn, signOut, closeAuthorization, openAuthorization} = authSlice.actions;
export default authSlice.reducer;