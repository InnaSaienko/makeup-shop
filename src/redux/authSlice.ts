import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: AuthState  = {
    user: {
        first_name: "",
        last_name: "",
        birthday: "",
        phone: "",
        email: "",
        password: "",
    },
    isLoggedIn: false,
    isOpen: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        signUp: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logIn: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.user = initialState.user;
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

export const {setUser, signUp, logIn, logOut, closeAuthorization, openAuthorization} = authSlice.actions;
export default authSlice.reducer;